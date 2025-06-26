const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A modern SaaS landing page built with React and Tailwind CSS, featuring a responsive design and interactive elements.",
        image: "https://via.placeholder.com/300",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/repo"
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "An e-commerce website built with Next.js and MongoDB, featuring product listings, a shopping cart, and user authentication.",
        image: "https://via.placeholder.com/300",
        tags: ["Next.js", "MongoDB", "JavaScript"],
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/repo"
    }
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
                        <div key={project.id} className="bg-white/5 rounded-lg shadow-md overflow-hidden flex flex-col card-hover">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
                                <div className="mt-auto flex space-x-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cosmic-button"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;