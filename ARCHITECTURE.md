# Architecture & Component Diagram

## Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser (Port 3000)                      │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      index.html                             │ │
│  │                    (Entry Point)                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      main.tsx                               │ │
│  │                  (React Renderer)                           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                      App.tsx                                │ │
│  │                (State Management)                           │ │
│  │                                                             │ │
│  │  State:                                                     │ │
│  │  • tenants[]          • search                              │ │
│  │  • statusFilter       • sort                                │ │
│  │  • toasts[]           • requests[]                          │ │
│  │  • modals state       • selectedTenant                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│              ┌───────────────┴───────────────┐                  │
│              ▼                               ▼                  │
│  ┌──────────────────────┐      ┌──────────────────────┐        │
│  │   Presentational     │      │     Interactive      │        │
│  │    Components        │      │     Components       │        │
│  └──────────────────────┘      └──────────────────────┘        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── StatsCards (Presentational)
│   ├── Stat (Total)
│   ├── Stat (Active)
│   ├── Stat (Trial)
│   └── Stat (Paused)
│
├── SearchAndFilters (Interactive)
│   ├── SearchInput
│   └── StatusSelect
│
├── TenantsTable (Interactive)
│   ├── TableHeader
│   │   ├── SortableColumn (Name)
│   │   ├── SortableColumn (ID)
│   │   ├── SortableColumn (Email)
│   │   ├── Column (Products)
│   │   ├── SortableColumn (Status)
│   │   ├── SortableColumn (Created)
│   │   └── Column (Actions)
│   └── TableBody
│       └── TableRow[]
│           ├── Cell (Name)
│           ├── Cell (ID)
│           ├── Cell (Email)
│           ├── Cell (Products)
│           ├── Cell (Status Badge)
│           ├── Cell (Date)
│           └── Cell (Dropdown Menu)
│               ├── View Action
│               ├── Edit Action
│               └── Delete Action
│
├── CreateTenantModal (Interactive)
│   └── Form
│       ├── Section: Basic Info
│       │   ├── Input (Display Name)
│       │   ├── Input (Customer Name)
│       │   └── Select (Status)
│       ├── Section: Admin Info
│       │   ├── Input (Email)
│       │   ├── Input (First Name)
│       │   └── Input (Last Name)
│       ├── Section: Deployment
│       │   ├── Select (Cloud Provider)
│       │   ├── Select (Global Region)
│       │   ├── Select (Local Region)
│       │   └── Select (Country Code)
│       ├── Section: Products
│       │   ├── Checkbox (Core)
│       │   ├── Checkbox (Databricks)
│       │   └── Checkbox (Snowflake)
│       ├── Section: Salesforce
│       │   ├── Input (Account ID)
│       │   └── Input (SKU ID)
│       └── Actions
│           ├── Button (Cancel)
│           └── Button (Submit)
│
├── TenantDetailsModal (Presentational)
│   ├── Card (Basic Info)
│   ├── Card (Admin Info)
│   └── Card (Products)
│
├── SessionRequestsPanel (Interactive)
│   └── RequestsList
│       └── RequestCard[]
│           ├── Header
│           ├── OrderInfo
│           ├── ProductBadges
│           ├── Collapse (Payload)
│           ├── Collapse (Response)
│           └── Timeline
│
└── ToastContainer (Presentational)
    └── Toast[]
        ├── Icon
        ├── Message
        └── CloseButton
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         User Actions                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     Event Handlers                           │
│  • handleSort()        • handleCreateTenant()                │
│  • handleViewTenant()  • handleDeleteTenant()                │
│  • setSearch()         • setStatusFilter()                   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      State Updates                           │
│  • useState()                                                │
│  • useMemo() for derived state                              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Re-render Components                       │
│  React reconciliation → Virtual DOM → Real DOM              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Updated UI Display                        │
└─────────────────────────────────────────────────────────────┘
```

## State Management Flow

```
┌──────────────┐
│  App.tsx     │
│  (Container) │
└──────┬───────┘
       │
       ├─ tenants[] ────────────────────────────┐
       │                                        │
       ├─ search ─────────┐                    │
       │                  │                    │
       ├─ statusFilter ───┤                    │
       │                  │                    │
       └─ sort ───────────┤                    │
                          │                    │
                          ▼                    ▼
                   ┌──────────────┐    ┌──────────────┐
                   │ SearchAnd    │    │ TenantsTable │
                   │ Filters      │    │              │
                   └──────────────┘    └──────────────┘
                          │                    │
                          │                    │
                    [User Input]          [User Click]
                          │                    │
                          ▼                    ▼
                   ┌──────────────────────────────────┐
                   │   useMemo(filteredTenants)       │
                   │   • Filter by search             │
                   │   • Filter by status             │
                   │   • Sort by column               │
                   └──────────────────────────────────┘
