"use client";

interface FooterProps {
  theme: "light" | "dark";
}

export default function Footer({ theme }: FooterProps) {
  const isPatternDark = theme === "dark";

  return (
    <footer
      className={`w-full py-6 transition-colors duration-300 ${
        isPatternDark ? "text-white" : " dark:text-neutral-200"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-6xl border-t transition-colors duration-300 ${
            isPatternDark
              ? "border-white/20"
              : "border-gray-300 dark:border-gray-700"
          } pt-6`}
        >
          <p
            className={`text-sm font-medium transition-colors duration-300 ${
              isPatternDark ? "text-white" : ""
            }`}
          >
            © {new Date().getFullYear()} Pattern Genie. All rights reserved.
          </p>
          <p
            className={`mt-2 text-sm italic transition-colors duration-300 ${
              isPatternDark ? "text-white" : ""
            }`}
          >
            Creating beautiful magical patterns
          </p>
        </div>
      </div>
    </footer>
  );
}