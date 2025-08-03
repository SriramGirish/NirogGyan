import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";

export default function DoctorProfilePage() {
  const { doctors } = useContext(AppContext);
  const { id } = useParams();
  const doc = doctors.find(d => d.id === id);

  if (!doc)
    return (
      <div style={{padding:40, textAlign:"center", color:"red", fontWeight:700}}>
        Doctor not found.
      </div>
    );

  return (
    <div>
      <div className="profile-page-main">
        <div className="profile-title">{doc.name}</div>
        <div className="profile-spec">{doc.specialization}</div>
        <div className="profile-bio">{doc.bio}</div>
        <div className="profile-availability-title">Availability</div>
        <ul className="profile-availability-list">
          {Object.entries(doc.schedule).map(([date, slots]) => (
            <li className="profile-availability-item" key={date}>
              <span style={{fontWeight:600}}>{date}:</span> <span style={{fontFamily:"monospace"}}>{slots.join(", ")}</span>
            </li>
          ))}
        </ul>
        <Link
          to={`/book/${doc.id}`}
          className="profile-book-btn"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
