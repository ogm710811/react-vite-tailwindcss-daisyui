# DaisyUI Components Reference

Complete guide to DaisyUI components used in this project.

## Table of Contents
1. [Stats](#stats)
2. [Buttons](#buttons)
3. [Forms](#forms)
4. [Tables](#tables)
5. [Modals](#modals)
6. [Badges](#badges)
7. [Alerts](#alerts)
8. [Dropdowns](#dropdowns)
9. [Collapse](#collapse)
10. [Cards](#cards)
11. [Timeline](#timeline)

---

## Stats

**Used in:** `StatsCards.tsx`

### Basic Usage
```jsx
<div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg>...</svg>
    </div>
    <div className="stat-title">Title</div>
    <div className="stat-value">Value</div>
    <div className="stat-desc">Description</div>
  </div>
</div>
```

### Modifiers
- `stats-vertical` - Stack stats vertically
- `stats-horizontal` - Display stats horizontally (default)

### Color Classes
- `text-primary` - Primary color
- `text-success` - Success/green color
- `text-info` - Info/blue color
- `text-warning` - Warning/yellow color

### Example in Project
```jsx
<div className="stats stats-vertical sm:stats-horizontal shadow w-full mb-6 bg-base-100">
  <div className="stat">
    <div className="stat-figure text-primary text-3xl">📊</div>
    <div className="stat-title">Total Tenants</div>
    <div className="stat-value text-primary">{stats.total}</div>
    <div className="stat-desc">All tenant accounts</div>
  </div>
</div>
```

---

## Buttons

**Used in:** Multiple components

### Basic Usage
```jsx
<button className="btn">Button</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-ghost">Ghost</button>
```

### Variants
- `btn` - Base button
- `btn-primary` - Primary color (blue)
- `btn-secondary` - Secondary color
- `btn-accent` - Accent color
- `btn-ghost` - Transparent background
- `btn-link` - Link style
- `btn-outline` - Outlined button

### Sizes
- `btn-lg` - Large
- `btn-md` - Medium (default)
- `btn-sm` - Small
- `btn-xs` - Extra small

### States
- `btn-active` - Active state
- `btn-disabled` - Disabled state

### Shapes
- `btn-circle` - Circular button
- `btn-square` - Square button

### Example in Project
```jsx
<button
  onClick={() => setShowCreateModal(true)}
  className="btn btn-primary btn-sm gap-2"
>
  <span>➕</span>
  Create Tenant
</button>
```

---

## Forms

**Used in:** `SearchAndFilters.tsx`, `CreateTenantModal.tsx`

### Input
```jsx
<input 
  type="text" 
  className="input input-bordered"
  placeholder="Type here"
/>
```

### Input Modifiers
- `input-bordered` - With border
- `input-ghost` - Minimal style
- `input-primary` - Primary color border
- `input-sm` - Small size
- `input-lg` - Large size

### Select
```jsx
<select className="select select-bordered">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkbox
```jsx
<input 
  type="checkbox" 
  className="checkbox checkbox-primary"
/>
```

### Form Control
```jsx
<div className="form-control">
  <label className="label">
    <span className="label-text">Label</span>
  </label>
  <input type="text" className="input input-bordered" />
</div>
```

### Input Group
```jsx
<div className="input-group">
  <span>Icon/Text</span>
  <input type="text" className="input input-bordered" />
</div>
```

### Example in Project
```jsx
<div className="form-control">
  <div className="input-group">
    <span className="bg-base-200">
      <svg>...</svg>
    </span>
    <input
      type="text"
      placeholder="Search tenants..."
      className="input input-bordered input-sm"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>
```

---

## Tables

**Used in:** `TenantsTable.tsx`

### Basic Usage
```jsx
<table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

### Modifiers
- `table-zebra` - Zebra striping
- `table-sm` - Small/compact
- `table-lg` - Large
- `table-pin-rows` - Pin header/footer
- `table-pin-cols` - Pin columns

### Example in Project
```jsx
<div className="overflow-x-auto bg-base-100 rounded-lg shadow">
  <table className="table table-zebra table-sm">
    <thead>
      <tr>
        <th>Tenant Name</th>
        <th>Tenant ID</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {tenants.map((tenant) => (
        <tr key={tenant.tenantId} className="hover">
          <td>{tenant.tenantDisplayName}</td>
          <td><code>{tenant.tenantId}</code></td>
          <td>...</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

---

## Modals

**Used in:** `CreateTenantModal.tsx`, `TenantDetailsModal.tsx`

### Basic Usage
```jsx
<div className="modal modal-open">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Modal Title</h3>
    <p>Modal content</p>
    <div className="modal-action">
      <button className="btn">Close</button>
    </div>
  </div>
  <div className="modal-backdrop" onClick={onClose}></div>
</div>
```

### States
- `modal-open` - Show modal
- Without `modal-open` - Hide modal

### Sizes
- `modal-box` - Default size
- `modal-box max-w-5xl` - Large
- `modal-box w-11/12 max-w-5xl` - Very large

### Example in Project
```jsx
{isOpen && (
  <div className="modal modal-open">
    <div className="modal-box max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-2xl">Create New Tenant</h3>
        <button
          onClick={onClose}
          className="btn btn-ghost btn-sm btn-circle"
        >
          ✕
        </button>
      </div>
      
      {/* Content */}
      
      <div className="modal-action">
        <button onClick={onClose} className="btn btn-ghost">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </div>
    <div className="modal-backdrop" onClick={onClose}></div>
  </div>
)}
```

---

## Badges

**Used in:** `TenantsTable.tsx`

### Basic Usage
```jsx
<span className="badge">Default</span>
<span className="badge badge-primary">Primary</span>
<span className="badge badge-success">Success</span>
```

### Colors
- `badge-primary` - Primary/blue
- `badge-secondary` - Secondary
- `badge-accent` - Accent
- `badge-success` - Green
- `badge-warning` - Yellow/orange
- `badge-error` - Red
- `badge-info` - Light blue
- `badge-neutral` - Gray

### Sizes
- `badge-lg` - Large
- `badge-md` - Medium (default)
- `badge-sm` - Small
- `badge-xs` - Extra small

### Variants
- `badge-outline` - Outlined

### Example in Project
```jsx
<div className={`badge ${statusConfig[status]?.badge} gap-1`}>
  <span>{statusConfig[status]?.icon}</span>
  {status}
</div>

// Where statusConfig is:
const statusConfig = {
  Full: { badge: 'badge-success', icon: '✅' },
  Trial: { badge: 'badge-info', icon: '⏳' },
  Pause: { badge: 'badge-warning', icon: '⏸️' }
};
```

---

## Alerts

**Used in:** `ToastContainer.tsx`

### Basic Usage
```jsx
<div className="alert">
  <span>Info message</span>
</div>
```

### Types
- `alert-info` - Blue/info
- `alert-success` - Green/success
- `alert-warning` - Yellow/warning
- `alert-error` - Red/error

### With Icons
```jsx
<div className="alert alert-success shadow-lg">
  <span>✅</span>
  <span>Success message</span>
  <button className="btn btn-sm">Action</button>
</div>
```

### Example in Project
```jsx
<div className="toast toast-top toast-end z-50">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className={`alert ${
        toast.type === 'error'
          ? 'alert-error'
          : toast.type === 'success'
          ? 'alert-success'
          : 'alert-info'
      } shadow-lg`}
    >
      <span>{toast.type === 'success' ? '✅' : '❌'}</span>
      <span>{toast.msg}</span>
      <button onClick={() => onClose(toast.id)}>✕</button>
    </div>
  ))}
</div>
```

---

## Dropdowns

**Used in:** `TenantsTable.tsx`

### Basic Usage
```jsx
<div className="dropdown">
  <label tabIndex={0} className="btn">
    Click
  </label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Positions
- `dropdown-end` - Align to end
- `dropdown-top` - Open upward
- `dropdown-bottom` - Open downward
- `dropdown-left` - Open to left
- `dropdown-right` - Open to right

### Example in Project
```jsx
<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-xs">
    ⋯
  </label>
  <ul
    tabIndex={0}
    className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li><a onClick={() => onView(tenant)}>👁️ View Details</a></li>
    <li><a>✏️ Edit</a></li>
    <li><a className="text-error">🗑️ Delete</a></li>
  </ul>
</div>
```

---

## Collapse

**Used in:** `SessionRequestsPanel.tsx`

### Basic Usage
```jsx
<div className="collapse collapse-arrow bg-base-200">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
    Click to expand
  </div>
  <div className="collapse-content">
    <p>Content goes here</p>
  </div>
</div>
```

### Variants
- `collapse-arrow` - With arrow icon
- `collapse-plus` - With plus/minus icon
- `collapse-close` - Initially closed
- `collapse-open` - Initially open

### Example in Project
```jsx
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="checkbox" />
  <div className="collapse-title text-sm font-medium">
    <span>Payload</span>
    <button onClick={(e) => {
      e.stopPropagation();
      copyToClipboard(JSON.stringify(data, null, 2));
    }}>
      📋 Copy
    </button>
  </div>
  <div className="collapse-content">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
</div>
```

---

## Cards

**Used in:** `TenantDetailsModal.tsx`, `SessionRequestsPanel.tsx`

### Basic Usage
```jsx
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Variants
- `card-compact` - Smaller padding
- `card-normal` - Normal padding (default)
- `card-side` - Horizontal layout

### Colors
- `bg-base-100` - Default background
- `bg-base-200` - Slightly darker
- `bg-primary` - Primary color
- `bg-neutral` - Neutral color

### Example in Project
```jsx
<div className="card bg-base-200">
  <div className="card-body">
    <h4 className="card-title text-lg">Basic Information</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="text-sm text-base-content/60">Tenant Name</div>
        <div className="font-semibold">{tenant.tenantDisplayName}</div>
      </div>
      <div>
        <div className="text-sm text-base-content/60">Status</div>
        <div className="badge badge-success">{tenant.status}</div>
      </div>
    </div>
  </div>
</div>
```

---

## Timeline

**Used in:** `SessionRequestsPanel.tsx`

### Basic Usage
```jsx
<ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start">9:00 AM</div>
    <div className="timeline-middle">
      <svg>...</svg>
    </div>
    <div className="timeline-end timeline-box">Event 1</div>
  </li>
  <li>
    <div className="timeline-start">10:00 AM</div>
    <div className="timeline-middle">
      <svg>...</svg>
    </div>
    <div className="timeline-end timeline-box">Event 2</div>
  </li>
</ul>
```

### Variants
- `timeline-vertical` - Vertical layout
- `timeline-horizontal` - Horizontal layout
- `timeline-compact` - Compact spacing

### Example in Project
```jsx
<ul className="timeline timeline-vertical timeline-compact">
  {request.timeline.map((event, idx) => (
    <li key={idx}>
      <div className="timeline-start text-xs">
        {new Date(event.ts).toLocaleTimeString()}
      </div>
      <div className="timeline-middle">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <div className="timeline-end timeline-box text-xs">
        {event.label}
      </div>
    </li>
  ))}
</ul>
```

---

## Color Tokens

DaisyUI uses CSS variables for theming:

### Background Colors
- `bg-base-100` - Lightest background
- `bg-base-200` - Medium background
- `bg-base-300` - Darker background

### Text Colors
- `text-base-content` - Base text color
- `text-base-content/60` - 60% opacity text
- `text-primary` - Primary color text
- `text-success` - Success color text
- `text-error` - Error color text

### Border Colors
- `border-base-300` - Standard border
- `border-primary` - Primary color border

---

## Responsive Design

DaisyUI works with Tailwind's responsive prefixes:

```jsx
// Responsive stats
<div className="stats stats-vertical sm:stats-horizontal">

// Responsive columns
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

// Responsive width
<div className="w-full sm:w-[420px]">
```

---

## Theme Switching

Change theme in `index.html`:

```html
<!-- Light theme -->
<html data-theme="light">

<!-- Dark theme -->
<html data-theme="dark">

<!-- Other themes -->
<html data-theme="cupcake">
<html data-theme="bumblebee">
<html data-theme="emerald">
<html data-theme="corporate">
```

Or dynamically:

```jsx
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## Customization

Override DaisyUI in `tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "#3B82F6",
        secondary: "#6366F1",
      },
    },
  ],
}
```

---

## Resources

- **Official Docs:** https://daisyui.com/
- **Components:** https://daisyui.com/components/
- **Themes:** https://daisyui.com/docs/themes/
- **GitHub:** https://github.com/saadeghi/daisyui

---

**Pro Tips:**

1. ✅ Use semantic class names (e.g., `btn-primary` instead of custom colors)
2. ✅ Leverage theme variables for consistency
3. ✅ Combine with Tailwind utilities as needed
4. ✅ Use `gap-2` for spacing in flex/grid layouts
5. ✅ Add `shadow` for depth
6. ✅ Use `rounded-lg` for modern look
