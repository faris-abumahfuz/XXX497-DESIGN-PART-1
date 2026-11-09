import React from 'react';
import { Waves } from 'lucide-react';
import { TankStatus } from '../../types/telemetry';

export default function ReservoirCard({ status }) {
  const isAdequate = status === TankStatus.NORMAL;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Reservoir Tank</span>
        <div className={`p-2 rounded-lg ${isAdequate ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}>
          <Waves className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline space-x-1">
        <span className="text-2xl font-bold text-slate-800">{isAdequate ? 'Adequate' : 'Depleted'}</span>
      </div>

      <div className="mt-3 text-xs">
        <span className={`px-2 py-0.5 rounded-full font-medium ${isAdequate ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isAdequate ? 'Float Sensor OK' : 'Refill Required'}
        </span>
      </div>
    </div>
  );
}