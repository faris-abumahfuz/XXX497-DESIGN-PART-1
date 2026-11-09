import React from 'react';

export default function ClimateCard({ title, value, unit, icon: Icon, badgeText }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline space-x-1">
        <span className="text-3xl font-extrabold text-slate-800">{value}</span>
        <span className="text-base font-semibold text-slate-500">{unit}</span>
      </div>

      <div className="mt-3 text-xs text-slate-500">
        Status: <span className="text-slate-700 font-medium">{badgeText}</span>
      </div>
    </div>
  );
}