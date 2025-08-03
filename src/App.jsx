import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import AppointmentPage from "./pages/AppointmentPage";
import BookedAppointmentsPage from "./pages/BookedAppointmentsPage";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/book/:id" element={<AppointmentPage />} />
          <Route path="/appointments" element={<BookedAppointmentsPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
