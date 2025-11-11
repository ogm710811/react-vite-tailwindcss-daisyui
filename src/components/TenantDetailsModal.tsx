import React from 'react';
import { Tenant } from '../types';
import { statusConfig, formatDate } from '../utils/sorters';

interface TenantDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tenant: Tenant | null;
}

export function TenantDetailsModal({ isOpen, onClose, tenant }: TenantDetailsModalProps) {
  if (!isOpen || !tenant) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Tenant Details</h3>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h4 className="card-title text-lg">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-base-content/60">Tenant Display Name</div>
                  <div className="font-semibold">{tenant.tenantDisplayName}</div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Customer Name</div>
                  <div className="font-semibold">{tenant.customerName}</div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Tenant ID</div>
                  <code className="text-xs bg-base-300 px-2 py-1 rounded">
                    {tenant.tenantId}
                  </code>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Customer ID</div>
                  <code className="text-xs bg-base-300 px-2 py-1 rounded">
                    {tenant.customerId}
                  </code>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Status</div>
                  <div
                    className={`badge ${statusConfig[tenant.tenantStatus]?.badge || 'badge-neutral'} gap-1 mt-1`}
                  >
                    <span>{statusConfig[tenant.tenantStatus]?.icon}</span>
                    {tenant.tenantStatus}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Created Date</div>
                  <div className="font-semibold">{formatDate(tenant.createdDate)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Info */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h4 className="card-title text-lg">Administrator Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-base-content/60">Name</div>
                  <div className="font-semibold">
                    {tenant.adminFirstName} {tenant.adminLastName}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-base-content/60">Email</div>
                  <div className="font-semibold">{tenant.adminEmail}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h4 className="card-title text-lg">Products</h4>
              <div className="flex flex-wrap gap-2">
                {tenant.products.map((product) => (
                  <div key={product} className="badge badge-primary badge-lg">
                    {product.replace('DATABOLT_', '')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
