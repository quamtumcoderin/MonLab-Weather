import { create } from 'zustand'
import { connectMqtt, disconnectMqtt } from '@/services/mqttServices'
import type { WeatherData, WeatherDataPoint, MqttConnectionState } from '@/types/weather'

interface WeatherStore {
    data: WeatherData | null
    history: WeatherDataPoint[]
    status: MqttConnectionState
    error: string | null
    connect: () => void
    disconnect: () => void
}

export const useWeatherStore = create<WeatherStore>((set) => ({
    data: null,
    history: [],
    status: 'diconnected',
    error: null,

    connect: () => {
        connectMqtt(
            (newData) => {
                const now = new Date()
                const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

                set((state) => {
                    const newHistory = [...state.history, { ...newData, time: timeString }]
                    return {
                        data: newData,
                        history: newHistory.length > 30 ? newHistory.slice(1) : newHistory
                    }
                })
            },
            (newStatus) => {
                set({
                    status: newStatus as MqttConnectionState,
                    error: newStatus === 'error' ? 'No se pudo establecer conexión con MQTT' : null
                })
            }
        )
    },

    disconnect: () => {
        disconnectMqtt()
        set({ status: 'diconnected' })
    }
}))