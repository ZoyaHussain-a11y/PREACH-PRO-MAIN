# Preach Pro - AI Coding Agent Instructions

## Project Overview

Preach Pro is a comprehensive ministry management platform that combines AI-powered sermon writing assistance with complete ministry organization tools. The platform serves as an all-in-one solution for modern church leadership, integrating sermon preparation, calendar management, task tracking, contact management, and performance analytics.

Built with Next.js 15, TypeScript, and Tailwind CSS v4, the project uses the new App Router architecture and follows strict development practices with comprehensive tooling.

## Architecture & Key Patterns

### Core Stack

- **Next.js 15** with App Router (`src/app/`) and Turbopack for dev/build
- **React 19** with strict TypeScript configuration
- **Tailwind CSS v4** with inline theme configuration and CSS custom properties
- **Prisma ORM** with PostgreSQL database and type-safe client
- **Font Strategy**: Geist Sans/Mono fonts loaded via `next/font/google` with CSS variables

### Project Structure

```
src/
├── app/                 # App Router pages and layouts
├── components/ui/       # Reusable UI components (follow shadcn/ui patterns)
├── hooks/              # Custom React hooks with SSR-safe implementations
├── lib/                # Utility functions and shared logic (includes prisma.ts)
├── types/              # TypeScript definitions (API responses, pagination)
├── styles/             # Global CSS with Tailwind and theme variables
└── utils/              # Pure utility functions

prisma/
├── schema.prisma       # Database schema and models
└── migrations/         # Database migration files (auto-generated)
```

### Critical Conventions

#### Core Development Principles

- **Avoid Prop Drilling**: Use React Context for shared state instead of passing props through multiple component layers
- **Component Composition**: Keep components small and focused - create small, reusable components rather than large monolithic ones
- **Clean Code**: Avoid excessive comments - write self-documenting code with clear naming conventions
- **Single Responsibility**: Each component should have one clear responsibility
- **Context Usage**: For shared state (user auth, theme, app settings), use React Context to avoid prop drilling
- **Component Size**: If a component exceeds ~100 lines, consider breaking it into smaller components
- **Minimal Comments**: Code should be self-explanatory; only add comments for complex business logic

#### Import Aliases

- Use `@/*` path mapping for all src imports: `import { cn } from '@/lib/utils'`
- Never use relative imports for src files

#### CSS & Styling

- **Tailwind v4 Syntax**: Uses new `@theme inline` directive in `globals.css`
- **Class Utility**: Always use `cn()` from `@/lib/utils` for conditional classes
- **Theme Variables**: Custom properties in `:root` with dark mode via `prefers-color-scheme`
- **Font Variables**: `--font-geist-sans` and `--font-geist-mono` applied in layout

#### TypeScript Patterns

- **API Types**: Use `ApiResponse<T>` and `PaginatedResponse<T>` from `@/types`
- **Strict Config**: `strict: true`, no implicit any, enforce proper typing
- **Component Props**: Use `Readonly<{}>` wrapper for children props

#### Database Patterns

- **Prisma Client**: Import from `@/lib/prisma` - singleton instance with global caching
- **Schema Definition**: All models in `prisma/schema.prisma` with proper relations and indexes
- **Type Safety**: Use Prisma-generated types, never manual database types
- **Queries**: Prefer Prisma Client methods over raw SQL for type safety

#### React Hooks

