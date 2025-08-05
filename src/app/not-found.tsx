"use client";

import { Button } from "@/components/ui/button";
import { Waves, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2">
          <div className="p-3 rounded-lg bg-primary/10">
            <Waves className="h-8 w-8 text-primary animate-wave" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pattern Wave</h1>
          </div>
        </div>

        {/* 404 Content */}
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-primary">404</h2>
          <h3 className="text-2xl font-semibold text-foreground">Pattern Not Found</h3>
          <p className="text-muted-foreground">
            The pattern you&apos;re looking for has vanished. Let&apos;s navigate back to the magical collection.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="min-w-[140px]">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Wave Pattern */}
        <div className="mt-12">
          <div className="h-24 w-full relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}