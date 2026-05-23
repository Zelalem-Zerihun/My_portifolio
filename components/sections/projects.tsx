"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, ExternalLink, ShieldCheck, Zap, Layers, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const mobileProjects = [
  {
    slug: "gazetta-plus",
    name: "Gazetta Plus",
    category: "News & Media",
    description: "Whether you're looking for the latest headlines, exploring archived editions, searching for jobs or bids, or diving into historical media, Gazette Plus is your reliable source.",
    features: ["Secure authentication via Orchard ID", "GraphQL & RESTful API integration", "YouTube Data API for media streaming"],
    tags: ["Flutter", "Riverpod", "GraphQL"],
    image: "/icons/Gazetta_plus.png",
    playStore: "https://play.google.com/store/apps/details?id=et.press.gazette_plus",
  },
  {
    slug: "casa",
    name: "Casa",
    category: "Real Estate",
    description: "CASA is an online marketplace that connects property developers, real estate agencies, and potential buyers to list, view, and manage real estate properties.",
    features: ["Riverpod state management", "RESTful API integration", "Firebase Authentication"],
    tags: ["Flutter", "Clean Architecture", "Firebase"],
    image: "/icons/Casa.png",
    playStore: "https://play.google.com/store/apps/details?id=com.origin.casa_mobile",
  },
  {
    slug: "reviewers-app",
    name: "The Reviewers App",
    category: "Entertainment • AI",
    description: "A sophisticated Flutter application for cinephiles, offering movie discovery, curated reviews, and AI-powered recommendations.",
    features: ["AI Movie Chat (Gemini Powered)", "Digital Release Tracker", "Amharic Cinema Hub"],
    tags: ["Flutter", "Riverpod", "Gemini AI", "Firebase"],
    image: "/images/reviewers/reviewers-logo.png",
  },
  {
    slug: "finpilot",
    name: "FinPilot",
    category: "Finance • AI",
    description: "An intelligent, AI-powered financial management application that automatically tracks transactions via SMS parsing and provides Gemini-driven insights.",
    features: ["Automated SMS Transaction Tracking", "Gemini-powered Financial Assistant", "Budget & Category Management"],
    tags: ["Flutter", "Gemini AI", "SQLite", "Riverpod"],
    image: "/images/finpilot/finpilot_logo.png",
  },
]

const webProjects = [
  {
    slug: "epsira",
    name: "EPSIRA Digital Hub",
    category: "Digital Publication",
    description: "A comprehensive platform designed to professionalize and scale political science in Ethiopia with digital publication engine, membership management, and event portals.",
    features: ["Digital publication engine", "Multi-tier membership management", "Event & workshop portal"],
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "/icons/epsira_website.png",
    liveUrl: "https://epsira.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Specialization */}
          <div className="mb-32">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-white">
                  Mobile <span className="text-primary italic">Specialization.</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed">
                  End-to-end native & cross-platform applications built for scale. Focusing on performance, security, and seamless user experiences.
                </p>
              </div>
              <div className="flex items-center gap-4 text-white/20">
                <div className="w-12 h-px bg-white/10" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Slide to explore
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mobileProjects.map((project) => (
                <div 
                  key={project.name}
                  className="group relative rounded-[3rem] bg-white/5 border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-700"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-white/5 flex items-center justify-center p-12">
                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-1000">
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        fill 
                        className="object-contain opacity-60 group-hover:opacity-100"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute top-8 left-8">
                      <Badge className="bg-white/10 backdrop-blur-md text-white/80 border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-10 space-y-6">
                    <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-xs font-medium text-white/60">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-primary-foreground transition-all">
                          <Link href={`/projects/${project.slug}`}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Architectures */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white">
                Web <span className="text-primary italic">Architectures.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
                Custom localized solutions for complex content management and high-fidelity media streaming.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {webProjects.map((project) => (
                <div 
                  key={project.name}
                  className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-500"
                >
                  <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-white/10 bg-white/5 p-8">
                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-1000">
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        fill 
                        className="object-contain opacity-60 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-center lg:text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <Globe className="h-5 w-5 text-white/20 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 justify-center lg:justify-start">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-white/40 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-6">
                      <Button asChild variant="link" className="p-0 h-auto text-primary font-bold text-sm hover:gap-2 transition-all">
                        <Link href={`/projects/${project.slug}`}>
                          Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
