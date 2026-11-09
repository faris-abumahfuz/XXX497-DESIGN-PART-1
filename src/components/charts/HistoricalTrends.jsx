import React from 'react';
import { Activity } from 'lucide-react';

export default function HistoricalTrends({ history }) {
  const maxMoisture = 60; // Chart scaling boundary

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-botanical-600" />
          <h2 className="text-sm font-bold text-slate-800">Soil Moisture & Climate History (Recent)</h2>
        </div>
        <span className="text-xs text-slate-400">View-only telemetry</span>
      </div>

      {/* Responsive Bar representation */}
      <div className="h-44 flex items-end space-x-2 sm:space-x-4 pt-6 pb-2 border-b border-slate-100">
        {history.map((item, idx) => {
          const heightPct = Math.min(100, Math.round((item.moisture / maxMoisture) * 100));
          return (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
              <span className="text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.moisture}%
              </span>
              <div 
                style={{ height: `${heightPct}%` }}
                className="w-full max-w-[36px] bg-emerald-500 rounded-t-sm group-hover:bg-emerald-600 transition-all"
              />
              <span className="text-[10px] font-medium text-slate-500 mt-2">{item.timestamp}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-3 text-xs text-slate-500">
        <span>Target Band: 30% - 45%</span>
        <span>Automatic updates via server</span>
      </div>
    </div>
  );
}