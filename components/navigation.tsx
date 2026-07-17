"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certs" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link
            href="/"
            className="text-xl font-black tracking-tighter text-white hover:text-primary transition-colors"
          >
            Zelalem Zerihun
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <Button asChild className="rounded-full bg-primary text-primary-foreground font-black text-[10px] uppercase tracking-[0.2em] px-6 hover:scale-105 transition-transform">
              <Link href="https://drive.google.com/file/d/1R9HEs_QhbSB7xplrvev5H3oJOrXfDZwS/view?usp=sharing" target="_blank">
                CV
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/5">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-black border-white/5 p-12 flex flex-col justify-center">
                <div className="flex flex-col gap-8 text-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black tracking-tighter text-white hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-8">
                    <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest h-14">
                      <Link href="https://drive.google.com/file/d/1R9HEs_QhbSB7xplrvev5H3oJOrXfDZwS/view?usp=sharing" target="_blank">
                        Download CV
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
