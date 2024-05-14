import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Hero from "./Components/Hero";
import PortfolioSection from "./Components/Portfolio";
import ContactSection from "./Components/ContactSection";
import EmploymentSection from "./Components/EmploymentHistory";
import Footer from "./Components/Footer";
import VolunteerSection from "./Components/VolunteerWork";

function App() {
  return (
    <div className="App">
      <Hero />
      <PortfolioSection />
      <EmploymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
