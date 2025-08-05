"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Copy, Eye, Palette } from "lucide-react";

interface HeroProps {
  activePattern: string | null;
  setActivePattern: (id: string | null) => void;
  theme: "light" | "dark";
}

export default function Hero({ activePattern, setActivePattern, theme: _theme }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <Badge variant="secondary" className="mx-auto">
          <Palette className="h-3 w-3 mr-1" />
          100+ Premium Patterns
        </Badge>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Beautiful Background
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Patterns & Waves
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create stunning websites with our curated collection of modern CSS background patterns. 
            Copy, paste, and watch your designs come to life with wave-inspired beauty.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="min-w-[200px]"
            onClick={() => {
              const showcase = document.getElementById('pattern-showcase');
              showcase?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            Browse Patterns
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setActivePattern(null)}
          >
            <ArrowDown className="h-4 w-4 mr-2" />
            Reset Preview
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">100+</div>
            <div className="text-sm text-muted-foreground">Patterns</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">4</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>

        {/* Current Pattern Display */}
        {activePattern && (
          <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Currently Previewing</p>
                <p className="font-medium text-foreground">{activePattern}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActivePattern(null)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}