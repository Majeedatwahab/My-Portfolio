import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Building Responsive Card Layouts with HTML & CSS Flexbox",
            excerpt: "Learn how to create flexible, responsive card layouts using HTML and CSS Flexbox for a modern UI experience.",
            image: "/assets/responsive-cards.png",
            date: "December 18, 2024",
            readTime: "6 min read",
            category: "CSS & Layouts",
            link: "https://dev.to/majeedatwahab/building-responsive-card-layouts-with-html-and-css-flexbox-163j",
        },
        {
            id: 2,
            title: "CSS Is not Hard! You're Just Missing These Basics",
            excerpt: "Unlock the true power of CSS by understanding core concepts that make styling easier and more intuitive.",
            image: "/assets/css-article.png",
            date: "November 20, 2024",
            readTime: "8 min read",
            category: "CSS Fundamentals",
            link: "https://dev.to/majeedatwahab/css-is-not-hardyoure-just-missing-these-basics-1o53",
        },
        {
            id: 3,
            title: "5 Free Resources to Learn Frontend Development",
            excerpt: "Kickstart your frontend development journey with these five amazing free resources, handpicked for beginners.",
            image: "/assets/free-resources.png",
            date: "January 8, 2025",
            readTime: "5 min read",
            category: "Frontend Learning",
            link: "https://dev.to/majeedatwahab/5-free-resources-to-learn-frontend-development-2494",
        },
    ]

    return (
        <section id="blog" className="py-20 bg-black/90 relative">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">POPULAR ARTICLES</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Insights, tutorials, and expert takes on frontend development, cutting-edge design trends, and the latest technologies I am exploring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <Badge className="absolute top-4 left-4 bg-purple-500 hover:bg-purple-600">{post.category}</Badge>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-400 mb-3">
                                    <span className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        {post.date}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white">
                                    <Link href={post.link} className="hover:text-purple-400 transition-colors" target="_blank" >
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>

                                <Link
                                    href={post.link}
                                    target="_blank" 
                                    className="text-purple-400 font-medium flex items-center hover:text-purple-300 transition-colors mt-auto"
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20 px-8 text-black hover:text-white" asChild>
                        <Link href="https://dev.to/majeedatwahab" target="_blank">
                            View All Articles
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

