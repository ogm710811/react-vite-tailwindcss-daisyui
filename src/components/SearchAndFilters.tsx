import React from 'react';

interface SearchAndFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

export function SearchAndFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter
}: SearchAndFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <div className="form-control">
        <div className="input-group">
          <span className="bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search tenants..."
            className="input input-bordered input-sm w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <select
        className="select select-bordered select-sm w-full sm:w-40"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="Full">Full</option>
        <option value="Trial">Trial</option>
        <option value="Pause">Paused</option>
        <option value="Offboarding">Offboarding</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
}
