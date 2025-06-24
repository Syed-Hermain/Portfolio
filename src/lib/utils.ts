import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind classes.
 * @param inputs - Class values to combine.
 * @returns A merged class string.
 */
export function cn(...inputs: any[]) {
    return twMerge(clsx(...inputs));
};
