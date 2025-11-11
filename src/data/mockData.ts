import { Tenant, Request } from '../types';

export const mockTenants: Tenant[] = [
  {
    customerId: 'TSS',
    tenantId: 'tenant-1',
    tenantDisplayName: 'Alpha Solutions',
    customerName: 'Alpha Corp',
    adminEmail: 'admin1@example.com',
    adminFirstName: 'John',
    adminLastName: 'Doe',
    products: ['DATABOLT_CORE', 'DATABOLT_DATABRICKS', 'DATABOLT_SNOWFLAKE'],
    tenantStatus: 'Full',
    createdDate: '2025-01-15T10:30:00Z'
  },
  {
    customerId: 'TSS',
    tenantId: 'tenant-2',
    tenantDisplayName: 'Beta Analytics',
    customerName: 'Beta Inc',
    adminEmail: 'admin2@example.com',
    adminFirstName: 'Jane',
    adminLastName: 'Smith',
    products: ['DATABOLT_CORE', 'DATABOLT_DATABRICKS'],
    tenantStatus: 'Full',
    createdDate: '2025-02-01T14:20:00Z'
  },
  {
    customerId: 'TSS',
    tenantId: 'tenant-5',
    tenantDisplayName: 'Gamma Systems',
    customerName: 'Gamma LLC',
    adminEmail: 'admin5@example.com',
    adminFirstName: 'David',
    adminLastName: 'Brown',
    products: ['DATABOLT_CORE', 'DATABOLT_SNOWFLAKE'],
    tenantStatus: 'Trial',
    createdDate: '2025-03-10T09:15:00Z'
  },
  {
    customerId: 'TSS',
    tenantId: 'tenant-6',
    tenantDisplayName: 'Delta Partners',
    customerName: 'Delta Group',
    adminEmail: 'admin6@example.com',
    adminFirstName: 'Lisa',
    adminLastName: 'Garcia',
    products: ['DATABOLT_CORE'],
    tenantStatus: 'Pause',
    createdDate: '2024-11-20T16:45:00Z'
  }
];

export const mockRequests: Request[] = [
  {
    id: 'req_1001',
    createdAt: '2025-09-24T10:15:00Z',
    updatedAt: '2025-09-24T10:15:06Z',
    status: 'succeeded',
    eventType: 'create',
    orderId: '00007C1SGNJL',
    tenantDisplayName: 'Alpha Prod',
    tenantId: 'tenant-1',
    products: ['DATABOLT_CORE', 'DATABOLT_DATABRICKS', 'DATABOLT_SNOWFLAKE'],
    payload: {
      businessEvent: {
        tenantDisplayName: 'Alpha Prod',
        tenantStatus: 'Full'
      }
    },
    response: {
      httpStatus: 202,
      message: 'Accepted',
      correlationId: 'corr-1001'
    },
    timeline: [
      { ts: '2025-09-24T10:15:00Z', label: 'Submitted' },
      { ts: '2025-09-24T10:15:01Z', label: 'Validated' },
      { ts: '2025-09-24T10:15:02Z', label: 'Queued' },
      { ts: '2025-09-24T10:15:06Z', label: 'Completed' }
    ]
  }
];
