"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-500">Abhay Pawar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-300 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Passionate about building innovative web applications and solving complex problems with clean, efficient
            code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="border-zinc-700 hover:border-white hover:bg-white/5">
              <Link href="#experience" className="flex items-center gap-2">
                View Experience
              </Link>
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="#projects" className="flex items-center gap-2">
                Explore Projects
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/abhay17pawar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:abhaypawar0817@gmail.com"
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
