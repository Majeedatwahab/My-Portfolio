"use client"
import { useState, useRef } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
    const [state, handleSubmit] = useForm("mayrjpkz")
    const [successMessage, setSuccessMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit(event)
        if (state.succeeded) {
            setSuccessMessage("Thanks for reaching out! I'll get back to you soon.")
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return (
        <section id="contact" className="py-20 bg-black relative">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">GET IN TOUCH</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? I'm always open to new ideas and collaborations.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {successMessage && (
                        <p className="text-green-500 text-center mb-4 font-semibold">{successMessage}</p>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Jane Doe"
                                    required
                                    className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="janedoe@example.com"
                                    required
                                    className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message"
                                required
                                className="min-h-[150px] bg-gray-800/50 border-gray-700 focus:border-purple-500"
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <Button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 py-6"
                        >
                            {state.submitting ? (
                                <span className="flex items-center">
                                    <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </span>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
