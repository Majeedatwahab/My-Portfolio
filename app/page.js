import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </main>
      </div>
  )
}
