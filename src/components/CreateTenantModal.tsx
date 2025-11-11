import React, { useState } from 'react';
import { CreateTenantFormData } from '../types';

interface CreateTenantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: CreateTenantFormData) => void;
}

export function CreateTenantModal({ isOpen, onClose, onSubmit }: CreateTenantModalProps) {
  const [formData, setFormData] = useState<CreateTenantFormData>({
    tenantDisplayName: '',
    customerName: '',
    adminEmail: '',
    adminFirstName: '',
    adminLastName: '',
    tenantStatus: 'Trial',
    cloudProvider: 'AWS',
    globalRegion: 'North America',
    localRegion: 'us-east-1',
    countryCode: 'US',
    products: [],
    salesforceAccountId: '',
    productSkuId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.products.length === 0) {
      alert('Please select at least one product');
      return;
    }
    onSubmit(formData);
    // Reset form
    setFormData({
      tenantDisplayName: '',
      customerName: '',
      adminEmail: '',
      adminFirstName: '',
      adminLastName: '',
      tenantStatus: 'Trial',
      cloudProvider: 'AWS',
      globalRegion: 'North America',
      localRegion: 'us-east-1',
      countryCode: 'US',
      products: [],
      salesforceAccountId: '',
      productSkuId: '',
    });
  };

  const toggleProduct = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">Create New Tenant</h3>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm btn-circle"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Basic Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tenant Display Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={formData.tenantDisplayName}
                    onChange={(e) => setFormData({ ...formData, tenantDisplayName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Customer Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tenant Status *</span>
                </label>
                <select
                  className="select select-bordered"
                  value={formData.tenantStatus}
                  onChange={(e) => setFormData({ ...formData, tenantStatus: e.target.value as any })}
                >
                  <option value="Trial">Trial</option>
                  <option value="Full">Full</option>
                  <option value="Pause">Pause</option>
                </select>
              </div>
            </div>

            {/* Admin Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Admin Information</h4>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Admin Email *</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  value={formData.adminEmail}
                  onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={formData.adminFirstName}
                    onChange={(e) => setFormData({ ...formData, adminFirstName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={formData.adminLastName}
                    onChange={(e) => setFormData({ ...formData, adminLastName: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Deployment Configuration */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Deployment Configuration</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Cloud Provider *</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={formData.cloudProvider}
                    onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                  >
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>GCP</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Global Region *</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={formData.globalRegion}
                    onChange={(e) => setFormData({ ...formData, globalRegion: e.target.value })}
                  >
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia Pacific</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Local Region *</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={formData.localRegion}
                    onChange={(e) => setFormData({ ...formData, localRegion: e.target.value })}
                  >
                    <option>us-east-1</option>
                    <option>us-east-2</option>
                    <option>us-west-2</option>
                    <option>eu-west-1</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country Code *</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Products *</h4>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={formData.products.includes('DATABOLT_CORE')}
                    onChange={() => toggleProduct('DATABOLT_CORE')}
                  />
                  <div>
                    <div className="font-medium">Databolt Core</div>
                    <div className="text-sm text-base-content/60">Essential data platform features</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={formData.products.includes('DATABOLT_DATABRICKS')}
                    onChange={() => toggleProduct('DATABOLT_DATABRICKS')}
                  />
                  <div>
                    <div className="font-medium">Databolt Databricks</div>
                    <div className="text-sm text-base-content/60">Databricks integration</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={formData.products.includes('DATABOLT_SNOWFLAKE')}
                    onChange={() => toggleProduct('DATABOLT_SNOWFLAKE')}
                  />
                  <div>
                    <div className="font-medium">Databolt Snowflake</div>
                    <div className="text-sm text-base-content/60">Snowflake integration</div>
                  </div>
                </label>

                {formData.products.length === 0 && (
                  <p className="text-error text-sm">Please select at least one product</p>
                )}
              </div>
            </div>

            {/* Salesforce Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Salesforce Information (Optional)</h4>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Salesforce Account ID</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="e.g., ssadsad"
                  value={formData.salesforceAccountId}
                  onChange={(e) => setFormData({ ...formData, salesforceAccountId: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product SKU ID</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="e.g., S000L2XA55YF"
                  value={formData.productSkuId}
                  onChange={(e) => setFormData({ ...formData, productSkuId: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Tenant
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
