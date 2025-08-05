"use client";

import { Waves, Github, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  theme: "light" | "dark";
}

export default function Footer({ theme: _theme }: FooterProps) {
  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Waves className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Pattern Wave</h3>
                <p className="text-sm text-muted-foreground">Beautiful backgrounds for modern web</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Create stunning websites with our curated collection of modern CSS background patterns 
              and wave-inspired designs. Perfect for developers and designers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#patterns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Browse Patterns
                </a>
              </li>
              <li>
                <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="text-muted-foreground hover:text-foreground transition-colors">
                  How to Use
                </a>
              </li>
              <li>
                <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => window.open("https://github.com/mayurbijarniya/pattern-wave", "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => window.open("https://twitter.com/mayurbijarniya", "_blank")}
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-red-500 hover:text-red-600"
                onClick={() => window.open("https://github.com/sponsors/mayurbijarniya", "_blank")}
              >
                <Heart className="h-4 w-4 mr-2" />
                Sponsor
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Pattern Wave. Built with 💙 by Mayur Bijarniya
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}