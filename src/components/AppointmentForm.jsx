import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object({
  patientName: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
});

export default function AppointmentForm({ schedule }) {
  const { addAppointment, doctors } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    const doctor = doctors.find(d => d.id === id);
    addAppointment({ ...data, doctorId: id, doctorName: doctor.name });
    navigate("/", { state: { message: "Appointment Confirmed!" } });
  }

  const availableDates = Object.keys(schedule);

  return (
    <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="appointment-field">
        <label className="appointment-label">Name</label>
        <input
          {...register("patientName")}
          className="appointment-input"
          placeholder="Enter your name"
        />
        {errors.patientName && (
          <span className="appointment-error">{errors.patientName?.message}</span>
        )}
      </div>
      <div className="appointment-field">
        <label className="appointment-label">Email</label>
        <input
          {...register("email")}
          className="appointment-input"
          placeholder="you@email.com"
        />
        {errors.email && (
          <span className="appointment-error">{errors.email?.message}</span>
        )}
      </div>
      <div className="appointment-field">
        <label className="appointment-label">Date</label>
        <select
          {...register("date")}
          onChange={e => setSelectedDate(e.target.value)}
          className="appointment-select"
        >
          <option value="">Select date</option>
          {availableDates.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
        {errors.date && (
          <span className="appointment-error">{errors.date?.message}</span>
        )}
      </div>
      <div className="appointment-field">
        <label className="appointment-label">Time</label>
        <select
          {...register("time")}
          className="appointment-select"
        >
          <option value="">Select time</option>
          {(schedule[selectedDate] || []).map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {errors.time && (
          <span className="appointment-error">{errors.time?.message}</span>
        )}
      </div>
      <button type="submit" className="book-btn">
        Book Appointment
      </button>
    </form>
  );
}
