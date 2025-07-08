import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
//className="w-full h-full object-cover transition-transform duration-500"
const projects = [
    {
        id: 1,
        title: "Spotify Clone",
        description:
            "A Spotify clone built with Plain JavaScript, Vanilla CSS, and HTML. It features a responsive design, music playback, and a user-friendly interface.",
        imageMobile: "/projects/spotify-clone.jpg", // <-- Remove "public" from the path
        imageDesktop:"/projects/spotify-cloneD.png",
        tags: ["JavaScript", "CSS", "HTML"],
        demoUrl: "https://syed-hermain.github.io/Spotify-Clone/",
        githubUrl: "https://github.com/Syed-Hermain/Spotify-Clone",
    },
    {
        id: 2,
        title: "Twitter Clone",
        description:
            "A Twitter Clone which has dynamic interface, and adjusts to various screen. It allows us to Tweet. Although a backend is still in production, the seamless UI gives a smooth user experience",
        imageMobile:"/projects/twitter-cloneM.png",
            imageDesktop: "/projects/twitter-clone.png",
        tags: ["React", "Supabase", "TypeScript"],
        demoUrl: "https://social-media-flame-gamma.vercel.app/",
        githubUrl: "https://github.com/Syed-Hermain/Social-Media/tree/main",
    },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 rounded-lg shadow-md overflow-hidden flex flex-col card-hover"
            >
              <img
                src={project.imageDesktop}
                alt={project.title}
                className="hidden sm:block w-full h-auto object-cover transition-transform duration-500"
              />
              <img
                src={project.imageMobile}
                alt={project.title}
                className="block sm:hidden w-full h-auto object-cover transition-transform duration-500"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 flex-1">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <div className="mt-auto flex space-x-4 items-center mr-3.5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Syed-Hermain"
          className="cosmic-button flex items-center space-x-2"
        >
          <span>Check My Github</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
