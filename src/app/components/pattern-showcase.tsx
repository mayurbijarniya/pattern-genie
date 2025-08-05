"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { wavePatterns } from "../utils/patterns";
import { Pattern } from "../types/pattern";
import { Copy, Check, Eye, Search, Filter, Sparkles, Star, X } from "lucide-react";
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
  const [favorites, setFavorites] = useState<string[]>([]);

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

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('pattern-genie-favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('pattern-genie-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite function
  const toggleFavorite = (patternId: string) => {
    setFavorites(prev => 
      prev.includes(patternId) 
        ? prev.filter(id => id !== patternId)
        : [...prev, patternId]
    );
  };

  // Filter patterns based on search and category
  const filteredPatterns = useMemo(() => {
    return wavePatterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (pattern.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      let matchesCategory = false;
      
      if (selectedCategory === "all") {
        matchesCategory = true;
      } else if (selectedCategory === "favorites") {
        matchesCategory = favorites.includes(pattern.id);
      } else {
        matchesCategory = pattern.category === selectedCategory;
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, favorites]);

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

        {/* Favorite Star Button (top-left) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(pattern.id);
          }}
          className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 border ${
            favorites.includes(pattern.id)
              ? "bg-yellow-500/20 border-yellow-400/30 text-yellow-400"
              : "bg-black/20 border-white/30 text-white hover:bg-black/30 hover:border-white/40"
          }`}
          title={favorites.includes(pattern.id) ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={`h-4 w-4 transition-all duration-200 ${
              favorites.includes(pattern.id) ? "fill-current scale-110" : ""
            }`}
          />
        </button>

        {/* Pattern Craft Style Badge */}
        {pattern.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="gap-1 text-xs bg-background/80 backdrop-blur-sm border-border/50 px-2 py-1 text-foreground">
              <Sparkles className="h-2.5 w-2.5 text-violet-600" />
              <span>{pattern.badge}</span>
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
                    {/* Enhanced Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search magical patterns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-border rounded-xl bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-black focus:border-black shadow-lg transition-all duration-300"
              aria-label="Search patterns"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs - Framer Motion Animated */}
          <div className="flex justify-center w-full">
            <div className="inline-flex h-12 items-center justify-center rounded-xl bg-muted/70 backdrop-blur-md border border-border/30 p-1.5 text-muted-foreground relative gap-1.5">
              {/* Framer Motion animated background with layoutId */}
              {selectedCategory && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute top-1.5 bottom-1.5 bg-foreground dark:bg-white border border-border/20 rounded-lg shadow-lg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                  }}
                  style={{
                    left: `${['all', 'gradients', 'geometric', 'decorative', 'effects', 'favorites'].indexOf(selectedCategory) * (100 / 6) + 0.5}%`,
                    width: `${100 / 6 - 1}%`,
                  }}
                />
              )}
              
              {/* Tab buttons with enhanced animations */}
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'all' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                All ({wavePatterns.length})
              </motion.button>
              
              <motion.button
                onClick={() => setSelectedCategory('gradients')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'gradients' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Gradients ({categoryStats.gradients || 0})
              </motion.button>
              
              <motion.button
                onClick={() => setSelectedCategory('geometric')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'geometric' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Geometric ({categoryStats.geometric || 0})
              </motion.button>
              
              <motion.button
                onClick={() => setSelectedCategory('decorative')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'decorative' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Decorative ({categoryStats.decorative || 0})
              </motion.button>
              
              <motion.button
                onClick={() => setSelectedCategory('effects')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'effects' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Effects ({categoryStats.effects || 0})
              </motion.button>
              
              <motion.button
                onClick={() => setSelectedCategory('favorites')}
                className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium h-9 min-w-0 flex-1 ${
                  selectedCategory === 'favorites' 
                    ? 'text-background dark:text-black font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Star className="h-4 w-4 mr-1.5" />
                Favorites ({favorites.length})
              </motion.button>
            </div>
          </div>
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

        {/* No Results / Empty States */}
        {filteredPatterns.length === 0 && (
          <div className="text-center py-12">
            {selectedCategory === "favorites" ? (
              <>
                <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
                <p className="text-muted-foreground mb-4">
                  Click the <Star className="inline h-4 w-4 text-yellow-400 mx-1" /> star on any pattern to add it to your favorites!
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory("all")}
                >
                  Browse All Patterns
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        )}


      </div>
    </section>
  );
}