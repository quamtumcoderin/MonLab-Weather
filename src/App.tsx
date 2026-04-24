import { Suspense, lazy, useEffect, useMemo } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { MetricCard } from '@/components/MetricCard'
import { useWeatherStore } from '@/store/weatherStore'
import { metricsConfig } from '@/utils/metricsConfig'
import type { WeatherData } from '@/types/weather'

const TrendChart = lazy(() => 
  import('./components/TrendChart').then((module) => ({
    default: module.TrendChart
  }))
)

const ChartSkeleton = () => (
  <div className='col-span-1 lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center justify-center min-h-87.5 animate-pulse'>
    <div className='w-full h-full bg-slate-800/20 rounded-xl'></div>
  </div>
)

export const App = () => {
  const { data, history, connect, disconnect } = useWeatherStore()

  console.log(data)

  useEffect(() => {
    connect()
    return () => {
      disconnect()
    }
  }, [connect, disconnect])

  const metricKeys = useMemo(() => 
    Object.keys(metricsConfig) as Array<keyof WeatherData>,
  [])

  const metricCards = useMemo(() => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
      {metricKeys.map((key) => {
        const config = metricsConfig[key]
        const value = data ? data[key] : null
        const finalColorClass = typeof config.colorClass === 'function'
          ? config.colorClass(value)
          : config.colorClass

        return (
          <MetricCard
            key={key}
            title={config.title}
            value={value}
            unit={config.unit}
            icon={config.icon}
            colorClass={finalColorClass}
          />
        )
      })}
    </div>
  ), [data, metricKeys])

  return (
    <MainLayout>
      <div className='flex flex-col gap-6 md:gap-8'>
        {metricCards}

        <Suspense fallback={
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
            <ChartSkeleton />
            <ChartSkeleton />
          </div>
        }>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
            <TrendChart
              data={history}
              dataKey='Temperaturesht10'
              title='Tendencia de Temperatura (ºC)'
              color='#f97316'
            />
            <TrendChart
              data={history}
              dataKey='pm25'
              title='Evolución de Partículas PM2.5 (µg/m³)'
              color='#94a3b8'
            />
          </div>
        </Suspense>
      </div>
    </MainLayout>
  )
}

export default App