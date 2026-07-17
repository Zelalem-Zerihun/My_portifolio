"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16 lg:pt-0">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Flutter Mobile Developer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-white">
              I Build <span className="text-primary italic">Beautiful</span> <br className="hidden lg:block" /> Mobile Apps.
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              I'm a Flutter developer who cares about clean code and great design in equal measure. I build apps that look polished, run smoothly, and are a joy to use.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-white">
                <Link href="mailto:zelalem.zerihun.b@gmail.com">
                  Work with Me
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-8 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-700">
              <Link
                href="https://github.com/Zelalem-Zerihun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:zelalem.zerihun.b@gmail.com"
                className="text-white/40 hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <div className="h-10 w-px bg-white/10 hidden lg:block" />
              <div className="hidden lg:flex flex-col text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                <span>Based in</span>
                <span className="text-white/60">Addis Ababa, ET</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual anchor */}
          <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-square max-w-lg animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl opacity-50" />
            <div className="relative w-full h-full rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out p-4">
                  <Image 
                    src="/images/mobile_pic.png" 
                    alt="Mobile Application Showcase" 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    priority
                  />
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
