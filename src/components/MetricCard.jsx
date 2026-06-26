import React from 'react';
import { cn } from '@/lib/utils';

export function MetricCard({ icon: Icon, value, label, subtext, color = 'blue', className }) {
  // Map color to gema variables for icon background
  const colorMap = {
    blue: 'bg-[var(--blue-lt)] text-[var(--blue)]',
    red: 'bg-[var(--red-lt)] text-[var(--red)]',
    orange: 'bg-[var(--orange-lt)] text-[var(--orange)]',
    green: 'bg-[var(--green-lt)] text-[var(--green)]',
    teal: 'bg-[var(--teal-lt)] text-[var(--teal)]',
    purple: 'bg-[var(--purple-lt)] text-[var(--purple)]',
    slate: 'bg-[var(--bg)] text-[var(--slate)]',
  };

  return (
    <div className={cn("metric-card", className)}>
      <div className={cn("metric-icon", colorMap[color] || colorMap.blue)}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="metric-val">{value}</div>
        <div className="metric-lbl">{label}</div>
        {subtext && <div className="metric-sub text-[var(--slate2)]">{subtext}</div>}
      </div>
    </div>
  );
}
