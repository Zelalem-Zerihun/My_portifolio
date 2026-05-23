"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const experiences = [
  {
    period: "2024 — PRESENT",
    role: "Flutter Mobile Developer",
    company: "Origin Technologies",
    location: "Addis Ababa, ET",
    description: "Leading the development of CASA, an online real estate marketplace. Implementing state management with Riverpod, integrating RESTful APIs, and managing end-to-end deployment for iOS and Android.",
    tags: ["Flutter", "Riverpod", "Firebase", "iOS Deployment"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Flutter Mobile Developer",
    company: "Addis Ababa University",
    location: "Ethiopian Press Agency Project",
    description: "Contributed to Gazette Plus, an integrated news management system. Implemented secure authentication with Orchard ID, GraphQL integrations, and YouTube API for media streaming.",
    tags: ["Flutter", "GraphQL", "REST API", "Orchard ID"],
  },
  {
    period: "2022 — 2023",
    role: "Graduating Assistant",
    company: "St. Mary's University",
    location: "Addis Ababa, ET",
    description: "Taught 'Internet Programming' course, covering HTML, CSS, JavaScript, and modern frameworks for second-year students.",
    tags: ["Teaching", "Web Development", "Mentorship"],
  },
  {
    period: "SUMMER 2024",
    role: "Trainer",
    company: "iCog - Anyone Can Code",
    location: "Summer Camp",
    description: "Taught HTML, CSS, JavaScript, and Python to students. Guided hands-on projects and built foundational programming skills.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Section Heading */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                The <br /> Professional <br /> <span className="text-primary italic">Journey.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                A chronological track of engineering excellence and architectural leadership in mobile and web technologies.
              </p>
            </div>

            {/* Timeline Content */}
            <div className="lg:w-2/3 relative">
              {/* Vertical Line */}
              <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />

              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 lg:pl-24 group">
                    {/* Timeline Dot */}
                    <div className={`absolute left-[-4px] lg:left-[28px] top-2 w-2 h-2 rounded-full ring-4 ring-black transition-all duration-500 group-hover:scale-150 ${exp.current ? 'bg-primary' : 'bg-white/20'}`} />
                    
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-xs font-black tracking-[0.2em] text-primary uppercase">
                          {exp.period}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/40 font-medium">
                          <span className="flex items-center gap-1">
                            {exp.company}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/10" />
                          <span className="flex items-center gap-1">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-all duration-500">
                        <p className="text-white/60 leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="secondary" 
                              className="bg-white/5 text-white/60 hover:text-primary transition-colors px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border-none"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
