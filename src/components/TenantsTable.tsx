import React from 'react';
import { Tenant, SortConfig } from '../types';
import { statusConfig, formatDate } from '../utils/sorters';

interface TenantsTableProps {
  tenants: Tenant[];
  sort: SortConfig;
  onSort: (key: string) => void;
  onView: (tenant: Tenant) => void;
  onDelete: (tenantId: string) => void;
}

export function TenantsTable({ tenants, sort, onSort, onView, onDelete }: TenantsTableProps) {
  const SortIcon = ({ column }: { column: string }) => {
    if (sort.key !== column) {
      return <span className="opacity-30">↕</span>;
    }
    return sort.dir === 'asc' ? <span>▲</span> : <span>▼</span>;
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
      <table className="table table-zebra table-sm">
        <thead>
          <tr>
            <th
              className="cursor-pointer select-none hover:bg-base-200"
              onClick={() => onSort('tenantDisplayName')}
            >
              <div className="flex items-center gap-2">
                Tenant Name <SortIcon column="tenantDisplayName" />
              </div>
            </th>
            <th
              className="cursor-pointer select-none hover:bg-base-200"
              onClick={() => onSort('tenantId')}
            >
              <div className="flex items-center gap-2">
                Tenant ID <SortIcon column="tenantId" />
              </div>
            </th>
            <th
              className="cursor-pointer select-none hover:bg-base-200"
              onClick={() => onSort('adminEmail')}
            >
              <div className="flex items-center gap-2">
                Admin Email <SortIcon column="adminEmail" />
              </div>
            </th>
            <th>Products</th>
            <th
              className="cursor-pointer select-none hover:bg-base-200"
              onClick={() => onSort('tenantStatus')}
            >
              <div className="flex items-center gap-2">
                Status <SortIcon column="tenantStatus" />
              </div>
            </th>
            <th
              className="cursor-pointer select-none hover:bg-base-200"
              onClick={() => onSort('createdDate')}
            >
              <div className="flex items-center gap-2">
                Created <SortIcon column="createdDate" />
              </div>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-8">
                <div className="text-base-content/50">
                  <div className="text-4xl mb-2">🔍</div>
                  <div>No tenants found</div>
                </div>
              </td>
            </tr>
          ) : (
            tenants.map((tenant) => (
              <tr key={tenant.tenantId} className="hover">
                <td>
                  <div className="font-semibold">{tenant.tenantDisplayName}</div>
                  <div className="text-xs opacity-50">{tenant.customerName}</div>
                </td>
                <td>
                  <code className="text-xs bg-base-200 px-2 py-1 rounded">
                    {tenant.tenantId}
                  </code>
                </td>
                <td>
                  <div className="text-sm">{tenant.adminEmail}</div>
                  <div className="text-xs opacity-50">
                    {tenant.adminFirstName} {tenant.adminLastName}
                  </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {tenant.products.map((product) => (
                      <span
                        key={product}
                        className="badge badge-sm badge-outline"
                      >
                        {product.replace('DATABOLT_', '')}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <div
                    className={`badge ${statusConfig[tenant.tenantStatus]?.badge || 'badge-neutral'} gap-1`}
                  >
                    <span>{statusConfig[tenant.tenantStatus]?.icon}</span>
                    {tenant.tenantStatus}
                  </div>
                </td>
                <td>
                  <div className="text-xs">{formatDate(tenant.createdDate)}</div>
                </td>
                <td>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-xs">
                      ⋯
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a onClick={() => onView(tenant)}>
                          👁️ View Details
                        </a>
                      </li>
                      <li>
                        <a>✏️ Edit</a>
                      </li>
                      <li>
                        <a className="text-error" onClick={() => onDelete(tenant.tenantId)}>
                          🗑️ Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
