import React from 'react';
import { AlertTriangle, Droplets } from 'lucide-react';
import { TankStatus, SensorHealth } from '../../types/telemetry';

export default function AlertBanner({ system }) {
  const isTankEmpty = system.tankStatus === TankStatus.EMPTY;
  const isSensorFault = system.sensorStatus === SensorHealth.ERROR;

  if (!isTankEmpty && !isSensorFault) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      {isTankEmpty && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start space-x-3 shadow-sm mb-3">
          <Droplets className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-amber-800">Water Reservoir Empty</h3>
            <p className="text-xs text-amber-700 mt-0.5">
              Automated pump cycles are halted by hardware safety rules. Refill the tank to resume watering.
            </p>
          </div>
        </div>
      )}

      {isSensorFault && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start space-x-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-red-800">Sensor Signal Interrupted</h3>
            <p className="text-xs text-red-700 mt-0.5">
              Check moisture probe wiring on ESP32 ADC1. Watering holds current safe state.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}