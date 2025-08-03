import React, { useState } from "react";
export default function AppointmentCard({ appointment }) {
  const isPast = new Date(`${appointment.date}T${appointment.time}`) < new Date();
  const [isCancelled,setIsCancelled]=useState(true)

  const handleCancel=()=>{
    const confirm=window.confirm()
    if (confirm){
        setIsCancelled(false)
    }
  }

  return (
    <div className="appointment-card">
      <div className="appoint-header">
        <span className="appoint-doc">{appointment.doctorName}</span>
        <span className={`appoint-status ${isPast ? "appoint-status-completed" : "appoint-status-upcoming"}`}>
          {isPast ? "Completed" : "Upcoming"}
        </span>
      </div>
      <div className="appoint-info">
        <div>Patient:</div><div>{appointment.patientName}</div>
        <div>Email:</div><div>{appointment.email}</div>
        <div>Date:</div><div>{appointment.date}</div>
        <div>Time:</div><div>{appointment.time}</div>
      </div>
      {!isPast && (
        <div className="appointment-btn-row">
          <button className="appointment-btn" onClick={handleCancel}>{!isCancelled?"Cancelled":"Cancel"}</button>
          <button className="appointment-btn alt" disabled>Reschedule</button>
        </div>
      )}
    </div>
  );
}
