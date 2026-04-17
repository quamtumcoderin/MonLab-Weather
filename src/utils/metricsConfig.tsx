import {
    Thermometer,
    Wind,
    Sun,
    Gauge,
    Mountain,
    CloudFog,
    SunDim
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
    temp: {
        title: 'Temperatura',
        unit: 'ºC',
        icon: <Thermometer className='w-6 h-6' />,
        colorClass: 'text-orange-500'
    },
    windspeed: {
        title: 'Viento',
        unit: 'km/h',
        icon: <Wind className='w-6 h-6' />,
        colorClass: 'text-sky-500'
    },
    uvs: {
        title: 'Radiación UV',
        unit: 'UV',
        icon: <Sun className='w-6 h-6' />,
        colorClass: 'text-purple-500'
    },
    als: {
        title: 'Luz Ambiental',
        unit: 'lx',
        icon: <SunDim className='w-6 h-6' />,
        colorClass: 'text-amber-400'
    },
    pressure: {
        title: 'Presión',
        unit: 'hPa',
        icon: <Gauge className='w-6 h-6' />,
        colorClass: 'text-indigo-500'
    },
    alt: {
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