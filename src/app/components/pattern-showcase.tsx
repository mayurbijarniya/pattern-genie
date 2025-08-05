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
    <div className={`group relative bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
      isActive ? 'border-black dark:border-white border-2' : 'border-border'
    }`}>
      {/* Pattern Preview */}
      <div 
        className="h-48 sm:h-56 w-full relative cursor-pointer"
        style={pattern.style}
        onClick={() => previewPattern(pattern)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && previewPattern(pattern)}
        aria-label={`Preview ${pattern.name} pattern`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Button 
            size="sm" 
            className="bg-white text-black hover:bg-gray-100 border-0 shadow-lg font-medium px-6"
            onClick={(e) => {
              e.stopPropagation();
              previewPattern(pattern);
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="bg-black/80 text-white border-white/20 hover:bg-black font-medium px-6"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(pattern);
            }}
            disabled={isLoading}
          >
            {copiedId === pattern.id ? (
              <>
                <Check className="h-4 w-4 mr-2 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        
        {/* Star Icon */}
        <div className="absolute top-3 left-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        {pattern.badge && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-black border-0 text-xs font-medium backdrop-blur-sm">
              ✨ {pattern.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Pattern Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-center">{pattern.name}</h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

        {/* Call to Action */}
        {filteredPatterns.length > 0 && (
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Love these patterns?
              </h3>
              <p className="text-muted-foreground mb-6">
                Star the repository on GitHub and help others discover Pattern Wave!
              </p>
              <Button
                onClick={() => window.open("https://github.com/mayurbijarniya/pattern-wave", "_blank")}
              >
                ⭐ Star on GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}