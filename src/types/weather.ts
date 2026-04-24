export interface WeatherData {
    pm1: number | null
    pm25: number | null
    pm10: number | null
    uvs: number | null
    als: number | null
    temp: number | null
    Temperaturesht10: number | null
    pressure: number | null
    humedity: number | null
}

export interface WeatherDataPoint extends WeatherData {
    time: string
}

export type MqttConnectionState =
    | 'connecting'
    | 'connected'
    | 'reconnecting'
    | 'diconnected'
    | 'error'

export interface WeatherContextState {
    data: WeatherData | null
    status: MqttConnectionState
    error: string | null
}