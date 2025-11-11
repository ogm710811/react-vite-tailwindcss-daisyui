import React from 'react';
import { Stats } from '../types';

interface StatsCardsProps {
  stats: Stats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="stats stats-vertical sm:stats-horizontal shadow w-full mb-6 bg-base-100">
      <div className="stat">
        <div className="stat-figure text-primary text-3xl">📊</div>
        <div className="stat-title">Total Tenants</div>
        <div className="stat-value text-primary">{stats.total}</div>
        <div className="stat-desc">All tenant accounts</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-success text-3xl">✅</div>
        <div className="stat-title">Active</div>
        <div className="stat-value text-success">{stats.active}</div>
        <div className="stat-desc">Full production access</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-info text-3xl">⏳</div>
        <div className="stat-title">Trial</div>
        <div className="stat-value text-info">{stats.trial}</div>
        <div className="stat-desc">Evaluation period</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-warning text-3xl">⏸️</div>
        <div className="stat-title">Paused</div>
        <div className="stat-value text-warning">{stats.paused}</div>
        <div className="stat-desc">Temporarily inactive</div>
      </div>
    </div>
  );
}
