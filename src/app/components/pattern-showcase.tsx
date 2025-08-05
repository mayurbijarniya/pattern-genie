"use client";

import { useState, useMemo } from "react";
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
  };

  const PatternCard = ({ pattern }: { pattern: Pattern }) => (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Pattern Preview */}
      <div 
        className="h-32 w-full relative cursor-pointer"
        style={pattern.style}
        onClick={() => previewPattern(pattern)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && previewPattern(pattern)}
        aria-label={`Preview ${pattern.name} pattern`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
        
        {/* Badge */}
        {pattern.badge && (
          <div className="absolute top-2 right-2">
            <Badge variant={pattern.badge === "New" ? "default" : "secondary"}>
              {pattern.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Pattern Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{pattern.name}</h3>
            {pattern.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {pattern.description}
              </p>
            )}
            <Badge variant="outline" className="text-xs">
              {pattern.category}
            </Badge>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => previewPattern(pattern)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => copyToClipboard(pattern)}
            disabled={copiedId === pattern.id || isLoading}
          >
            {copiedId === pattern.id ? (
              <>
                <Check className="h-4 w-4 mr-2" />
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
      </div>
    </div>
  );

  return (
    <section id="pattern-showcase" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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