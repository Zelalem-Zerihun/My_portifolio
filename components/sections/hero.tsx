"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left side - Text content */}
            <div className="flex-1">
              <p className="text-primary font-medium mb-2 tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                Zelalem Zerihun
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
                Flutter Mobile Developer
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Building scalable and beautiful mobile applications with clean architecture and modern state management.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild size="lg" className="gap-2">
                  <Link href="#projects">
                    View My Work
                    <ArrowDown className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/CV/Zelalem_Zerihun_CV.pdf" target="_blank">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Zelalem-Zerihun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="mailto:zelalem.zerihun.b@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            {/* Right side - Navigation hints */}
            <div className="hidden lg:flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-border" />
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
                  About
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-border" />
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
                  Experience
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-border" />
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
