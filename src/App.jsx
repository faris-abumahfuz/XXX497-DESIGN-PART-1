import React, { useState } from 'react';
import { Thermometer, Sun } from 'lucide-react';
import Header from './components/layout/Header';
import AlertBanner from './components/alerts/AlertBanner';
import MoistureCard from './components/telemetry/MoistureCard';
import ClimateCard from './components/telemetry/ClimateCard';
import ReservoirCard from './components/telemetry/ReservoirCard';
import HistoricalTrends from './components/charts/HistoricalTrends';
import WateringEventLog from './components/history/WateringEventLog';
import { mockDashboardData } from './mock/sensorData';

export default function App() {
  const data = mockDashboardData;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header system={data.system} />
      <AlertBanner system={data.system} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Live Sensor Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MoistureCard moisture={data.live.moisture} />
          <ClimateCard 
            title="Temperature" 
            value={data.live.temperature.current} 
            unit={data.live.temperature.unit} 
            icon={Thermometer} 
            badgeText="Ambient Normal" 
          />
          <ClimateCard 
            title="Ambient Light" 
            value={data.live.light.current} 
            unit={data.live.light.unit} 
            icon={Sun} 
            badgeText="Adequate" 
          />
          <ReservoirCard status={data.system.tankStatus} />
        </section>

        {/* Analytics & Events Grid: Single column on mobile, 2/3 and 1/3 split on desktop */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HistoricalTrends history={data.history} />
          </div>
          <div className="lg:col-span-1">
            <WateringEventLog logs={data.wateringLogs} />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
        P01 Smart Plant Pot · Group 17 Design Project · View-Only Client
      </footer>
    </div>
  );
}