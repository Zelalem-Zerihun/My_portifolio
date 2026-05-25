"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="relative mb-32 p-12 lg:p-24 rounded-[3rem] bg-white/5 border border-white/5 overflow-hidden text-center group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative space-y-8">
              <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-tight">
                Let's <span className="text-primary italic">Build</span> <br /> Something Together
              </h2>
              
              <p className="text-white/40 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Currently available for senior architectural roles or strategic consulting. Let's discuss how we can push the boundaries of what your mobile platform can achieve.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-base font-bold bg-primary text-primary-foreground hover:scale-105 transition-all">
                  <Link href="/#contact">
                    Initiate Contact
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-base font-bold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all">
                  <Link href="https://drive.google.com/file/d/1GViRpB-U2VXgajhLBnLWD8m_swnw9FDI/view?usp=sharing" target="_blank">
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-12">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-black tracking-tighter">Zelalem Zerihun</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                Mobile Development Architect
              </p>
            </div>

            <div className="flex items-center gap-12">
              <Link
                href="https://github.com/Zelalem-Zerihun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:zelalem.zerihun.b@gmail.com"
                className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
              >
                Email
              </Link>
            </div>

            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
              © {currentYear} ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
