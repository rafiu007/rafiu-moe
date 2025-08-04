# Next.js Frontend Application

A modern Next.js application setup for frontend development with TypeScript, Tailwind CSS, and Tabler Icons.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tabler Icons** - Beautiful SVG icons
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting and formatting

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Button.tsx      # Reusable button component
│       └── index.ts        # Component exports
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## 🎨 Components

### Button Component

A reusable button component with multiple variants and sizes:

```tsx
import { Button } from '@/components';
import { IconHome } from '@tabler/icons-react';

<Button variant="primary" size="md" icon={<IconHome size={16} />}>
  Click me
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `icon`: React.ReactNode

## 🎯 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration supports:

- Dark mode (automatic based on system preference)
- Responsive design
- Custom color palette
- Component-based styling

## 📱 Icons

Icons are provided by Tabler Icons. Import them like this:

```tsx
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

<IconHome size={24} className="text-blue-600" />;
```

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Use the `@/components` import alias

### Code Style

- Use TypeScript for type safety
- Follow immutable patterns (const, readonly)
- Use functional components with hooks
- Prefer composition over inheritance

## 🚀 Deployment

The app is ready to deploy on platforms like Vercel, Netlify, or any hosting service that supports Next.js.

For Vercel (recommended):

```bash
pnpm build
```

The application will be built and optimized for production.
