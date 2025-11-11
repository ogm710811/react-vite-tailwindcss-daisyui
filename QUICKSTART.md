# Quick Start Guide

Get the Tenant Self Service application running in 5 minutes!

## Prerequisites

- **Node.js** 18+ (Download from [nodejs.org](https://nodejs.org))
- **npm** or **yarn** (comes with Node.js)

Check your versions:
```bash
node --version  # Should be 18+
npm --version   # Should be 9+
```

## Setup Steps

### 1. Navigate to Project Directory

```bash
cd tenant-self-service
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React 19
- TypeScript 5
- Tailwind CSS 4
- DaisyUI 5
- Vite
- All other dependencies

**Installation time:** ~2 minutes

### 3. Start Development Server

```bash
npm run dev
```

The application will automatically open in your browser at:
```
http://localhost:3000
```

**Build time:** ~5 seconds  
**Hot reload:** Enabled ✅

### 4. Explore the Application

Once running, you can:
- ✅ View the dashboard with stats
- ✅ Search and filter tenants
- ✅ Sort the table by clicking column headers
- ✅ Create new tenants (click "Create Tenant" button)
- ✅ View tenant details (click "⋯" menu → "View Details")
- ✅ Delete tenants (click "⋯" menu → "Delete")
- ✅ View session requests (click "Session Requests" button)

## Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint
```

## Project Structure

```
src/
├── App.tsx              # Main application
├── components/          # UI components
├── types/              # TypeScript definitions
├── data/               # Mock data
└── utils/              # Helper functions
```

## Customization

### Change Theme

Edit `index.html`:
```html
<html lang="en" data-theme="dark">
```

**Available themes:**
- light (default)
- dark
- cupcake
- bumblebee
- emerald
- corporate
- synthwave
- retro
- and many more!

### Modify Port

Edit `vite.config.ts`:
```typescript
server: {
  port: 3000, // Change to your preferred port
}
```

### Add More Tenants

Edit `src/data/mockData.ts` to add more sample data.

## Common Issues

### Port Already in Use

If port 3000 is busy:
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port in vite.config.ts
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript Errors

```bash
# Type check the project
npx tsc --noEmit
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf dist
npm run build
```

## Development Tips

### Hot Module Replacement (HMR)

Changes to files automatically reload the browser:
- ✅ Component changes → Instant update
- ✅ Style changes → Instant update
- ✅ Type changes → Instant update

### Browser DevTools

React DevTools extension recommended:
- [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Next Steps

1. **Explore Components**
   - Open `src/components/` and examine each component
   - See how DaisyUI classes are used

2. **Modify Styles**
   - Edit `src/index.css` for global styles
   - Use DaisyUI utility classes in components

3. **Add Features**
   - Create new components in `src/components/`
   - Add new types in `src/types/`
   - Update `App.tsx` to include new features

4. **Connect to API**
   - Replace mock data with real API calls
   - Add authentication
   - Implement real CRUD operations

## Production Build

When ready to deploy:

```bash
# Build the application
npm run build

# Preview the build locally
npm run preview
```

Build output goes to `dist/` folder.

### Deploy Options

- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy`
- **GitHub Pages:** Use GitHub Actions
- **AWS S3:** Upload `dist/` folder
- **Docker:** Use multi-stage build

## Getting Help

- 📖 [React Documentation](https://react.dev)
- 🎨 [DaisyUI Components](https://daisyui.com/components/)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- ⚡ [Vite Guide](https://vitejs.dev/guide/)
- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

If you encounter issues:
1. Check the console for error messages
2. Review the error stack trace
3. Search for the error on GitHub/Stack Overflow
4. Check the dependencies are correctly installed

---

**Happy coding! 🚀**
