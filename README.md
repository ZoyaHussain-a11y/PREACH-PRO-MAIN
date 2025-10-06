# Preach Pro

A comprehensive ministry management platform that combines AI-powered sermon writing assistance with complete ministry organization tools. The platform serves as an all-in-one solution for modern church leadership, integrating sermon preparation, calendar management, task tracking, contact management, and performance analytics.

## ✨ Core Features

### Ministry Management

- 📝 **AI-Powered Sermon Writing** - Intelligent assistance for sermon preparation and writing
- 📅 **Calendar Management** - Organize ministry events, services, and schedules
- ✅ **Task Tracking** - Keep track of ministry responsibilities and deadlines
- 👥 **Contact Management** - Manage congregation and ministry contacts
- 📊 **Performance Analytics** - Track engagement and ministry effectiveness

### Technical Stack

- 🚀 **Next.js 15** - App Router with Server Components and Server Actions
- 📘 **TypeScript** - Strict type checking with comprehensive types
- 🎨 **Tailwind CSS v4** - Latest version with inline theming
- 🗄️ **Prisma ORM** - Type-safe database access with PostgreSQL
- 🤖 **AI Integration** - Advanced language models for sermon assistance
- 🔔 **Toast Notifications** - Beautiful toasts with Sonner
- 📅 **Date/Time Utilities** - Professional formatting with dayjs
- ✅ **Validation** - Runtime type safety with Zod
- 📝 **Form Management** - React Hook Form with Zod integration
- 🎭 **Animations** - Magic UI components with Framer Motion
- 🪝 **React Hooks** - 40+ TypeScript-ready hooks from usehooks-ts
- 🎯 **SEO Optimized** - Metadata API, sitemap, and structured data
- 🧩 **Component Library** - shadcn/ui components with Radix UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- PostgreSQL database (or use Prisma Postgres)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/upvave/preach-pro-next.git
cd preach-pro-next
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your database URL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/preach_pro"
```

4. Set up the database:

```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to see the app

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js 15 App Router
│   ├── layout.tsx      # Root layout with fonts and theme
│   ├── page.tsx        # Home page
│   ├── examples/       # Example pages (Next.js 15 patterns)
│   └── actions/        # Server Actions (for mutations)
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui base components
│   ├── magicui/       # Magic UI animated components
│   └── index.ts       # Component exports
├── hooks/             # Custom React hooks
│   ├── index.ts       # Hook exports
│   └── use-toast.ts   # Toast notification hook
├── lib/               # Core utilities and configurations
│   ├── prisma.ts      # Prisma client singleton
│   ├── toast.ts       # Toast notification wrapper
│   ├── datetime.ts    # Date/time formatting utilities
│   ├── validation.ts  # Zod schemas and helpers
│   ├── utils.ts       # General utilities (cn, etc.)
│   └── index.ts       # Utility exports
├── styles/            # Global styles
│   └── globals.css    # Tailwind CSS v4 with theme
├── types/             # TypeScript type definitions
│   ├── index.ts       # API response types
│   └── database.ts    # Database types
└── utils/             # Pure utility functions

prisma/
├── schema.prisma      # Database schema
└── migrations/        # Database migrations

.github/
└── copilot-instructions.md  # AI coding guidelines
```

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run type-check` - Run TypeScript type checking

### Production

- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint with auto-fix
- `npm run lint:check` - Check linting without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without fixing

### Database (Prisma)

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes (development)
- `npm run db:migrate` - Create and apply migration
- `npm run db:studio` - Open Prisma Studio

## 🛠️ Tech Stack

### Core

- **Framework:** Next.js 15 with App Router and Turbopack
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with inline theming
- **Database:** Prisma ORM with PostgreSQL

### UI & Components

- **Component Library:** shadcn/ui (Radix UI primitives)
- **Animations:** Magic UI (150+ components) with Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Mono (via next/font)

### Utilities & Libraries

- **Toast Notifications:** Sonner
- **Date/Time:** dayjs with 6 plugins
- **Validation:** Zod (runtime type safety)
- **Form Management:** React Hook Form with Zod resolver
- **React Hooks:** usehooks-ts (40+ TypeScript-ready hooks)
- **Class Utilities:** clsx + tailwind-merge

### Code Quality

- **Linting:** ESLint (flat config) with Next.js, React, a11y, unused imports
- **Formatting:** Prettier with Tailwind plugin
- **Git Hooks:** Husky + lint-staged
- **Type Checking:** TypeScript strict mode

## 🎯 Quick Start Guide

### Using Toast Notifications

```tsx
import { toast } from '@/lib/toast';

toast.success('Operation successful!');
toast.error('Something went wrong');
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save',
});
```

### Date/Time Formatting

```tsx
import { dateTime } from '@/lib/datetime';

dateTime.professional(new Date()); // "January 15, 2024 at 2:30 PM EST"
dateTime.relative(new Date()); // "2 hours ago"
dateTime.business(new Date()); // "Monday, January 15, 2024"
```

### Validation with Zod

```tsx
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().positive(),
});

const result = userSchema.safeParse(data);
```

### Form Management with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
```

### React Hooks

```tsx
import { useToast, useDebounce, useMediaQuery } from '@/hooks';

const { success, error } = useToast();
const debouncedValue = useDebounce(value, 500);
const isMobile = useMediaQuery('(max-width: 768px)');
```

### Server Actions

```tsx
// app/actions/contact.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function submitForm(formData: FormData) {
  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  // Save to database
  await prisma.contact.create({ data });

  // Revalidate cached pages
  revalidatePath('/contacts');

  return { success: true };
}
```

## 📚 Documentation

- **[Development Checklist](./doc/todo.md)** - Step-by-step setup guide
- **[Copilot Instructions](./.github/copilot-instructions.md)** - AI coding guidelines
- **[Magic UI Docs](https://magicui.design/docs)** - Animated components
- **[shadcn/ui Docs](https://ui.shadcn.com)** - Base component library
- **[Next.js Docs](https://nextjs.org/docs)** - Framework documentation

## 🎨 Adding Components

### shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Magic UI Components

Copy components from [magicui.design](https://magicui.design/docs/components) to `src/components/magicui/`

## 📖 Learn More

### Next.js 15 Features

- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Rendering Strategies](https://nextjs.org/docs/app/building-your-application/rendering)

### Project Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variables
4. Deploy!

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Add other variables as needed
```

## 🤝 Contributing

1. Follow the coding guidelines in `.github/copilot-instructions.md`
2. Run `npm run lint` and `npm run format` before committing
3. Write meaningful commit messages
4. Add tests for new features

## 📝 License

This project is licensed under the MIT License.

---

**Upvave Next.js Starter Template** - Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS v4
