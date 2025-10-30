export const APPOINTMENTS_KEY = "appointments";


export interface Appointment {
  id: string
  client: string
  date: Date  
  time: string
  createdAt?: Date
  updatedAt?: Date
}
