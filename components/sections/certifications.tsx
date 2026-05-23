"use client"

import { Award, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Professional Cloud Infrastructure Design",
    id: "Credential ID: AWS-8923-901",
    icon: ShieldCheck,
    image: "/certificates/alx-professional.jpg",
  },
  {
    title: "Google Associate Android Dev",
    issuer: "Native Android Engineering Standards",
    id: "Credential ID: GAD-5521-X",
    icon: Award,
    image: "/certificates/alx-frontend.jpg",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Agile Delivery & Team Leadership",
    id: "Credential ID: PSM-2290-A",
    icon: Zap,
    image: "/certificates/freecodecamp-js.jpg",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
            Validated <span className="text-primary italic">Expertise.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Continuous learning is the bedrock of technical excellence. My certifications reflect a commitment to mastering the most rigorous industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div 
              key={cert.title}
              className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/10">
                {cert.image ? (
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <cert.icon className="h-12 w-12 text-primary/40" />
                  </div>
                )}
              </div>

              <div className="relative text-center space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  {cert.issuer}
                </p>
                <div className="pt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-white/20">
                  <ShieldCheck className="h-3 w-3" />
                  {cert.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
