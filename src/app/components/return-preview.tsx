"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, X } from "lucide-react";

interface ReturnPreviewProps {
  theme: "light" | "dark";
  activePattern?: string | null;
  onReset?: () => void;
}

export default function ReturnPreview({ theme: _theme, activePattern, onReset }: ReturnPreviewProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!activePattern && !onReset) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 shadow-lg bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2">
      {/* Return to Preview Button */}
      {activePattern && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="rounded-full shadow-lg bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 backdrop-blur-md min-w-0 sm:min-w-[140px]"
        >
          <ArrowUp className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Return to Preview</span>
        </Button>
      )}

      {/* Reset Pattern Button */}
      {activePattern && onReset && (
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="rounded-full shadow-lg bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 backdrop-blur-md min-w-0 sm:min-w-[140px]"
        >
          <X className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Reset Preview</span>
        </Button>
      )}

      {/* Scroll to Top Button - only when no active pattern */}
      {!activePattern && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 shadow-lg bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 backdrop-blur-md"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}