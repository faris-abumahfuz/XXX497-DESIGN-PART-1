import { TankStatus, SensorHealth } from '../types/telemetry';

export const mockDashboardData = {
  system: {
    potId: "POT-G17-01",
    lastHeartbeat: "Just now",
    serverConnected: true,
    sensorStatus: SensorHealth.HEALTHY,
    tankStatus: TankStatus.NORMAL // Change to TankStatus.EMPTY to test alert banner
  },
  live: {
    moisture: {
      current: 42,
      lowerThreshold: 30, // Defined by Emir / Talal
      upperThreshold: 45,
      unit: "%"
    },
    temperature: {
      current: 23.4,
      unit: "°C"
    },
    light: {
      current: 780,
      unit: "lux"
    }
  },
  history: [
    { timestamp: "08:00", moisture: 31, temp: 21.0, light: 250 },
    { timestamp: "10:00", moisture: 29, temp: 22.5, light: 520 },
    { timestamp: "12:00", moisture: 46, temp: 24.2, light: 890 }, // Pump ran here
    { timestamp: "14:00", moisture: 44, temp: 25.0, light: 950 },
    { timestamp: "16:00", moisture: 43, temp: 23.8, light: 710 },
    { timestamp: "18:00", moisture: 42, temp: 22.9, light: 380 }
  ],
  wateringLogs: [
    {
      id: "w-102",
      timestamp: "Today at 10:45 AM",
      durationSeconds: 4,
      volumeMl: 60,
      triggeredBy: "Auto Threshold (< 30%)"
    },
    {
      id: "w-101",
      timestamp: "Yesterday at 04:15 PM",
      durationSeconds: 5,
      volumeMl: 75,
      triggeredBy: "Auto Threshold (< 30%)"
    }
  ]
};