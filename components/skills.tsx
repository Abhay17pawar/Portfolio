import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    name: "Concepts",
    skills: ["Data Structures and Algorithms", "OOP", "RESTful APIs", "Authentication"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
            >
              <h3 className="text-lg font-bold mb-4 text-purple-400">{category.name}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-none transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
