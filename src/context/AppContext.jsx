import React, { createContext, useState, useEffect } from "react";
import doctorsData from "../data/doctors.json";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  function addAppointment(appt) {
    const updated = [...appointments, { ...appt, id: Date.now() }];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  }

  function cancelAppointment(index) {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  }

  return (
    <AppContext.Provider value={{ 
      doctors, 
      appointments, 
      addAppointment, 
      cancelAppointment 
    }}>
      {children}
    </AppContext.Provider>
  );
}
