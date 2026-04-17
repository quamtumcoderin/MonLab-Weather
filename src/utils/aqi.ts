export const getAqiColor = (value: number | null): string => {
    if (value === null || value === undefined) return 'text-slate-400'
    if (value <= 12) return 'text-emerald-500'
    if (value <= 35) return 'text-amber-400'
    if (value <= 55) return 'text-orange-500'
    return 'text-rose-500'
}