- **SSR Safety**: All custom hooks handle `typeof window === 'undefined'` checks
- **Local Storage**: Use `useLocalStorage<T>` hook with proper error handling
- **Toast Notifications**: Use `useToast()` hook for consistent notification patterns
- **usehooks-ts Integration**: Leverage pre-built hooks from usehooks-ts library
  - `useDebounce()` - Debounce values for search and input
  - `useMediaQuery()` - Responsive design with media queries
  - `useIntersectionObserver()` - Lazy loading and scroll effects
  - `useEventListener()` - Type-safe event listeners
  - `useOnClickOutside()` - Detect clicks outside elements
  - `useWindowSize()` - Track window dimensions
  - See [usehooks-ts.com](https://usehooks-ts.com) for full list
- **Hook Exports**: Centralized in `@/hooks/index.ts`

#### Utility Patterns

- **Toast Notifications**: Import `toast` from `@/lib/toast` or use `useToast()` hook for React components
- **Date/Time Formatting**: Use `dateTime` utility from `@/lib/datetime` for professional formatting
  - `dateTime.format(date, 'professional')` for business contexts
  - `dateTime.relative(date)` for "time ago" display
  - `dateTime.business(date)` for formal date presentation
  - `dateTime.calendar(date)` for smart calendar display
- **Utility Exports**: All utilities available from `@/lib/index.ts` for convenience imports

#### Validation Patterns

- **Schema Validation**: Use Zod for all runtime validation and type inference
- **API Validation**: Define Zod schemas for API request/response validation
- **Form Validation**: Integrate Zod with form libraries for client-side validation
- **Type Safety**: Leverage `z.infer<typeof schema>` for automatic TypeScript types
- **Error Handling**: Use Zod's error formatting for user-friendly validation messages

#### Form Management Patterns

- **React Hook Form**: Use for complex forms with validation, performance, and TypeScript support
- **Zod Integration**: Use `zodResolver` from `@hookform/resolvers/zod` for schema validation
- **Form State**: Leverage `register`, `handleSubmit`, `formState` for form control
- **Error Display**: Use `formState.errors` for field-level error messages
- **Type Safety**: Use `z.infer<typeof schema>` with `useForm<FormData>()` for full type safety
- **Performance**: React Hook Form uses uncontrolled components for better performance
- **Server Actions**: Combine with Server Actions for type-safe form submissions

### Next.js 15 Best Practices

#### Server Components vs Client Components

**Default to Server Components:**

- All components are Server Components by default (no `'use client'` directive)
- Server Components can fetch data directly, access databases, and use secrets
- Better performance: less JavaScript sent to client
- Automatic code splitting and streaming

**Use Client Components only when needed:**

- Add `'use client'` directive at the top of the file when you need:
  - React hooks (useState, useEffect, useContext, custom hooks)
  - Event handlers (onClick, onChange, onSubmit)
  - Browser-only APIs (window, document, localStorage)
  - React Context providers and consumers
  - Third-party libraries that use React hooks

**Component Composition Pattern:**

```tsx
// app/page.tsx (Server Component)
import ClientButton from '@/components/client-button';

export default async function Page() {
  const data = await fetchData(); // Direct data fetching in Server Component

  return (
    <div>
      <h1>{data.title}</h1>
      <ClientButton /> {/* Client Component for interactivity */}
    </div>
  );
}

// components/client-button.tsx (Client Component)
('use client');

export default function ClientButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

#### Server Actions

**Create Server Actions for mutations:**

- Place server actions in separate files or at the top of Server Components
- Use `'use server'` directive at the top of the file or function
- Always validate input with Zod schemas
- Handle errors gracefully and return meaningful responses
- Use `revalidatePath()` or `revalidateTag()` to update cached data

**Example Structure:**

```tsx
// app/actions/user.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function createUser(formData: FormData) {
  try {
    // Validate input
    const data = createUserSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
    });

    // Perform mutation
    const user = await prisma.user.create({ data });

    // Revalidate cached pages
    revalidatePath('/users');

    return { success: true, user };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors };
    }
    return { success: false, error: 'Failed to create user' };
  }
}
```

**Use Server Actions in Client Components:**

```tsx
'use client';

import { createUser } from '@/app/actions/user';
import { useToast } from '@/hooks/use-toast';

export function UserForm() {
  const { success, error } = useToast();

  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData);

    if (result.success) {
      success('User created successfully!');
    } else {
      error(result.error || 'Failed to create user');
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create User</button>
    </form>
  );
}
```

#### Data Fetching & Caching

**Server Components - Direct Data Fetching:**

```tsx
// app/posts/page.tsx
import { prisma } from '@/lib/prisma';

// Static Generation (default)
export default async function PostsPage() {
  const posts = await prisma.post.findMany();
  return <PostList posts={posts} />;
}

// With revalidation (ISR)
export const revalidate = 3600; // Revalidate every hour

// Dynamic rendering
export const dynamic = 'force-dynamic'; // Opt into dynamic rendering

// Streaming with Suspense
export default async function Page() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <PostList />
    </Suspense>
  );
}
```

**Route Handlers - API Routes:**

```tsx
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Cache configuration
export const dynamic = 'force-dynamic'; // or 'auto', 'error', 'force-static'
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validate with Zod
    const post = await prisma.post.create({ data: body });
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
```

#### Rendering Strategies

**1. Static Site Generation (SSG) - Default & Preferred:**

- Fastest performance, pages built at build time
- Use for pages that don't change often
- Public content, blog posts, documentation

```tsx
// Automatically static by default
export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

