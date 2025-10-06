# Magic UI Components

[Magic UI](https://magicui.design) is a collection of 150+ free and open-source animated components built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It's the perfect companion for shadcn/ui with beautiful animations and modern effects.

## Installation

Magic UI components can be added manually by copying from the [Magic UI website](https://magicui.design/docs) or by using their component files directly.

### Prerequisites

Ensure you have the required dependencies:

```bash
npm install framer-motion clsx tailwind-merge
```

## Component Categories

### ✨ Special Effects

- **Animated Beam** - Animated connecting lines between elements
- **Border Beam** - Animated glowing border effect
- **Particles** - Particle effects and backgrounds
- **Meteors** - Meteor shower animations
- **Shimmer** - Shimmer and glow effects
- **Ripple** - Ripple effect animations

### 📝 Text Animations

- **Blur In** - Blur reveal text animation
- **Text Reveal** - Reveal text with various effects
- **Typing Animation** - Typewriter text effect
- **Word Rotate** - Rotating word animations
- **Fade Text** - Fade in/out text animations
- **Scroll Based Velocity** - Velocity-based scroll animations

### 🎨 Visual Components

- **Marquee** - Infinite scrolling marquee
- **Globe** - Interactive 3D globe
- **Dock** - macOS-style dock menu
- **Bento Grid** - Modern bento box layouts
- **Animated Grid Pattern** - Animated background patterns
- **Dotted Map** - Animated dotted world map

### 🔄 Interactive Components

- **Cool Mode** - Click effects and interactions
- **Number Ticker** - Animated number counting
- **Confetti** - Celebration confetti effect
- **Spotlight** - Mouse-following spotlight effect
- **Orbiting Circles** - Circular orbit animations

## Usage

### Method 1: Copy from Magic UI Website

1. Browse components at [magicui.design/docs](https://magicui.design/docs)
2. Copy the component code
3. Paste into `src/components/magicui/[component-name].tsx`
4. Import and use in your pages

### Method 2: Manual Installation

Components are stored in this directory following the same pattern as shadcn/ui:

```
src/components/magicui/
├── blur-in.tsx
├── animated-beam.tsx
├── marquee.tsx
├── particles.tsx
└── ... (other components)
```

## Example: Adding Blur In Component

```typescript
// src/components/magicui/blur-in.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurInProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn('font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]', className)}
    >
      {word}
    </motion.h1>
  )
}

export default BlurIn
```

### Usage in Your Component

```tsx
import BlurIn from '@/components/magicui/blur-in';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <BlurIn word="Upvave Starter" />
    </div>
  );
}
```

## Best Practices

1. **Performance**: Magic UI components use Framer Motion, which is performant but should be used thoughtfully
2. **Accessibility**: Respect `prefers-reduced-motion` for users who prefer less animation
3. **Theme Integration**: Components work with your existing Tailwind theme and dark mode
4. **Composition**: Combine Magic UI with shadcn/ui components for best results

## Resources

- 📖 [Documentation](https://magicui.design/docs)
- 🎨 [Component Gallery](https://magicui.design/docs/components)
- 💎 [Pro Templates](https://pro.magicui.design/)
- 🐙 [GitHub Repository](https://github.com/magicuidesign/magicui)
- 💬 [Discord Community](https://discord.gg/87p2vpsat5)

## Pro Version

Magic UI Pro includes:

- 50+ pre-built blocks and sections
- Landing page templates
- Advanced components
- Priority support
- Commercial license

Visit [pro.magicui.design](https://pro.magicui.design/) for more information.

## License

Magic UI components are MIT licensed and free to use in personal and commercial projects.
