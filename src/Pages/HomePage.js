import React from "react";
import HeroSection from "../Sections/HeroSection";
import AboutMeSection from "../Sections/AboutMeSection";
import ProjectsSection from "../Sections/ProjectsSection";
import TeachingSection from "../Sections/TeachingSection";
import ContactSection from "../Sections/ContactSection";
import Footer from "../Sections/Footer";

export default function HomePage() {
    return(
        <div>
        <HeroSection/>
        <AboutMeSection/> 
        <ProjectsSection/> 
        <TeachingSection/>
        <ContactSection/>
        <Footer/> 
        </div>
    );
}