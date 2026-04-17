// Deprecated

import { useState, useEffect } from 'react'
import { connectMqtt, disconnectMqtt } from '@/services/mqttServices'
import type { WeatherData, WeatherDataPoint, MqttConnectionState } from '@/types/weather'

export const useWeather = () => {
    const [data, setData] = useState<WeatherData | null>(null)
    const [history, setHistory] = useState<WeatherDataPoint[]>([])
    const [status, setStatus] = useState<MqttConnectionState>('diconnected')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const handleMessage = (newData: WeatherData) => {
            setData(newData)

            const now = new Date()
            const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`

            setHistory((prev) => {
                const newHistory = [...prev, { ...newData, time: timeString }]
                if (newHistory.length > 30) {
                    return newHistory.slice(1)
                }
                return newHistory
            })
        }

        const handleStatus = (newStatus: string) => {
            setStatus(newStatus as MqttConnectionState)

            if (newStatus === 'error') {
                setError('No se pudo establecer conexión con el servidor MQTT')
            } else if (newStatus === 'connected') {
                setError(null)
            }
        }

        connectMqtt(handleMessage, handleStatus)

        return () => {
            disconnectMqtt()
        }
    }, [])

    return { data, history, status, error }
}