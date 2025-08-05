"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { wavePatterns } from "../utils/patterns";
import { Pattern } from "../types/pattern";
import { Copy, Check, Eye, Search, Filter } from "lucide-react";
import { toast } from "sonner";

interface PatternShowcaseProps {
  activePattern: string | null;
  setActivePattern: (id: string | null) => void;
  theme: "light" | "dark";
}

export default function PatternShowcase({ activePattern: _activePattern, setActivePattern, theme: _theme }: PatternShowcaseProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'k':
            e.preventDefault();
            (document.querySelector('input[aria-label="Search patterns"]') as HTMLInputElement)?.focus();
            break;
          case '/':
            e.preventDefault();
            (document.querySelector('input[aria-label="Search patterns"]') as HTMLInputElement)?.focus();
            break;
        }
      }
      if (e.key === 'Escape') {
        setSearchTerm('');
        setSelectedCategory('all');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Filter patterns based on search and category
  const filteredPatterns = useMemo(() => {
    return wavePatterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (pattern.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      const matchesCategory = selectedCategory === "all" || pattern.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Get pattern counts by category
  const categoryStats = useMemo(() => {
    const stats = wavePatterns.reduce((acc, pattern) => {
      acc[pattern.category] = (acc[pattern.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, []);

  const copyToClipboard = async (pattern: Pattern) => {
    try {
      setIsLoading(true);
      await navigator.clipboard.writeText(pattern.code);
      setCopiedId(pattern.id);
      toast.success(`${pattern.name} copied to clipboard!`);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (_error) {
      toast.error("Failed to copy to clipboard");
    } finally {
      setIsLoading(false);
    }
  };

  const previewPattern = (pattern: Pattern) => {
    setActivePattern(pattern.id);
    toast.success(`Previewing ${pattern.name}`);
    // Scroll to top when pattern is selected
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PatternCard = ({ pattern }: { pattern: Pattern }) => {
    const isActive = _activePattern === pattern.id;
    
    return (
    <div className="group relative">
      <div
        className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300 ${
          isActive 
            ? "ring-2 ring-black dark:ring-white ring-offset-2 scale-[1.02] shadow-xl" 
            : "hover:shadow-xl hover:scale-[1.02]"
        }`}
        onClick={() => previewPattern(pattern)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && previewPattern(pattern)}
        aria-label={`Preview ${pattern.name} pattern`}
      >
        {/* Pattern Background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={pattern.style}
        />

        {/* Magic Star Button (top-left) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Could add favorite functionality here
          }}
          className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-black/30 hover:scale-110"
        >
          <svg className="w-4 h-4 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>

        {/* Enhanced Badge */}
        {pattern.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs font-semibold backdrop-blur-sm shadow-lg">
              🌟 {pattern.badge}
            </Badge>
          </div>
        )}

        {/* Mobile: Bottom action bar */}
        <div className="sm:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex gap-2">
            <Button
              size="sm" 
              className="flex-1 bg-white text-black hover:bg-gray-100 border-0 shadow-lg font-medium text-xs h-8"
              onClick={(e) => {
                e.stopPropagation();
                previewPattern(pattern);
              }}
            >
              <Eye className="h-3 w-3 mr-1" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(pattern);
              }}
              className={`flex-1 border-0 text-xs h-8 ${copiedId === pattern.id
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-900/90 hover:bg-gray-900 text-white"
              }`}
              disabled={copiedId === pattern.id}
            >
              {copiedId === pattern.id ? (
                <>
                  <Check className="h-3 w-3 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Desktop: Enhanced hover overlay */}
        <div className="hidden sm:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-sm lg:text-base mb-4 drop-shadow-lg">
              {pattern.name}
            </h3>
            <div className="flex flex-col gap-3 w-full">
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  previewPattern(pattern);
                }}
                className="cursor-pointer shadow-xl backdrop-blur-md bg-white/95 hover:bg-white text-black border-0 transition-all duration-200 hover:scale-105 font-semibold"
              >
                <Eye className="h-4 w-4 mr-2" />
                {isActive ? "Hide Preview" : "Preview Magic"}
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(pattern);
                }}
                className={`cursor-pointer shadow-xl backdrop-blur-md border-0 transition-all duration-200 hover:scale-105 font-semibold ${copiedId === pattern.id
                  ? "bg-green-600/90 hover:bg-green-600 text-white"
                  : "bg-gray-900/90 hover:bg-gray-900 text-white"
                }`}
                disabled={copiedId === pattern.id}
              >
                {copiedId === pattern.id ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied! 🎉
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code ✨
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    <section id="pattern-showcase" className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pattern Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover beautiful background patterns crafted for modern web design. 
            Click to preview, copy the code, and use in your projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
                          type="text"
            placeholder="Search patterns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Search patterns"
            />
          </div>

          {/* Category Filter Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
              <TabsTrigger value="all">
                All ({wavePatterns.length})
              </TabsTrigger>
              <TabsTrigger value="gradients">
                Gradients ({categoryStats.gradients || 0})
              </TabsTrigger>
              <TabsTrigger value="geometric">
                Geometric ({categoryStats.geometric || 0})
              </TabsTrigger>
              <TabsTrigger value="decorative">
                Decorative ({categoryStats.decorative || 0})
              </TabsTrigger>
              <TabsTrigger value="effects">
                Effects ({categoryStats.effects || 0})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground text-center">
            Showing {filteredPatterns.length} pattern{filteredPatterns.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Pattern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredPatterns.map((pattern) => (
            <PatternCard key={pattern.id} pattern={pattern} />
          ))}
        </div>

        {/* No Results */}
        {filteredPatterns.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No patterns found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}


      </div>
    </section>
  );
}