import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AppointmentForm from "../components/AppointmentForm";
import { useParams } from "react-router-dom";

export default function AppointmentPage() {
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
    <div style={{minHeight: "100vh", background: "none", display:"flex",alignItems:"center",justifyContent:"center",padding: "36px 0"}}>
      <div style={{width:"100%", maxWidth:580}}>
        <div style={{fontSize:"2rem", fontWeight:"bold", marginBottom:16, color:"#2563eb", textAlign:"center"}}>
          Book with {doc.name}
        </div>
        <AppointmentForm schedule={doc.schedule} />
      </div>
    </div>
  );
}
