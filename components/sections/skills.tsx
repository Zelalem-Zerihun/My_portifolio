"use client"

import { Progress } from "@/components/ui/progress"
import { Shield, Code, Cpu, Gauge, Layers, Smartphone, Database, Globe } from "lucide-react"

const technicalSkills = [
  { name: "Flutter / Dart", level: 98 },
  { name: "Riverpod / BLoC", level: 95 },
  { name: "Clean Architecture", level: 92 },
  { name: "REST / GraphQL", level: 88 },
  { name: "Firebase / ASP.NET", level: 82 },
]

const architecturalPrinciples = [
  {
    title: "Mobile First",
    icon: Smartphone,
    description: "Responsive & adaptive mobile ecosystems",
  },
  {
    title: "Clean Design",
    icon: Layers,
    description: "Modular & scalable code structures",
  },
  {
    title: "State Management",
    icon: Gauge,
    description: "Predictable & efficient data flow",
  },
  {
    title: "API Integration",
    icon: Globe,
    description: "Robust & secure backend communication",
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
              <div className="space-y-8">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold uppercase tracking-widest text-white/80">
                        {skill.name}
                      </span>
                      <span className="text-sm font-black text-primary italic">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
