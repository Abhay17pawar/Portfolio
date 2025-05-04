import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Sabka Developer InfoTech",
    period: "Feb 2025 - Present",
    description: [
      "Developed a responsive web application using React for the frontend, enhancing user engagement and increasing session duration by 40%, leading to a 20% boost in client satisfaction.",
      "Built RESTful APIs using Node.js and Express, integrated PostgreSQL for efficient database management, and implemented JWT (jsonwebtoken) for secure authentication.",
      "Collaborated in code reviews and followed Agile methodologies, reducing bugs by 33% and improving development efficiency by 25%.",
    ],
    skills: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Agile"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "CRM Consultiqs",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Developed and maintained RESTful APIs for seamless integration between frontend and backend, ensuring efficient data exchange.",
      "Developed interactive, real-time dashboards in React, improving data presentation and user experience, resulting in an 80% increase in user interaction.",
      "Integrated Redis as a caching solution for high-traffic features, reducing application response times by up to 70% and enabling the handling of many user requests.",
      "Developed Cron jobs to automate data retrieval, increasing update efficiency by 25%.",
    ],
    skills: ["React", "RESTful APIs", "Redis", "Cron Jobs", "Dashboards"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4 md:ml-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-2 border-purple-500 bg-black"></div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm transform transition-all hover:translate-x-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-zinc-400 text-sm mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-purple-400">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-300 text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
