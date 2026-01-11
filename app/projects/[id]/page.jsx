"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const projects = [
    {
        "id": 1,
        "title": "Codext SaaS Landing Page",
        "description": "A sleek and modern SaaS landing page designed to showcase Codext's software solutions with an engaging UI and seamless navigation.",
        "image": "/assets/saas-landing.png",
        "fullDescription": "This landing page was built to highlight Codext's software solutions, helping teams understand its features, pricing, and value proposition in a visually appealing and user-friendly way.",
        "technologies": ["React", "Next.js", "Tailwind CSS"],
        "demoUrl": "https://codext-saas-landing-page.vercel.app/",
        "githubUrl": "https://github.com/Majeedatwahab/codext-saas-landing-page",
        "purpose": [
            "Showcase Codext's software solutions effectively.",
            "Provide a clear and modern UI to engage potential customers.",
            "Highlight services, pricing, testimonials, and blog content."
        ],
        "features": [
            "Hero section with engaging headline and CTA",
            "Smooth scrolling interactions for all sections",
            "Service highlights with intuitive layout",
            "Pricing tables and testimonial sections",
            "Responsive design optimized for all devices",
            "Clear call-to-action buttons throughout the page"
        ],
        "TechnicalHurdles": [
            "Creating a responsive layout that works seamlessly across devices",
            "Optimizing performance while using high-quality images and animations",
            "Ensuring smooth scrolling and section linking in a SPA environment"
        ],
        "LessonsLearned": [
            "Improved structuring of React components and Tailwind styling",
            "Enhanced understanding of responsive design for SaaS applications",
            "Learned how to integrate smooth scrolling and section linking in Next.js",
            "Gained experience designing professional SaaS landing pages"
        ]
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
        purpose: ["Provide a platform for content creators to share ideas."],
        features: [
            "Authentication system",
            "Post creation and editing",
            "Category filtering",
            "Dynamic blog feed",
        ],
        TechnicalHurdles: [
            "Firebase authentication integration",
            "Structuring Firestore data",
        ],
        LessonsLearned: [
            "Handling dynamic content with Firebase",
            "Confidence in building full auth flows",
        ],
    },

    {
        id: 3,
        title: "GitHub User Search",
        description: "A responsive web app that allows users to search GitHub profiles and view detailed information.",
        image: "/assets/github-user-search.png",
        fullDescription:
            "Users can enter a GitHub username and instantly view real-time profile details.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub API"],
        demoUrl: "https://github-user-search-xi-orcin.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/github-user-search",
        purpose: ["Practice API integration and responsive UI design."],
        features: [
            "Search GitHub users",
            "Real-time API data",
            "Repository and follower details",
            "Mobile-first responsive layout",
        ],
        TechnicalHurdles: [
            "Managing GitHub API rate limits",
            "Handling invalid usernames gracefully",
        ],
        LessonsLearned: [
            "Improved async data handling",
            "Better TypeScript API structures",
        ],
    },

    {
        id: 4,
        title: "Drift Aura Sportscar Website",
        description: "A visually stunning sports car showcase website.",
        image: "/assets/drift-aura.png",
        fullDescription:
            "A sleek landing page showcasing the power and beauty of sports cars.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoUrl: "https://drift-aura-car-site.vercel.app/",
        githubUrl: "https://github.com/Majeedatwahab/drift-aura-sports-cars",
        purpose: ["Practice video integration & stunning hero sections."],
        features: [
            "Full-page hero section",
            "Animated transitions",
            "Car feature sections",
            "'Buy Now' CTA design",
        ],
        TechnicalHurdles: [
            "Handling heavy media assets",
            "Optimizing page load performance",
        ],
        LessonsLearned: [
            "Structuring media-heavy pages",
            "Enhancing user experience with visual elements",
        ],
    },
];

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="text-center text-white py-20 text-2xl">
                🚧 Project not found.
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                    >
                        MJ.DEV
                    </Link>

                    <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 shadow-md text-white"
                    >
                        <Link href="/#projects">← Back to Projects</Link>
                    </Button>
                </div>

                {/* TITLE */}
                <h1 className="text-5xl font-extrabold my-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    {project.title}
                </h1>

                {/* IMAGE + DESCRIPTION */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        {/* TECH BADGES */}
                        <div className="flex flex-wrap gap-3 mb-6">
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

                {/* DYNAMIC SECTIONS */}
                <div className="grid gap-12">
                    {[
                        { label: "Purpose", value: project.purpose },
                        { label: "Features", value: project.features },
                        { label: "Technical Hurdles", value: project.TechnicalHurdles },
                        { label: "Lessons Learned", value: project.LessonsLearned },
                    ].map(
                        (section) =>
                            section.value && (
                                <div
                                    key={section.label}
                                    className="bg-white/5 p-6 rounded-xl border border-purple-800/20 shadow-md"
                                >
                                    <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                                        {section.label}
                                    </h2>

                                    {Array.isArray(section.value) ? (
                                        <ul className="space-y-2 text-gray-300">
                                            {section.value.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <FaChevronRight className="text-purple-400 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-300">{section.value}</p>
                                    )}
                                </div>
                            )
                    )}
                </div>
            </div>
        </section>
    );
}
