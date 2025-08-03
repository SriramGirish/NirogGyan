import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import DoctorCard from "../components/DoctorCard";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";

export default function LandingPage() {
  const { doctors } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const { state } = useLocation();

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", padding: "44px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {state?.message && (
          <div style={{
            marginBottom: 20,
            padding: 13,
            borderRadius: 11,
            background: "#d3fbde",
            color: "#199855",
            fontWeight: "bold",
            textAlign: "center"
          }}>
            {state.message}
          </div>
        )}
        <SearchBar query={query} setQuery={setQuery} />
        <div className="doctor-card-grid">
          {filtered.map(doc => <DoctorCard key={doc.id} doc={doc} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#a0aec0", marginTop: 32 }}>
            No doctors found.
          </div>
        )}
      </div>
    </div>
  );
}