```

## Component Communication

### Props Down
```
App (Source of Truth)
 │
 ├─ stats ──────────────────────────> StatsCards
 │
 ├─ search, setSearch ──────────────> SearchAndFilters
 │  statusFilter, setStatusFilter
 │
 ├─ filteredTenants ────────────────> TenantsTable
 │  sort, onSort
 │  onView, onDelete
 │
 ├─ isOpen, onClose, onSubmit ─────> CreateTenantModal
 │
 ├─ isOpen, onClose, tenant ───────> TenantDetailsModal
 │
 ├─ isOpen, onClose, requests ─────> SessionRequestsPanel
 │
 └─ toasts, onClose ───────────────> ToastContainer
```

### Events Up
```
TenantsTable
 │ onClick (View)
 ├────────────────────> App.handleViewTenant()
 │                       └─> setState(selectedTenant)
 │                           └─> setState(showDetailsModal: true)
 │
 │ onClick (Delete)
 ├────────────────────> App.handleDeleteTenant()
 │                       └─> setState(tenants: filtered)
 │                           └─> addToast('success', '...')
 │
 │ onClick (Column Header)
 └────────────────────> App.handleSort()
                         └─> setState(sort: {key, dir})

CreateTenantModal
 │ onSubmit (Form)
 └────────────────────> App.handleCreateTenant()
                         ├─> setState(tenants: [...tenants, new])
                         ├─> setState(showCreateModal: false)
                         └─> addToast('success', '...')

SearchAndFilters
 │ onChange (Search)
 ├────────────────────> App.setSearch()
 │                       └─> setState(search)
 │
 │ onChange (Filter)
 └────────────────────> App.setStatusFilter()
                         └─> setState(statusFilter)
```

## Utility Flow

```
┌──────────────────────────────────────────────────────────┐
│                    Utils Directory                        │
└──────────────────────────────────────────────────────────┘
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │  sorters    │  │statusConfig │  │ formatDate  │
    │             │  │             │  │             │
    │ Functions   │  │ Constants   │  │  Function   │
    └─────────────┘  └─────────────┘  └─────────────┘
           │                │                │
           ▼                ▼                ▼
    Used by Table    Used by Badge    Used by Table
    sorting logic    component        date display
```

## Type System

```
┌────────────────────────────────────────────────────────────┐
│                     types/index.ts                          │
└────────────────────────────────────────────────────────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
    ┌──────────────────┐    ┌──────────────────┐
    │  Domain Types    │    │  UI Types        │
    │                  │    │                  │
    │  • Tenant        │    │  • Toast         │
    │  • Request       │    │  • SortConfig    │
    │  • TenantStatus  │    │  • Stats         │
    └──────────────────┘    └──────────────────┘
              │                       │
              └───────────┬───────────┘
                          ▼
              ┌──────────────────────┐
              │  Component Props     │
              │                      │
              │  • StatsCardsProps   │
              │  • TableProps        │
              │  • ModalProps        │
              └──────────────────────┘
                          │
                          ▼
              All components are type-safe!
```

## Build Process

```
┌─────────────────────────────────────────────────────────────┐
│  npm run dev / npm run build                                 │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  Vite                                                        │
│  • Entry point: src/main.tsx                                │
│  • Plugin: @vitejs/plugin-react                             │
└─────────────────────────────────────────────────────────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
┌──────────────────────┐    ┌──────────────────────┐
│  TypeScript          │    │  PostCSS             │
│  • Compile .tsx      │    │  • Process CSS       │
│  • Type checking     │    │  • Tailwind JIT      │
│  • Generate .js      │    │  • DaisyUI classes   │
└──────────────────────┘    └──────────────────────┘
              │                       │
              └───────────┬───────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  Bundle Output (dist/)                                       │
│  • index.html                                                │
│  • assets/index-[hash].js                                    │
│  • assets/index-[hash].css                                   │
└─────────────────────────────────────────────────────────────┘
```

## Rendering Pipeline

```
User Action
    │
    ▼
Event Handler
    │
    ▼
setState()
    │
    ▼
React Reconciler
    │
    ├─> Compute Diffs (Virtual DOM)
    │
    ├─> Batch Updates
    │
    └─> Apply Changes (Real DOM)
            │
            ▼
        Browser Paint
            │
            ▼
        User Sees Update
```

## File Dependencies

```
main.tsx
 ├─ imports React, ReactDOM
 ├─ imports App
 └─ imports index.css
         │
         ├─ imports tailwindcss
         └─ imports daisyui

App.tsx
 ├─ imports React hooks
 ├─ imports all components
 ├─ imports types
 ├─ imports mockData
 └─ imports utils

Components
 ├─ import React
 ├─ import types
 └─ import utils (when needed)
```

---

This architecture provides:
- ✅ **Clear separation of concerns**
- ✅ **Unidirectional data flow**
- ✅ **Type safety throughout**
- ✅ **Modular and testable**
- ✅ **Scalable architecture**
