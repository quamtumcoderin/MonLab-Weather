import { memo, type ReactNode } from 'react'

interface MetricCardProps {
    title: string
    value: number | null
    unit?: string
    icon: ReactNode
    trend?: ReactNode
    colorClass?: string
}

export const MetricCard = memo(({
    title,
    value,
    unit,
    icon,
    trend,
    colorClass = 'text-blue-500'
}: MetricCardProps) => {
    const hasData = value !== null && value !== undefined

    return (
        <div className='relative overflow-hidden rounded-2xl bg-slate-900/50 p-6 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-700 hover:-translate-y-1'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-sm font-medium text-slate-400'>{title}</h3>
                <div className={`p-2 rounded-lg bg-slate-950/50 ${colorClass}`}>
                    {icon}
                </div>
            </div>

            <div className='flex items-baseline gap-2'>
                {hasData ? (
                    <>
                        <span className='text-3xl font-bold tracking-tight text-slate-100'>
                            {value}
                        </span>
                        {unit && <span className='text-sm text-slate-400'>{unit}</span>}
                    </>
                ) : (
                    <span className='text-xl text-slate-500 italic'>Sin datos</span>
                )}
            </div>

            {trend && (
                <div className='mt-4 text-xs font-medium'>
                    {trend}
                </div>
            )}
        </div>
    )
})

MetricCard.displayName = 'MetricCard'