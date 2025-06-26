import React, { useState } from "react";

type SkillCategory = "Frontend" | "Backend" | "Tools";
type Skill = {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    category: SkillCategory;
    percentage: number;
};

const skills: Skill[] = [
    { name: "TypeScript", level: "Advanced", category: "Frontend", percentage: 90 },
    { name: "React", level: "Advanced", category: "Frontend", percentage: 92 },
    { name: "JavaScript", level: "Advanced", category: "Frontend", percentage: 95 },
    { name: "Node.js", level: "Intermediate", category: "Backend", percentage: 75 },
    { name: "Tailwind CSS", level: "Intermediate", category: "Frontend", percentage: 80 },
    { name: "HTML5", level: "Advanced", category: "Frontend", percentage: 98 },
    { name: "CSS3", level: "Advanced", category: "Frontend", percentage: 90 },
    { name: "Git", level: "Intermediate", category: "Tools", percentage: 70 },
];

const categories = ["All", "Frontend", "Backend", "Tools"] as const;
type CategoryType = typeof categories[number];

const SkillSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

    const filteredSkills =
        activeCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section className="py-12">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${
                                activeCategory === cat
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                            }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredSkills.map((skill) => (
                        <li
                            key={skill.name}
                            className="bg-card flex flex-col gap-2 p-4 rounded-lg shadow-xs card-hover"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium">{skill.name}</span>
                                <span className="text-sm text-gray-600">{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-primary h-3 rounded-full transition-all duration-300"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                            <span className="text-xs text-gray-500 text-right">{skill.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SkillSection;