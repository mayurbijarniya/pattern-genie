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
            viewBox="0 0 24 24" 
            fill="none" 
            className="flex-shrink-0 mt-[2px] h-6 w-6 sm:h-6 sm:w-6 select-none"
          >
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M20 18C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M11 22C12.1046 22 13 21.1046 13 20C13 18.8954 12.1046 18 11 18C9.89543 18 9 18.8954 9 20C9 21.1046 9.89543 22 11 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M15 6C16.1046 6 17 5.10457 17 4C17 2.89543 16.1046 2 15 2C13.8954 2 13 2.89543 13 4C13 5.10457 13.8954 6 15 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M14.2983 5.87309L12.7032 10.1268M13.1207 4.68359L5.88086 7.31625M11.7527 13.9847L11.2489 18.0152M13.79 12.8945L18.2115 15.1053M18.1727 16.8124L12.8288 19.1874" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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
              href="https://github.com/mayurbijarniya"
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