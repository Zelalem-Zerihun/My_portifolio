"use client"

import { Shield, Code, Cpu, Gauge, Layers, Smartphone, Database, Globe } from "lucide-react"

const technicalSkills = [
  "Flutter / Dart",
  "Riverpod / BLoC",
  "Clean Architecture",
  "REST / GraphQL",
  "Next.js / React",
  "Nest.js / Node",
  "Firebase",
  "PostgreSQL",
]

const architecturalPrinciples = [
  {
    title: "Mobile First",
    icon: Smartphone,
    description: "I design for phones first, then scale up",
  },
  {
    title: "Clean Design",
    icon: Layers,
    description: "Code that's easy to read, change, and grow",
  },
  {
    title: "State Management",
    icon: Gauge,
    description: "Keeping app data consistent and fast",
  },
  {
    title: "API Integration",
    icon: Globe,
    description: "Connecting apps to backends reliably",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left side - Technical Skills (Core Engine) */}
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-black mb-12 tracking-tight text-white">
                Core Engine
              </h2>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <div 
                    key={skill} 
                    className="group px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center gap-3 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors group-hover:scale-150 duration-300" />
                    <span className="text-sm font-bold tracking-wider text-white/80 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Architectural Principles Grid */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architecturalPrinciples.map((principle) => (
                  <div 
                    key={principle.title}
                    className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {principle.description}
                    </p>
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
