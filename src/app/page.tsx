"use client";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PatternShowcase from "./components/pattern-showcase";
import SupportDropdown from "./components/support-dropdown";
import ReturnPreview from "./components/return-preview";
import { useState, useEffect } from "react";
import { wavePatterns } from "./utils/patterns";

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Find the active pattern object
  const activePatternObj = activePattern
    ? wavePatterns.find((p) => p.id === activePattern)
    : null;

  // Update theme based on pattern background color
  useEffect(() => {
    if (activePatternObj) {
      const background = activePatternObj.style.background || activePatternObj.style.backgroundColor || "";
      const backgroundImage = activePatternObj.style.backgroundImage || "";
      
      // Check for dark pattern characteristics
      const isDark = 
        // Dark keywords in ID
        activePatternObj.id.includes("dark") ||
        activePatternObj.id.includes("deep") ||
        activePatternObj.id.includes("midnight") ||
        activePatternObj.id.includes("black") ||
        activePatternObj.id.includes("night") ||
        // Dark colors in background
        (typeof background === "string" && (
          background.includes("#0") ||
          background.includes("#1") ||
          background.includes("#2") ||
          background.includes("rgba(0,") ||
          background.includes("rgba(1,") ||
          background.includes("rgba(2,") ||
          background.includes("#164e63") ||
          background.includes("#0e7490") ||
          background.includes("#1e1b4b") ||
          background.includes("#1e3a8a") ||
          background.includes("#082f49") ||
          background.includes("#0f172a")
        )) ||
        // Dark colors in background image
        (typeof backgroundImage === "string" && (
          backgroundImage.includes("%23000") ||
          backgroundImage.includes("%230") ||
          backgroundImage.includes("%231") ||
          backgroundImage.includes("%232")
        ));

      setTheme(isDark ? "dark" : "light");
      
      // Apply theme to document root for global styling
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [activePattern, activePatternObj]);

  return (
    <>
      <div className="min-h-screen relative">
        {/* Apply the active pattern as background */}
        {activePatternObj && (
          <div 
            className="fixed inset-0 z-0" 
            style={activePatternObj.style}
            aria-hidden="true"
          />
        )}
        
        <div className="relative z-10">
          <Navbar theme={theme} />
          
          <main>
            <Hero
              activePattern={activePattern}
              setActivePattern={setActivePattern}
              theme={theme}
            />
            
            <PatternShowcase
              activePattern={activePattern}
              setActivePattern={setActivePattern}
              theme={theme}
            />
          </main>
          
          <Footer theme={theme} />
        </div>

        {/* Floating UI Elements */}
        <SupportDropdown theme={theme} />
        <ReturnPreview 
          theme={theme} 
          activePattern={activePattern}
          onReset={() => setActivePattern(null)}
        />
      </div>
    </>
  );
}