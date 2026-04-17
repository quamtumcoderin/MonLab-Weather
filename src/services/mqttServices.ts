import mqtt from 'mqtt'
import type { WeatherData } from '@/types/weather'
import { MQTT_TOPIC, MQTT_URL } from '@/const/mqtt'

let client: mqtt.MqttClient | null = null

export const connectMqtt = (
    onMessage: (data: WeatherData) => void,
    onStatusChange: (status: string) => void
) => {
    if (client) {
        client.end()
    }

    onStatusChange('connecting')

    client = mqtt.connect(MQTT_URL)

    client.on('connect', () => {
        onStatusChange('connected')
        client?.subscribe(MQTT_TOPIC, (err) => {
            if (err) {
                console.error('Error al suscribirse:', err)
            }
        })
    })

    client.on('reconnect', () => {
        onStatusChange('reconnecting')
    })

    client.on('disconnect', () => {
        onStatusChange('disconnected')
    })

    client.on('error', (error) => {
        onStatusChange('error')
        console.error('Error en MQTT:', error)
    })

    client.on('message', (topic, message) => {
        if (topic === MQTT_TOPIC) {
            try {
                const parsedData: WeatherData = JSON.parse(message.toString())
                onMessage(parsedData)
            } catch (error) {
                console.error('Error parseando el JSON de MQTT:', error)
            }
        }
    })
}

export const disconnectMqtt = () => {
    if (client) {
        client.end()
        client = null
    }
}