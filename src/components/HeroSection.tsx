import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm{" "}
          <span className="text-yellow-300 opacity-0 animate-fade-in">
            Your Name
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-2xl mx--auto opacity-0 animate-fade-in-delay-3">
          A passionate <span className="font-semibold">Frontend Developer</span>{" "}
          crafting beautiful and performant web experiences.
        </p>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-sm text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};

export default HeroSection;
