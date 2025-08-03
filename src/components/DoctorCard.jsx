import React from "react";
import { Link } from "react-router-dom";
import AvailabilityBadge from "./AvailabilityBadge";

export default function DoctorCard({ doc }) {
  return (
    <div className="doctor-card">
      <h3 className="doctor-card-name">{doc.name}</h3>
      <p className="doctor-card-specialization">{doc.specialization}</p>
      <div className="doctor-card-availability">
        <AvailabilityBadge status={doc.status} />
      </div>
      <Link
        to={`/doctor/${doc.id}`}
        className="doctor-card-profile-link"
      >
        View Profile
      </Link>
    </div>
  );
}
