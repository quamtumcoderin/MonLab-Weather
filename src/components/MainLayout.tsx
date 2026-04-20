import { type ReactNode } from 'react'
import { Sun, Moon } from 'lucide-react'
import { StatusBadge } from './StatusBadge'
import { useTheme } from '../hooks/useTheme'

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className='main-h-screen bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 font-sans selection:bg-blue-500 dark:selection:bg-blue-500/30'>
            <header className='border-b border-slate-400/60 dark:border-slate-800/60 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sticky top-0 z-50'>
                <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-xl font-bold tracking-tight text-slate-950 dark:text-white'>
                            MonLab Weather
                        </h1>
                    </div>

                    <div className='flex items-center gap-6'>
                        <StatusBadge />
                        <button
                            onClick={toggleTheme}
                            className='p-2 rounded-full bg-slate-300/40 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            aria-label='Cambiar tema'
                        >
                            {theme === 'dark' ? (
                                <Sun className='w-5 h-5' />
                            ): (
                                <Moon className='w-5 h-5' />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className='container mx-auto px-4 py-8'>
                {children}
            </main>
        </div>
    )
}