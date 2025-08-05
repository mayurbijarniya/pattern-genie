"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, X } from "lucide-react";

interface ReturnPreviewProps {
  theme: "light" | "dark";
  activePattern?: string | null;
  onReset?: () => void;
}

export default function ReturnPreview({ theme, activePattern, onReset }: ReturnPreviewProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!activePattern && !onReset) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 shadow-lg bg-background/80 backdrop-blur-md"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-2">
      {/* Reset Pattern Button */}
      {activePattern && onReset && (
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="rounded-full shadow-lg bg-background/80 backdrop-blur-md"
        >
          <X className="h-4 w-4 mr-2" />
          Reset Preview
        </Button>
      )}

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="icon"
        className="rounded-full h-12 w-12 shadow-lg bg-background/80 backdrop-blur-md"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}