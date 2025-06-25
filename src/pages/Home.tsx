import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Title */}
      <ThemeToggle />
      {/* background*/}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
        {/* Main Content */}
        
    </div>
  );
};

export default Home;
