import React from "react";
import { Code } from "lucide-react";
const AboutSection: React.FC = () => (
  <section id="about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Passionate web developer</h3>
        <p className="text-muted-foreground">
          With a keen eye for design and a love for crafting seamless user
          experiences, I specialize in building responsive and accessible web
          applications. My journey in web development has been fueled by a
          desire to create intuitive interfaces that not only look great but
          also function flawlessly across all devices.
        </p>

        <p className="text-muted-foreground">
          I thrive on challenges and enjoy learning new technologies to stay
          ahead in the ever-evolving web landscape. Whether it's optimizing
          performance, enhancing accessibility, or implementing the latest
          design trends, I am committed to delivering high-quality solutions
          that meet both user needs and business goals.
        </p>

        <div className="flex flex-col sm-flex-row gap-4 pt-4 justify-center">
          <a href="#contact" className="cosmic-button">
            Get in touch
          </a>

          <a
            href="#contact"
            className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 duration-200 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="relative gradient-border p-6">
          
          <div className="relative flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
        <div className="gradient-border p-6 card-hover"></div>
      </div>
    </div>
  </section>
);

export default AboutSection;
