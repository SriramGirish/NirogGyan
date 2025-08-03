import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AppointmentCard from "../components/AppointmentCard";

export default function BookedAppointmentsPage() {
  const { appointments } = useContext(AppContext);

  return (
    <div className="appointments-container">
      <div style={{textAlign:"center",fontWeight:700,color:"#163c7f",fontSize:"2rem",marginBottom:36}}>My Appointments</div>
      {appointments.length === 0 ? (
        <div className="appointment-empty">
          <div style={{fontSize:"3.5rem",marginBottom:11}}>📅</div>
          <div style={{marginBottom:6, fontSize:"1.11rem"}}>No appointments yet</div>
          <a href="/" className="appointment-empty-btn">Find Doctors</a>
        </div>
      ) : (
        <div className="appointments-card-grid">
          {appointments.map((appointment, idx) => (
            <AppointmentCard key={idx} appointment={appointment} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
