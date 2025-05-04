import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "JobHub",
    description:
      "A job search platform that scrapes 100+ job listings, improving search efficiency. Features include automated email alerts and secure payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Puppeteer",
      "MongoDB",
      "Clerk",
      "Nodemailer",
      "Cron Jobs",
      "Razorpay",
    ],
  },
  {
    title: "MediScan",
    description:
      "An AI-powered tool that scans prescriptions using OCR and provides instant, easy-to-understand medication information with natural language processing.",
    image: "/images/mediscan.png",
    github: "https://github.com",
    technologies: ["Next.js", "FastAPI", "NeonDB", "OCR", "NLP"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 backdrop-blur-sm group hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-black/50 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-zinc-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-zinc-700 hover:border-white hover:bg-white/5">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
