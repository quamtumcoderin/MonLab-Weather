import {
    Thermometer,
    Bubbles,
    Sun,
    Gauge,
    Mountain,
    CloudFog,
} from 'lucide-react'
import { getAqiColor } from '@/utils/aqi'
import type { JSX } from 'react'

export interface MetricConfig {
    title: string
    unit: string
    icon: JSX.Element
    colorClass: string | ((value: number | null) => string)
}

export const metricsConfig: Record<string, MetricConfig> = {
    Temperaturesht10: {
        title: 'Temperatura (SHT10)',
        unit: 'ºC',
        icon: <Thermometer className='w-6 h-6' />,
        colorClass: 'text-orange-500'
    },
    temp: {
        title: 'Temperatura (Normal)',
        unit: 'ºC',
        icon: <Thermometer className='w-6 h-6' />,
        colorClass: 'text-sky-500'
    },
    humeditysht10: {
        title: 'Humedad',
        unit: '%',
        icon: <Bubbles className='w-6 h-6' />,
        colorClass: 'text-sky-500'
    },
    uvs: {
        title: 'Radiación UV',
        unit: 'UV',
        icon: <Sun className='w-6 h-6' />,
        colorClass: 'text-purple-500'
    },
    pressure: {
        title: 'Presión',
        unit: 'hPa',
        icon: <Gauge className='w-6 h-6' />,
        colorClass: 'text-indigo-500'
    },
    als: {
        title: 'Altitud',
        unit: 'm',
        icon: <Mountain className='w-6 h-6' />,
        colorClass: 'text-emerald-500'
    },
    pm1: {
        title: 'PM 1.0',
        unit: 'µg/m³',
        icon: <CloudFog className='w-6 h-6' />,
        colorClass: getAqiColor
    },
    pm25: {
        title: 'PM 2.5',
        unit: 'µg/m³',
        icon: <CloudFog className='w-6 h-6' />,
        colorClass: getAqiColor
    },
    pm10: {
        title: 'PM 10',
        unit: 'µg/m³',
        icon: <CloudFog className='w-6 h-6' />,
        colorClass: getAqiColor
    }
}