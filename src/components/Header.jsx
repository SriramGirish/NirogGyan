import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-title">
          Nirog<span className="accent">Gyan</span>
        </Link>
        <div className="header-links">
          <Link to="/" className={`header-link${pathname === "/" ? " selected" : ""}`}>Find Doctors</Link>
          <Link to="/appointments" className={`header-link${pathname === "/appointments" ? " selected" : ""}`}>My Appointments</Link>
        </div>
      </nav>
    </header>
  );
}
