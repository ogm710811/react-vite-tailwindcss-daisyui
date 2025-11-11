import { Tenant } from '../types';

export const sorters: Record<string, (a: Tenant, b: Tenant) => number> = {
  tenantDisplayName: (a, b) => a.tenantDisplayName.localeCompare(b.tenantDisplayName),
  tenantId: (a, b) => a.tenantId.localeCompare(b.tenantId),
  adminEmail: (a, b) => a.adminEmail.localeCompare(b.adminEmail),
  tenantStatus: (a, b) => a.tenantStatus.localeCompare(b.tenantStatus),
  createdDate: (a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime(),
};

export const statusConfig = {
  Full: {
    badge: 'badge-success',
    icon: '✅'
  },
  Trial: {
    badge: 'badge-info',
    icon: '⏳'
  },
  Pause: {
    badge: 'badge-warning',
    icon: '⏸️'
  },
  Offboarding: {
    badge: 'badge-warning',
    icon: '📤'
  },
  Closed: {
    badge: 'badge-neutral',
    icon: '❌'
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
