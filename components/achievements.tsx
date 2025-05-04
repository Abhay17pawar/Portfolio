import { Award, Code, Star } from "lucide-react"

const achievements = [
  {
    title: "Codeforces Pupil",
    description: "Achieved a max Codeforces rating of 1338 (Pupil)",
    link: "#",
    icon: Code,
  },
  {
    title: "HackerRank 6-Star",
    description: "Achieved 6-star rating in Problem Solving on HackerRank",
    link: "#",
    icon: Star,
  },
  {
    title: "Academic Excellence",
    description: "Maintaining a CGPA of 9.41 in Computer Engineering",
    link: "#",
    icon: Award,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm text-center hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
            >
              <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4">
                <achievement.icon className="h-6 w-6 text-purple-400" />
              </div>

              <h3 className="text-lg font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{achievement.description}</p>

              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
