import { useState, useMemo } from 'react';
import { StatsCards } from './components/StatsCards';
import { SearchAndFilters } from './components/SearchAndFilters';
import { TenantsTable } from './components/TenantsTable';
import { CreateTenantModal } from './components/CreateTenantModal';
import { TenantDetailsModal } from './components/TenantDetailsModal';
import { SessionRequestsPanel } from './components/SessionRequestsPanel';
import { ToastContainer } from './components/ToastContainer';
import { Tenant, Request, Toast, SortConfig } from './types';
import { mockTenants, mockRequests } from './data/mockData';
import { sorters } from './utils/sorters';

export default function App() {
  const [tenants, setTenants] = useState<Tenant[]>(mockTenants);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sort, setSort] = useState<SortConfig>({ key: 'createdDate', dir: 'desc' });

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showSessionPanel, setShowSessionPanel] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [requests] = useState<Request[]>(mockRequests);

  const addToast = (type: Toast['type'], msg: string) => {
    setToasts(t => [...t, { id: Date.now() + Math.random(), type, msg }]);
  };

  const removeToast = (id: number) => {
    setToasts(t => t.filter(x => x.id !== id));
  };

  const stats = {
    total: tenants.length,
    active: tenants.filter(t => t.tenantStatus === 'Full').length,
    trial: tenants.filter(t => t.tenantStatus === 'Trial').length,
    paused: tenants.filter(t => t.tenantStatus === 'Pause').length,
  };

  const filteredTenants = useMemo(() => {
    const res = tenants.filter(t => {
      const q = search.toLowerCase();
      const matchesQ = !q || [t.tenantDisplayName, t.tenantId, t.adminEmail]
        .some(v => v.toLowerCase().includes(q));
      const matchesS = statusFilter === 'all' || t.tenantStatus === statusFilter;
      return matchesQ && matchesS;
    });

    const cmp = sorters[sort.key] || (() => 0);
    res.sort((a, b) => {
      const v = cmp(a, b);
      return sort.dir === 'asc' ? v : -v;
    });

    return res;
  }, [search, statusFilter, tenants, sort]);

  const handleSort = (key: string) => {
    setSort(prev => ({
      key,
      dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleCreateTenant = (formData: any) => {
    const newTenant: Tenant = {
      customerId: 'TSS',
      tenantId: `tenant-${Date.now()}`,
      tenantDisplayName: formData.tenantDisplayName,
      customerName: formData.customerName,
      adminEmail: formData.adminEmail,
      adminFirstName: formData.adminFirstName,
      adminLastName: formData.adminLastName,
      products: formData.products,
      tenantStatus: 'Trial',
      createdDate: new Date().toISOString(),
    };

    setTenants([...tenants, newTenant]);
    setShowCreateModal(false);
    addToast('success', `Tenant "${formData.tenantDisplayName}" created successfully`);
  };

  const handleViewTenant = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setShowDetailsModal(true);
  };

  const handleDeleteTenant = (tenantId: string) => {
    if (confirm('Are you sure you want to delete this tenant?')) {
      setTenants(tenants.filter(t => t.tenantId !== tenantId));
      addToast('success', 'Tenant deleted successfully');
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-2">
            Tenant Self Service
          </h1>
          <p className="text-base-content/70">
            Manage and monitor all tenant accounts
          </p>
        </div>

        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <SearchAndFilters
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
          <div className="flex gap-2">
            <button
              onClick={() => setShowSessionPanel(true)}
              className="btn btn-outline btn-sm gap-2"
            >
              <span>📊</span>
              Session Requests ({requests.length})
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn btn-primary btn-sm gap-2"
            >
              <span>➕</span>
              Create Tenant
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-base-content/70 mb-4">
          {filteredTenants.length === tenants.length
            ? `${tenants.length} total tenants`
            : `${filteredTenants.length} of ${tenants.length} tenants`}
        </div>

        {/* Table */}
        <TenantsTable
          tenants={filteredTenants}
          sort={sort}
          onSort={handleSort}
          onView={handleViewTenant}
          onDelete={handleDeleteTenant}
        />

        {/* Modals & Panels */}
        <CreateTenantModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateTenant}
        />

        <TenantDetailsModal
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
          tenant={selectedTenant}
        />

        <SessionRequestsPanel
          isOpen={showSessionPanel}
          onClose={() => setShowSessionPanel(false)}
          requests={requests}
        />

        <ToastContainer
          toasts={toasts}
          onClose={removeToast}
        />
      </div>
    </div>
  );
}
