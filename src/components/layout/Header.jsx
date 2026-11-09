import React from 'react';
import { Sprout, Wifi } from 'lucide-react';

export default function Header({ system }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-botanical-100 text-botanical-700 rounded-lg">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-800">Smart Plant Pot (P01)</h1>
            <p className="text-xs text-slate-500">Group 17 · Live Monitor</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs font-medium">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Wifi className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-600 hidden sm:inline">{system.lastHeartbeat}</span>
        </div>
      </div>
    </header>
  );
}