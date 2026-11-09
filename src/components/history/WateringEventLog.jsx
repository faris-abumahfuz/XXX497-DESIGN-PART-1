import React from 'react';
import { History, CheckCircle2 } from 'lucide-react';

export default function WateringEventLog({ logs }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <History className="w-4 h-4 text-slate-500" />
        <h2 className="text-sm font-bold text-slate-800">Watering Event History</h2>
      </div>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-4 h-4 text-botanical-600" />
              <div>
                <p className="text-xs font-semibold text-slate-800">{log.triggeredBy}</p>
                <p className="text-[11px] text-slate-500">{log.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-700">{log.volumeMl} ml</p>
              <p className="text-[10px] text-slate-400">{log.durationSeconds}s pump cycle</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-[11px] text-center text-slate-400 mt-4 italic">
        Watering triggers are fully managed by the ESP32. Manual control is disabled.
      </p>
    </div>
  );
}