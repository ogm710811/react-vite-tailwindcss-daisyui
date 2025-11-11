export type TenantStatus = 'Full' | 'Trial' | 'Pause' | 'Offboarding' | 'Closed';

export interface Tenant {
  customerId: string;
  tenantId: string;
  tenantDisplayName: string;
  customerName: string;
  adminEmail: string;
  adminFirstName: string;
  adminLastName: string;
  products: string[];
  tenantStatus: TenantStatus;
  createdDate: string;
}

export interface Request {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  eventType: string;
  orderId: string;
  tenantDisplayName: string;
  tenantId: string;
  products: string[];
  payload: {
    businessEvent: {
      tenantDisplayName: string;
      tenantStatus: string;
    };
  };
  response: {
    httpStatus: number;
    message: string;
    correlationId: string;
  };
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  ts: string;
  label: string;
}

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'info';
  msg: string;
}

export interface SortConfig {
  key: string;
  dir: 'asc' | 'desc';
}

export interface Stats {
  total: number;
  active: number;
  trial: number;
  paused: number;
}

export interface CreateTenantFormData {
  tenantDisplayName: string;
  customerName: string;
  adminEmail: string;
  adminFirstName: string;
  adminLastName: string;
  tenantStatus: TenantStatus;
  cloudProvider: string;
  globalRegion: string;
  localRegion: string;
  countryCode: string;
  products: string[];
  salesforceAccountId?: string;
  productSkuId?: string;
}
