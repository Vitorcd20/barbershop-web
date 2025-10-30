import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointment";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    []
  );

  function createAppointment({
    client,
    date,
    time,
  }: Omit<Appointment, "id" | "createdAt" | "updatedAt">) {
    setAppointments([
      ...appointments,
      {
        id: Math.random().toString(36).substring(2, 9),
        client,
        date,
        time,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }
  function deleteAppointment(id: string) {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  }

  return {
    createAppointment,
    deleteAppointment,
  };
}
