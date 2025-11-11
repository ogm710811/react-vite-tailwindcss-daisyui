# Tenant Self Service

A modern React + TypeScript application for managing tenant accounts with DaisyUI components.

## 🚀 Features

- **Dashboard Overview**: Stats cards showing total, active, trial, and paused tenants
- **Advanced Table**: Sortable columns, search, and status filtering
- **CRUD Operations**: Create, view, edit, and delete tenants
- **Session Tracking**: View all requests made during the current session
- **Toast Notifications**: User feedback for actions
- **Responsive Design**: Mobile-friendly interface with DaisyUI components

## 🛠️ Tech Stack

- **React 19** - Latest React with improved performance
- **TypeScript 5** - Type-safe code
- **Tailwind CSS 3** - Utility-first CSS framework
- **DaisyUI 4** - Beautiful UI components
- **Vite** - Fast build tool and dev server

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── StatsCards.tsx
│   ├── SearchAndFilters.tsx
│   ├── TenantsTable.tsx
│   ├── CreateTenantModal.tsx
│   ├── TenantDetailsModal.tsx
│   ├── SessionRequestsPanel.tsx
│   └── ToastContainer.tsx
├── types/               # TypeScript types
│   └── index.ts
├── data/                # Mock data
│   └── mockData.ts
├── utils/               # Utility functions
│   └── sorters.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Component Best Practices

### 1. **Separation of Concerns**
Each component has a single responsibility:
- `StatsCards` - Display metrics
- `TenantsTable` - Display and interact with tenant data
- `CreateTenantModal` - Form for creating tenants
- `ToastContainer` - Show notifications

### 2. **Type Safety**
All components use TypeScript interfaces for props:
```typescript
interface StatsCardsProps {
  stats: Stats;
}
```

### 3. **Composition**
Components are composed together in the main App component, making them reusable and testable.

### 4. **State Management**
- Local state in individual components
- Shared state lifted to parent component
- No prop drilling - props passed explicitly

### 5. **DaisyUI Integration**
Using semantic DaisyUI classes:
- `btn`, `btn-primary`, `btn-ghost`
- `card`, `card-body`
- `modal`, `modal-open`
- `table`, `table-zebra`
- `badge`, `badge-success`
- `stats`, `stat`

## 🎯 Key Features Explained

### Sortable Table
Click on column headers to sort by that column. The sort direction toggles between ascending and descending.

### Search & Filter
- Search by tenant name, ID, or admin email
- Filter by status (All, Full, Trial, Pause, etc.)

### Create Tenant Modal
Comprehensive form with:
- Basic information
- Admin details
- Deployment configuration
- Product selection
- Optional Salesforce integration

### Session Requests Panel
Track all API requests made during the current session with:
- Request/response payloads
- Timeline of events
- Status indicators

### Toast Notifications
Non-intrusive notifications for:
- Success messages (green)
- Error messages (red)
- Info messages (blue)

## 🎨 Customization

### Themes
DaisyUI themes can be changed in `index.html`:
```html
<html lang="en" data-theme="light">
```

Available themes: light, dark, cupcake, bumblebee, emerald, corporate, and more.

### Colors
Modify Tailwind colors in `index.css` using CSS variables:
```css
@theme {
  --color-primary: oklch(0.5 0.2 200);
}
```

## 📝 Development Notes

- Built with component composition in mind
- TypeScript for type safety
- DaisyUI for consistent UI
- Responsive design from mobile to desktop
- Accessible components following ARIA guidelines

## 🔧 Configuration

### Tailwind CSS 4
Configuration is done in `index.css` using the new `@theme` directive.

### DaisyUI 5
Imported in `index.css`:
```css
@import "daisyui";
```

### Vite
Configuration in `vite.config.ts` for React and build options.

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