**2. Incremental Static Regeneration (ISR):**

- Static generation with periodic updates
- Use for pages that change occasionally
- News articles, product listings

```tsx
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

**3. Server-Side Rendering (SSR):**

- Rendered on each request
- Use for personalized content or frequently changing data
- User dashboards, real-time data

```tsx
export const dynamic = 'force-dynamic';
// or use: export const revalidate = 0

export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

**4. Client-Side Rendering (CSR):**

- Rendered in browser after initial load
- Use for highly interactive features
- Real-time updates, user-specific state

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>{data?.title}</div>;
}
```

#### SEO Best Practices

**1. Metadata API - Every Page Must Have:**

```tsx
// app/page.tsx or app/[slug]/page.tsx
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Your App Name - Modern Web Application',
  description:
    'Build amazing web applications with our modern Next.js starter template.',
  keywords: ['nextjs', 'typescript', 'tailwind', 'starter', 'template'],
  authors: [{ name: 'Your Team' }],
  openGraph: {
    title: 'Your App Name',
    description: 'Modern Web Application',
    url: 'https://your-domain.com',
    siteName: 'Your App Name',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your App Name',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App Name',
    description: 'Modern Web Application',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <div>Content</div>;
}
```

**2. Dynamic Metadata for Dynamic Routes:**

```tsx
// app/posts/[slug]/page.tsx
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  if (!post) return {};

  return {
    title: `${post.title} | Your App Name`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      publishedTime: post.publishedAt.toISOString(),
      authors: [post.author.name],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  if (!post) notFound();

  return <article>{post.content}</article>;
}
```

**3. Structured Data (JSON-LD):**

```tsx
// app/posts/[slug]/page.tsx
export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>{post.content}</article>
    </>
  );
}
```

**4. Sitemap Generation:**

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await prisma.post.findMany({
    select: { slug: true, updatedAt: true },
  });

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, updatedAt }) => ({
      url: `https://your-domain.com/posts/${slug}`,
      lastModified: updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://your-domain.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postEntries,
  ];
}
```

**5. Robots.txt:**

```tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
    ],
    sitemap: 'https://your-domain.com/sitemap.xml',
  };
}
```

**6. Canonical URLs:**

```tsx
// Always include canonical URLs to avoid duplicate content
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://your-domain.com/posts/example',
  },
};
```

**7. Image Optimization:**

```tsx
// Use next/image for automatic optimization
import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src="/hero.jpg"
      alt="Your App Hero Image" // Always include descriptive alt text
      width={1200}
      height={630}
      priority // For above-the-fold images
      placeholder="blur" // For better UX
    />
  );
}
```

#### Performance Optimization

**1. Loading States with Suspense:**

```tsx
// app/posts/page.tsx
import { Suspense } from 'react';

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </div>
  );
}
```

**2. Parallel Data Fetching:**

```tsx
export default async function Page() {
  // Fetch in parallel, not sequential
  const [posts, users, comments] = await Promise.all([
    fetchPosts(),
    fetchUsers(),
    fetchComments(),
  ]);

  return <div>{/* Use data */}</div>;
}
```

**3. Route Groups for Layout Organization:**

```
app/
├── (auth)/
│   ├── layout.tsx      # Auth layout
│   ├── login/
│   │   └── page.tsx
├── (public)/
│   ├── layout.tsx      # Marketing layout
│   ├── page.tsx        # Home page
│   └── about/
│       └── page.tsx
├── (private)/
│   └── admin/        # Admin dashboard layout
│   │   ├── layout.tsx
│   │   └── page.tsx
│       └── page.tsx
└── layout.tsx          # Root layout
```

**4. Dynamic Imports for Code Splitting:**

```tsx
import dynamic from 'next/dynamic';

// Load component only when needed
const HeavyComponent = dynamic(() => import('@/components/heavy-component'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR if needed
});

export default function Page() {
  return <HeavyComponent />;
}
```

## Development Workflow

### Essential Commands

```bash
npm run dev          # Start with Turbopack (faster than webpack)
npm run build        # Production build with Turbopack
npm run lint         # ESLint with auto-fix
npm run format       # Prettier with Tailwind plugin
npm run type-check   # TypeScript validation without emit

