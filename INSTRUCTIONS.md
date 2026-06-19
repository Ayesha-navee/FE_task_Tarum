# PYME Landing Page - Setup & Run Instructions

## Prerequisites

- **Node.js**: Version 18.17 or later
- **npm** or **yarn**: Package manager (npm comes with Node.js)

### Check Installation

```bash
node --version
npm --version
```

---

## Installation Steps

### 1. Install Dependencies

Navigate to the project root directory and install all required packages:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install:
- **Next.js 14.1.0** - React framework
- **React 18.3.1** - UI library
- **TypeScript 5.3.3** - Type safety
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

---

## Running the Project

### Development Mode

Start the development server with hot-reload enabled:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at: **http://localhost:3000**

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check code quality and fix issues:

```bash
npm run lint
```

---

## Project Structure

```
pyme-landing-page/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with dashboard preview
│   ├── DepartmentIntro.tsx # Department introduction section
│   ├── ProductSection.tsx  # Product features section
│   ├── OperationsSection.tsx # Operations section
│   ├── TeamSection.tsx     # Team management section
│   └── Footer.tsx          # Footer component
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

---

## Features

### Components

- **Header**: Responsive navigation with mobile menu toggle
- **Hero Section**: Main landing page with gradient design and dashboard preview
- **Department Intro**: Section describing AI-powered business departments
- **Product Section**: Features and benefits of the product module
- **Operations Section**: Details about workflow automation
- **Team Section**: Team management and performance monitoring
- **Footer**: Links and company information

### Design Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Gradient Effects**: Modern gradient backgrounds and text
- **Smooth Animations**: CSS animations and transitions
- **Tailwind CSS**: Utility-first styling approach
- **TypeScript**: Full type safety across components
- **Accessibility**: Semantic HTML and proper ARIA labels

### Responsive Breakpoints

- **Mobile**: Up to 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

---

## Styling Guide

### Color Palette

- **Primary**: Purple (#7C3AED) - Main accent color
- **Secondary**: Cyan (#06B6D4) - Complementary color
- **Accent**: Green (#10B981) - Success/positive actions
- **Neutral**: Gray shades for text and backgrounds

### Spacing

All spacing follows a 16px base unit (as per design specifications):
- Small: 8px
- Medium: 16px
- Large: 24px
- Extra Large: 32px+

### Typography

- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Line Height**: 1.4-1.6 for readability

---

## Customization

### Modifying Tailwind Theme

Edit `tailwind.config.js` to customize:
- Colors
- Spacing
- Typography
- Breakpoints

Example:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
    },
  },
}
```

### Adding New Components

1. Create a new file in the `components/` directory
2. Export it as a default or named export
3. Import and use it in `app/page.tsx`

### Updating Content

All content is directly in the components. Update text, links, and calls-to-action by editing the respective component files.

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Tips

- Next.js automatically optimizes images with `next/image`
- CSS is minified and tree-shaken in production
- JavaScript code-splitting happens automatically
- Static generation for fast page loads

---

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Clear Cache & Node Modules

```bash
rm -r node_modules .next
npm install
npm run dev
```

### TypeScript Errors

Make sure all imports are correct and TypeScript types are properly defined:

```bash
npm run lint
```

---

## Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t pyme-landing .
docker run -p 3000:3000 pyme-landing
```

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## License

This project is proprietary and maintained by PYME Workspace.

---

## Development Notes

### Code Quality

- Uses TypeScript for type safety
- Components are functional with hooks
- CSS is managed with Tailwind CSS
- Follows React best practices

### Performance Optimizations

- Server-side rendering enabled
- Image optimization
- CSS purging in production
- Code splitting

---

## Contact

For questions or support, contact the development team.
