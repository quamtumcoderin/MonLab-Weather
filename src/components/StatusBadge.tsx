import { useWeatherStore } from '../store/weatherStore'

export const StatusBadge = () => {
    const status = useWeatherStore((state) => state.status)

    const getStatusConfig = () => {
        switch (status) {
            case 'connected':
                return { color: 'bg-emerald-500', text: 'Conectado' }
            case 'connecting':
                return { color: 'bg-amber-500 animate-pulse', text: 'Conectando...' }
            case 'reconnecting':
                return { color: 'bg-orange-500 animate-pulse', text: 'Reconectando...' }
            case 'error':
                return { color: 'bg-rose-500', text: 'Error de conexión' }
            default:
                return { color: 'bg-slate-500', text: 'Desconectado' }
        }
    }

    const { color, text } = getStatusConfig()

    return (
        <div className='flex items-center gap-2'>
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} aria-hidden='true'></span>
            <span className='text-sm font-medium text-slate-300'>{text}</span>
        </div>
    )
}