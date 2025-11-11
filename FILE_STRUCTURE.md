# Project File Structure

## Complete Directory Layout

```
tenant-self-service/
│
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.node.json            # TypeScript config for Vite
├── vite.config.ts                # Vite build configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
│
└── src/
    ├── main.tsx                  # Application entry point
    ├── App.tsx                   # Main application component
    ├── index.css                 # Global styles with Tailwind
    │
    ├── components/               # React components
    │   ├── StatsCards.tsx        # Dashboard statistics cards
    │   ├── SearchAndFilters.tsx  # Search input and filter dropdown
    │   ├── TenantsTable.tsx      # Sortable tenant data table
    │   ├── CreateTenantModal.tsx # Modal for creating new tenants
    │   ├── TenantDetailsModal.tsx # Modal for viewing tenant details
    │   ├── SessionRequestsPanel.tsx # Slide-in panel for requests
    │   └── ToastContainer.tsx    # Toast notification system
    │
    ├── types/                    # TypeScript type definitions
    │   └── index.ts              # All interfaces and types
    │
    ├── data/                     # Mock data and constants
    │   └── mockData.ts           # Sample tenant and request data
    │
    └── utils/                    # Utility functions
        └── sorters.ts            # Sorting functions and helpers
```

## File Descriptions

### Root Configuration Files

**index.html**
- HTML entry point with root div
- Loads main.tsx via Vite

**package.json**
- Project dependencies (React 19, TypeScript 5, etc.)
- npm scripts for dev, build, preview
- DaisyUI 5 and Tailwind 4 configured

**tsconfig.json**
- TypeScript compiler options
- Target ES2020 with strict mode
- React JSX transformation

**vite.config.ts**
- Vite development server configuration
- React plugin setup
- Port 3000 configuration

**tailwind.config.js**
- Tailwind CSS content paths
- DaisyUI plugin configuration
- Theme customization

**postcss.config.js**
- PostCSS plugins (Tailwind, Autoprefixer)

### Source Files

**src/main.tsx**
- React 19 createRoot API
- Strict mode wrapper
- CSS imports

**src/App.tsx**
- Main application logic
- State management
- Component composition
- Event handlers

**src/index.css**
- Tailwind directives
- DaisyUI import
- Custom animations
- Scrollbar styling

### Components

**StatsCards.tsx**
- Props: `{ stats: Stats }`
- DaisyUI stats component
- Four stat cards: Total, Active, Trial, Paused

**SearchAndFilters.tsx**
- Props: `{ search, setSearch, statusFilter, setStatusFilter }`
- Search input with icon
- Status filter dropdown
- DaisyUI form-control and input-group

**TenantsTable.tsx**
- Props: `{ tenants, sort, onSort, onView, onDelete }`
- DaisyUI table with zebra stripes
- Sortable columns with indicators
- Dropdown menu for actions
- Badge components for status

**CreateTenantModal.tsx**
- Props: `{ isOpen, onClose, onSubmit }`
- DaisyUI modal component
- Multi-section form
- Form validation
- Product checkboxes

**TenantDetailsModal.tsx**
- Props: `{ isOpen, onClose, tenant }`
- DaisyUI modal with cards
- Read-only tenant information
- Sectioned layout

**SessionRequestsPanel.tsx**
- Props: `{ isOpen, onClose, requests }`
- Slide-in drawer from right
- DaisyUI collapse for payload/response
- Timeline component for events
- Empty state

**ToastContainer.tsx**
- Props: `{ toasts, onClose }`
- DaisyUI alert component
- Toast positioning (top-right)
- Auto-dismiss capability
- Three types: success, error, info

### Types (types/index.ts)

- `Tenant` - Tenant data structure
- `Request` - API request structure
- `Toast` - Notification structure
- `SortConfig` - Table sorting state
- `Stats` - Dashboard statistics
- `CreateTenantFormData` - Form data structure
- `TenantStatus` - Status enum type

### Data (data/mockData.ts)

- `mockTenants[]` - Sample tenant records
- `mockRequests[]` - Sample API requests

### Utils (utils/sorters.ts)

- `sorters` - Column sorting functions
- `statusConfig` - Status badge configuration
- `formatDate` - Date formatting helper

## Component Communication Flow

```
App (State Container)
├── StatsCards (Display)
├── SearchAndFilters (Input → App)
├── TenantsTable (Display + Events → App)
│   └── Dropdown menu → onView, onDelete
├── CreateTenantModal (Form → onSubmit → App)
├── TenantDetailsModal (Display)
├── SessionRequestsPanel (Display)
└── ToastContainer (Display + onClose → App)
```

## Data Flow

1. **User Action** → Component Event Handler
2. **Event Handler** → App State Update
3. **State Update** → Re-render Components
4. **Components** → Display Updated Data

## Best Practices Implemented

✅ **Single Responsibility** - Each component does one thing
✅ **Type Safety** - TypeScript interfaces for all props
✅ **Composition** - Small, reusable components
✅ **Controlled Components** - Form inputs controlled by state
✅ **Separation of Concerns** - Logic, UI, data, utils separated
✅ **DRY Principle** - Reusable utility functions
✅ **Accessibility** - Semantic HTML and ARIA labels
✅ **Responsive Design** - Mobile-first with Tailwind
