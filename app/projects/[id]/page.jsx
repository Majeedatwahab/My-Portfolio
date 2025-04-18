"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const projects = [
    {
        id: 1,
        title: "Furniro",
        description: "A modern eCommerce website for furniture shopping.",
        image: "/assets/furniro-website.png",
        fullDescription:
            "Furniro is a sleek and user-friendly eCommerce platform built with performance and design in mind.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://furniro-ecommerce-website.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/Furniro-Ecommerce-Website",
        purpose: "To create a clean, responsive furniture store with smooth user experience and product display.",
        features: "Shopping cart, product listing, responsive layout, product filtering.",
        TechnicalHurdles: "Handling responsive layout and state management for the cart.",
        LessonsLearned: "Gained hands-on experience with grid systems and dynamic routing in Next.js.",
    },
    {
        id: 2,
        title: "Chatter",
        description: "A blogging website for content creators.",
        image: "/assets/chatter-maeuve.jpeg",
        fullDescription:
            "Chatter is a modern blogging platform where users can read, write, and share posts on various topics.",
        technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
        demoUrl: "https://chatter-mauve-six.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/chatter",
        purpose: "To allow users to express themselves through blogs in an easy-to-use platform.",
        features: "Authentication, post creation/editing, blog feed, category filtering.",
        TechnicalHurdles: "Integrating Firebase authentication and data structure planning.",
        LessonsLearned: "Gained confidence in Firebase integration and managing app state with dynamic content.",
    },
    {
        id: 3,
        title: "AI Learning Companion",
        description: "An AI-powered learning assistant for interactive education.",
        image: "/assets/ai-learning-companion.png",
        fullDescription:
            "AI Learning Companion provides interactive learning via AI-powered conversations and dynamic learning cards.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI Chatbot", "Gemini AI API"],
        demoUrl: "https://my-vercel-ai-chatbot.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/ai-learning-companion",
        purpose: "To help learners study more interactively using an AI-powered chatbot.",
        features: "AI chatbot, topic-based learning cards, overview/concepts/explore sections, carousel UI.",
        TechnicalHurdles: "Making AI responses work within a structured UI and managing user input logic.",
        LessonsLearned: "Deepened my understanding of conversational UI and using generative AI in web apps.",
    },
    {
        id: 4,
        title: "Bean-Scene Coffee Landing Page",
        description: "A sleek and modern coffee shop landing page designed to attract customers with an inviting UI and seamless navigation.",
        image: "/assets/cafe-landing-page.png",
        fullDescription:
            "This landing page was built to promote a coffee shop’s online presence and drive in-store visits.",
        technologies: ["React", "Tailwind CSS"],
        demoUrl: "https://bean-scene-coffee-landing-page.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/bean-scene-coffee-landing-page",
        purpose: "To design a visually pleasing landing page that showcases the vibe of a modern coffee shop.",
        features: "Hero section, smooth scrolling, menu preview, call-to-action buttons.",
        TechnicalHurdles: "Perfecting the layout for both mobile and large screens.",
        LessonsLearned: "Practiced modern UI/UX design techniques using Tailwind CSS.",
    },
    {
        id: 5,
        title: "Drift Aura Sportscar Website",
        description: "A visually stunning sports car showcase website featuring high-performance vehicles and immersive user experience.",
        image: "/assets/drift-aura.png", 
        fullDescription:
            "Drift Aura is a sleek landing page showcasing the power and beauty of sports cars.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://drift-aura-car-site.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/drift-aura-sports-cars",
        purpose: "To practice building visually-rich hero sections and showcase animations and transitions.",
        features: "Full-page hero, image/video backgrounds, car feature sections, 'Buy Now' call to action.",
        TechnicalHurdles: "Handling video integration and optimizing performance on load.",
        LessonsLearned: "Learned how to structure media-heavy pages for performance and impact.",
    },
    {
        "id": 6,
        "title": "Virtual Health Assistant Dashboard",
        "description": "A virtual assistant dashboard designed to help healthcare professionals manage patient data, appointments, and treatment schedules efficiently.",
        "image": "/assets/medical-dashboard.png",
        "fullDescription": "The Medical Virtual Assistant is a comprehensive dashboard that streamlines healthcare management tasks. It enables healthcare providers to easily track patient data, schedule appointments, and access important medical records. The assistant’s intuitive design ensures a smooth and efficient workflow for users, with real-time notifications and interactive features that enhance user experience. Please note that this project is a UI recreation and is not fully functional at the moment.",
        "technologies": ["React", "Chart.js", "Tailwind CSS"],
        "demoUrl": "https://medical-dashboard-web.netlify.app/",
        "githubUrl": "https://github.com/Majeedatwahab/medical-dashboard",
        "purpose": "To create a tool for healthcare professionals to streamline patient management and improve workflow efficiency. The project focuses on UI design and layout rather than full functionality.",
        "features": "Patient data management, appointment scheduling, treatment plan tracking, real-time notifications, interactive charts for patient statistics.",
        "TechnicalHurdles": "Integrating real-time data updates and ensuring smooth performance across all features.",
        "LessonsLearned": "Gained experience in building complex, data-driven dashboards and optimizing user experience for healthcare environments."
    }


];

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
     
        return <div className="text-center text-white py-20 text-2xl">🚧 Project not found.</div>;
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className=" flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                    >
                        MJ.DEV
                    </Link>
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-cyan-600 shadow-md text-white">
                        <Link href="/#projects">
                            ← Back to Projects
                        </Link>
                    </Button>
                </div>

                <h1 className="text-5xl font-extrabold my-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    {project.title}
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-2xl" />

                    </div>

                    <div>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    className="bg-purple-700/20 text-purple-200 border border-purple-600/30"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                            {project.fullDescription}
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg hover:from-purple-700 hover:to-cyan-700"
                            >
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt className="mr-2" />
                                    Live Demo
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-purple-500 hover:bg-purple-500/20 text-black hover:text-white"
                            >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2" />
                                    View Code
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-12">
                    {[
                        { label: "Purpose", value: project.purpose },
                        { label: "Features", value: project.features },
                        { label: "Technical Hurdles", value: project.TechnicalHurdles },
                        { label: "Lessons Learned", value: project.LessonsLearned },
                    ].map((section) => (
                        section.value && (
                            <div key={section.label} className="bg-white/5 p-6 rounded-xl border border-purple-800/20 shadow-md">
                                <h2 className="text-2xl font-semibold mb-2 text-purple-300">
                                    {section.label}
                                </h2>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {section.value}
                                </p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
