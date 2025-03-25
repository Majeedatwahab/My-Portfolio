"use client"

import React, { useState } from "react";
import { Code, Palette, Database, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    const skillCategories = {
        frontend: {
            icon: <Code className="h-5 w-5" />,
            title: "Frontend Development",
            description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
            skills: [
                { name: "HTML5/CSS3", level: 95 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "React.js", level: 92 },
                { name: "Next.js", level: 92 },
                { name: "TypeScript", level: 70 },
                { name: "Tailwind CSS", level: 90 },
            ],
        },
        design: {
            icon: <Palette className="h-5 w-5" />,
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing user experiences with attention to detail.",
            skills: [
                { name: "Figma", level: 25 },
                { name: "Responsive Design", level: 92 },
            ],
        },
        backend: {
            icon: <Database className="h-5 w-5" />,
            title: "Backend Knowledge",
            description: "Working with APIs, databases, and server-side technologies to build full-stack applications.",
            skills: [
                { name: "Supabase", level: 80 },
                { name: "Firebase", level: 80 },
            ],
        },
        tools: {
            icon: <Workflow className="h-5 w-5" />,
            title: "Tools & Workflow",
            description: "Utilizing modern development tools and practices for efficient and collaborative work.",
            skills: [
                { name: "Git/GitHub", level: 90 },
                { name: "Webpack/Vite", level: 85 },
                { name: "Jest/Testing Library", level: 75 },
                { name: "CI/CD", level: 70 },
                { name: "Agile/Scrum", level: 70 },
                { name: "Performance Optimization", level: 82 },
                { name: "Debugging", level: 75 },
               
            ],
        },
    };

    return (
        <section id="skills" className="py-20 bg-black/90 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">MY SKILLS</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I've developed a diverse set of skills over the years, focusing on frontend development while maintaining
                        knowledge in related areas to deliver complete solutions.
                    </p>
                </div>
                <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className=" mx-auto bg-gray-800 p-2 rounded-full  max-w-md ">
                       
                        {Object.entries(skillCategories).map(([key, category]) => (
                            <TabsTrigger
                                key={key}
                                value={key}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium",
                                    activeTab === key
                                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                                )}
                            >
                                {category.icon}
                                <span>{category.title.split(" ")[0]}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <TabsContent key={key} value={key} className="mt-8 space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                <p className="text-gray-400 max-w-lg mx-auto">{category.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-white">{skill.name}</span>
                                            <span className="text-purple-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
