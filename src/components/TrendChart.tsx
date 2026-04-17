import { memo } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import type { WeatherDataPoint } from '../hooks/useWeather'

interface TrendChartProps {
    data: WeatherDataPoint[]
    dataKey: keyof Omit<WeatherDataPoint, 'time'>
    title: string
    color: string
}

export const TrendChart = memo(({ data, dataKey, title, color }: TrendChartProps) => {
    if (!data || data.length === 0) {
        return (
            <div className='col-span-1 lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center justify-center min-h-87.5'>
                <span className='text-slate-500 italic'>Esperando datos para la gráfica...</span>
            </div>
        )
    }

    return (
        <div className='col-span-1 lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm transition-all hover:bg-slate-800/50 hover:border-slate-700'>
            <h3 className='text-sm font-medium text-slate-400 mb-6'>{title}</h3>
            <div className='h-75 w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#1e293b' vertical={false} />
                        <XAxis 
                            dataKey='time' 
                            stroke='#64748b' 
                            fontSize={12} 
                            tickLine={false}
                            axisLine={false}
                            minTickGap={20}
                        />
                        <YAxis 
                            stroke='#64748b' 
                            fontSize={12} 
                            tickLine={false}
                            axisLine={false}
                            domain={['auto', 'auto']}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#0f172a', 
                                borderColor: '#1e293b', 
                                borderRadius: '0.75rem',
                                color: '#f1f5f9'
                            }}
                            itemStyle={{ color: color, fontWeight: 600 }}
                            labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                        />
                        <Line 
                            type='monotone' 
                            dataKey={dataKey} 
                            stroke={color} 
                            strokeWidth={3} 
                            dot={false}
                            activeDot={{ r: 6, fill: color, stroke: '#0f172a', strokeWidth: 2 }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
})

TrendChart.displayName = 'TrendChart'