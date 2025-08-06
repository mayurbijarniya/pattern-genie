"use client"

import { Github, Twitter } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  theme: "light" | "dark"
}

export default function Navbar({ theme }: NavbarProps) {
  const isPatternDark = theme === "dark"

  return (
    <nav className="w-full py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

        <span
          className={`flex items-center gap-[4px] sm:gap-[6px] font-bold tracking-tight transition-colors duration-300 text-base sm:text-lg md:text-xl ${isPatternDark ? "text-white" : "text-neutral-800 dark:text-neutral-200"
            }`}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 64 64" 
            fill="none" 
            className="flex-shrink-0 mt-[2px] h-6 w-6 sm:h-6 sm:w-6 select-none"
          >
            {/* Grid pattern (3x3) */}
            <g stroke="currentColor" strokeWidth="3">
              <rect x="8" y="8" width="48" height="48" rx="10" fill="none"/>
              <line x1="8" y1="24" x2="56" y2="24"/>
              <line x1="8" y1="40" x2="56" y2="40"/>
              <line x1="24" y1="8" x2="24" y2="56"/>
              <line x1="40" y1="8" x2="40" y2="56"/>
            </g>
            
            {/* Magic sparkle: filled square & shimmer */}
            <rect x="40" y="8" width="16" height="16" rx="5" fill="currentColor" opacity="0.22"/>
            <circle cx="48" cy="16" r="2" fill="currentColor"/>
          </svg>
          <span className="whitespace-nowrap">Pattern Genie</span>
        </span>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 sm:gap-4">
            <a
              href="https://twitter.com/mayurbijarniya"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 sm:p-2 transition-all duration-300 ${isPatternDark ? "hover:bg-white/10" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              aria-label="Twitter"
            >
              <Twitter
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 ${isPatternDark
                  ? "text-white hover:text-neutral-300"
                  : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  }`}
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://github.com/mayurbijarniya/pattern-genie"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-1.5 sm:p-2 transition-all duration-300 ${isPatternDark ? "hover:bg-white/10" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              aria-label="GitHub"
            >
              <Github
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 ${isPatternDark
                  ? "text-white hover:text-neutral-300"
                  : "text-neutral-800 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  }`}
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}