import React from "react";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Title */}
      
      {/* background*/}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
        {/* Main Content */}
        <HeroSection/>
        <AboutSection />
        <SkillSection />

        <ProjectSection />
    </div>
  );
};

export default Home;
