import React from 'react';
import { Droplet } from 'lucide-react';

export default function MoistureCard({ moisture }) {
  const isOptimal = moisture.current >= moisture.lowerThreshold && moisture.current <= moisture.upperThreshold;
  const isLow = moisture.current < moisture.lowerThreshold;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Soil Moisture</span>
        <div className={`p-2 rounded-lg ${isLow ? 'bg-amber-100 text-amber-700' : 'bg-botanical-100 text-botanical-700'}`}>
          <Droplet className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline space-x-1">
        <span className="text-3xl font-extrabold text-slate-800">{moisture.current}</span>
        <span className="text-base font-semibold text-slate-500">{moisture.unit}</span>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-slate-500">Threshold: {moisture.lowerThreshold}% – {moisture.upperThreshold}%</span>
        <span className={`px-2 py-0.5 rounded-full font-medium ${
          isOptimal ? 'bg-emerald-50 text-emerald-700' : isLow ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'
        }`}>
          {isOptimal ? 'Optimal' : isLow ? 'Dry (Watering due)' : 'Saturated'}
        </span>
      </div>
    </div>
  );
}