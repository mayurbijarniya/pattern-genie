"use client";

import { Button } from "@/components/ui/button";
import { Waves, Github, Heart } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme: _theme }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Pattern Wave</h1>
              <p className="text-xs text-muted-foreground">Beautiful backgrounds</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/mayurbijarniya/pattern-wave", "_blank")}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/sponsors/mayurbijarniya", "_blank")}
            >
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              Sponsor
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}