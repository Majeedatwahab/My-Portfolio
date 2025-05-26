"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaReact, } from "react-icons/fa";

import { SiTailwindcss, SiShadcnui, SiTypescript, SiNextdotjs, SiCypress, SiJest, SiChartdotjs, SiSupabase, SiFirebase, SiRedux } from "react-icons/si";

const skillsData = [
    { id: "1", title: "HTML5", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
    { id: "2", title: "CSS3", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },
    { id: "3", title: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-500" /> },
    { id: "4", title: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-600" /> },
    { id: "5", title: "React.js", icon: <FaReact className="h-6 w-6 text-blue-400" /> },
    { id: "6", title: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
    { id: "7", title: "TailwindCSS", icon: <SiTailwindcss className="h-6 w-6 text-cyan-500" /> },
    { id: "8", title: "Shadcn", icon: <SiShadcnui className="h-6 w-6 text-teal-400" /> },
    { id: "9", title: "Git", icon: <FaGitAlt className="h-6 w-6 text-red-500" /> },
    { id: "10", title: "GitHub", icon: <FaGithub className="h-6 w-6 text-white" /> },
    { id: "11", title: "Jest", icon: <SiJest className="h-6 w-6 text-red-500" /> },
    { id: "12", title: "Cypress", icon: <SiCypress className="h-6 w-6 text-green-500" /> },
    { id: "13", title: "Chart.js", icon: <SiChartdotjs className="h-6 w-6 text-pink-500" /> },
    { id: "14", title: "Firebase", icon: <SiFirebase className="h-6 w-6 text-yellow-400" /> },
    { id: "15", title: "Supabase", icon: <SiSupabase className="h-6 w-6 text-green-400" /> },
    { id: "16", title: "Redux", icon: <SiRedux className="h-6 w-6 text-purple-400" /> },
    
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">MY SKILLS</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A well-rounded skill set with a strong focus on frontend development.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center gap-4">
                            {skill.icon}
                            <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
