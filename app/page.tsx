import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <Link href="#about" className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-zinc-400 hover:text-white transition-colors" />
          </Link>
        </div>
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm">
              <p className="text-zinc-300 leading-relaxed">
                A dynamic and goal-oriented individual with a deep passion for problem-solving and a strong desire to
                gain hands-on experience across multiple areas of the software industry. Currently pursuing B.E. in
                Computer Engineering at Army Institute Of Technology, Pune.
              </p>
            </div>
          </div>
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
