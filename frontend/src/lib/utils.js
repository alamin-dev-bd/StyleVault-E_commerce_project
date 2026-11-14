import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** cn('px-4', isActive && 'bg-brand-600', className)  -> merges classes and resolves Tailwind conflicts */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}