# Database Commands
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema changes to database (development)
npm run db:migrate   # Create and apply migration (development)
npm run db:studio    # Open Prisma Studio
```

### Quality Controls

- **Husky + lint-staged**: Pre-commit hooks enforce formatting and linting
- **ESLint Config**: Flat config with Next.js, TypeScript, React, a11y, and unused imports rules
- **Prettier**: Includes `prettier-plugin-tailwindcss` for class sorting

### Code Quality Rules

1. **ESLint Violations**: Fix automatically with `npm run lint` before committing
2. **Import Organization**: Use `eslint-plugin-unused-imports` - remove unused, sort imports
3. **Accessibility**: `eslint-plugin-jsx-a11y` enforced - include proper ARIA labels
4. **React Patterns**: Hooks rules enforced, proper dependency arrays required

## Integration Points

### External Dependencies

- **shadcn/ui**: Modern component library with Radix UI primitives and Tailwind CSS styling
- **Magic UI**: 150+ animated components built with Framer Motion - perfect companion for shadcn/ui
- **lucide-react**: Icon library used by shadcn/ui components
- **clsx + tailwind-merge**: Combined in `cn()` utility for robust class merging
- **Sonner**: Toast notification library integrated with theme system
- **dayjs**: Professional date/time formatting and manipulation library
- **Zod**: Schema validation and type inference for runtime type safety
- **React Hook Form**: Performant form library with TypeScript support and Zod integration
- **usehooks-ts**: Collection of TypeScript-ready React hooks for common use cases
- **Framer Motion**: Animation library for React - used by Magic UI components
- **Next.js Features**: Uses `next/font`, `next/image` with proper optimization
- **Build System**: Turbopack enabled for both dev and production builds
- **Prisma ORM**: Type-safe database access with PostgreSQL backend
- **TypeScript**: Strict typing across the entire codebase
- **Tailwind CSS v4**: Latest version with inline theming and custom properties
- **Husky + lint-staged**: Git hooks for pre-commit code quality enforcement
- **ESLint + Prettier**: Comprehensive linting and formatting setup
- **VSCode Extensions**: Recommended extensions include ESLint, Prettier, Tailwind CSS IntelliSense, Prisma, and shadcn/ui MCP
- **Better Auth**: Authentication handled via NextAuth.js or custom solution (not included in this snippet)

### API Patterns

- **Response Structure**: All APIs should return `ApiResponse<T>` format
- **Pagination**: Use `PaginationParams` and `PaginatedResponse<T>` for lists
- **Type Safety**: Define API response types in `@/types/index.ts`

## Component Development

### UI Component Guidelines

- **shadcn/ui Integration**: Use shadcn/ui components from `@/components/ui/` for consistent design
- **Component Installation**: Install new components via `npx shadcn@latest add [component-name]`
- **Magic UI Integration**: Use Magic UI components from `@/components/magicui/` for advanced animations
  - Copy components from [magicui.design](https://magicui.design/docs/components)
  - 150+ animated components with Framer Motion
  - Perfect for landing pages, hero sections, and interactive elements
  - Examples: BlurIn, Marquee, AnimatedBeam, Particles, BorderBeam
- **Custom Primary Colors**: Project uses custom primary color palette (`#3473ba` family with OKLCH variants)
- **Theme Configuration**: Colors defined in CSS custom properties with light/dark mode support
- **Component Styling**: Use `cn()` utility for conditional classes, follow shadcn/ui patterns
- **Animation Best Practices**: Respect `prefers-reduced-motion` for accessibility
- **MCP Support**: shadcn/ui MCP extension (`suhelmakkad.shadcn-ui`) installed for AI-guided component development
- **Available Components**: Button, Card, Badge (base set) - expand as needed with `shadcn add`

### Page Development

- App Router pages go in `src/app/`
- Use proper metadata exports for SEO
- Implement loading.tsx, error.tsx, not-found.tsx as needed
- Follow the established layout pattern with font variables

## Performance & Optimization

- **Turbopack**: Always use for builds (`--turbopack` flag in scripts)
- **Font Loading**: Geist fonts with proper variable setup and `font-display: swap`
- **Image Optimization**: Use `next/image` with proper sizing and priority flags
- **CSS**: Leverage Tailwind's tree-shaking and CSS custom properties for theming
