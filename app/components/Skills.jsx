"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaReact, FaUniversalAccess, FaBug } from "react-icons/fa";
import { BiNetworkChart, BiDevices } from "react-icons/bi";
import {  } from "react-icons/bi";

import { SiTailwindcss, SiNextdotjs,  } from "react-icons/si";
import { LiaRocketSolid } from "react-icons/lia";


const skillsData = [
   
    { id: "1", title: "React.js", icon: <FaReact className="h-6 w-6 text-blue-400" /> },
    { id: "2", title: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
    { id: "3", title: "JavaScript (ES6+)", icon: <FaJs className="h-6 w-6 text-yellow-500" /> },
    { id: "4", title: "HTML5", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
    { id: "5", title: "CSS3", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },

    { id: "6", title: "TailwindCSS", icon: <SiTailwindcss className="h-6 w-6 text-cyan-500" /> },
    { id: "7", title: "Responsive Design", icon: <BiDevices className="h-6 w-6 text-cyan-500" /> },
    { id: "8", title: "Figma to Code", icon: <FaReact className="h-6 w-6 text-purple-400" /> },
    { id: "9", title: "UI Debugging / Bug Fixing", icon: < FaBug className="h-6 w-6 text-red-400" /> },
    { id: "10", title: "Accessibility (a11y)", icon: <FaUniversalAccess className="h-6 w-6 text-green-400" /> },

    { id: "11", title: "Git", icon: <FaGitAlt className="h-6 w-6 text-red-500" /> },
    { id: "12", title: "GitHub", icon: <FaGithub className="h-6 w-6 text-white" /> },
    { id: "13", title: "API Integration", icon: <BiNetworkChart className="h-6 w-6 text-blue-400" /> },
    { id: "14", title: "Performance Optimization", icon: <LiaRocketSolid className="h-6 w-6 text-cyan-400" /> },
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
