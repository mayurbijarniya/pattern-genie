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
      // Check if pattern has dark characteristics
      const background = activePatternObj.style.background || activePatternObj.style.backgroundColor || "";
      const isDark =
        activePatternObj.id.includes("dark") ||
        activePatternObj.id.includes("deep") ||
        (typeof background === "string" &&
          (background.includes("#0") ||
            background.includes("#1") ||
            background.includes("rgba(0,") ||
            background.includes("rgba(1,") ||
            background.includes("#164e63") ||
            background.includes("#0e7490")));

      setTheme(isDark ? "dark" : "light");
    } else {
      setTheme("light");
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