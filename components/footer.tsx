import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#" className="text-xl font-bold tracking-tighter">
              <span className="text-white">Abhay</span>
              <span className="text-purple-500">Pawar</span>
            </Link>
          </div>

          <div className="flex items-center text-zinc-400 text-sm">
            <p>© {new Date().getFullYear()} Abhay Pawar. All rights reserved.</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center text-zinc-400 text-sm">
            <p className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Abhay Pawar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
