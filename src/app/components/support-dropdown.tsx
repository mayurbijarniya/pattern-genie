"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Coffee, Star, Bug, MessageCircle } from "lucide-react";
import { useState } from "react";

interface SupportDropdownProps {
  theme: "light" | "dark";
}

export default function SupportDropdown({ theme: _theme }: SupportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const supportOptions = [
    {
      icon: Star,
      title: "Star on GitHub",
      description: "Help us grow by starring the repository",
      action: () => window.open("https://github.com/mayurbijarniya/pattern-wave", "_blank")
    },
    {
      icon: Coffee,
      title: "Buy me a coffee",
      description: "Support the project development",
      action: () => window.open("https://github.com/sponsors/mayurbijarniya", "_blank")
    },
    {
      icon: Bug,
      title: "Report a bug",
      description: "Found an issue? Let us know",
      action: () => window.open("https://github.com/mayurbijarniya/pattern-wave/issues", "_blank")
    },
    {
      icon: MessageCircle,
      title: "Feedback",
      description: "Share your thoughts and suggestions",
      action: () => window.open("https://github.com/mayurbijarniya/pattern-wave/discussions", "_blank")
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Support Options */}
      {isOpen && (
        <div className="mb-4 bg-card border border-border rounded-lg shadow-lg p-4 w-64">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Support Pattern Wave</h3>
              <Badge variant="secondary">❤️</Badge>
            </div>
            
            {supportOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="w-full flex items-start space-x-3 p-2 rounded-md hover:bg-accent transition-colors text-left"
              >
                <option.icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{option.title}</p>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Support Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-12 w-12 shadow-lg"
        size="icon"
      >
        <HelpCircle className="h-5 w-5" />
      </Button>
    </div>
  );
}