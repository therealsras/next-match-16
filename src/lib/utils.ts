import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {differenceInYears} from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAge(dob: string | Date) {
  return differenceInYears(new Date(), new Date(dob))
}