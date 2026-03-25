import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{2})(?=\d)/g, '$1 ')
}

export function getTodayHours(): string {
  const hours = {
    0: 'Fermé', // Dimanche
    1: '19h00 - 23h00', // Lundi
    2: 'Fermé', // Mardi
    3: '19h00 - 23h00', // Mercredi
    4: '19h00 - 00h00', // Jeudi
    5: '19h00 - 00h00', // Vendredi
    6: '18h00 - 00h00', // Samedi
  }
  const today = new Date().getDay() as keyof typeof hours
  return hours[today] || 'Horaires non disponibles'
}
