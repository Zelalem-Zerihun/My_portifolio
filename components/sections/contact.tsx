"use client"

import { useState } from "react"
import { Mail, Github, Phone, Copy, Check, Send as Telegram } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const contactInfo = {
  email: "zelalem.zerihun.b@gmail.com",
  phone: "09-25-22-93-35",
  telegram: "@zelalem_zerihun",
  github: "https://github.com/Zelalem-Zerihun",
}

export function ContactSection() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Email Copied!",
      description: "Address has been copied to your clipboard.",
    })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                Let's <br /> <span className="text-primary italic">Talk.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                I'm open to new opportunities — whether that's a full-time role, a freelance project, or just a conversation about an idea.
              </p>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Contact Methods */}
                  {/* Email */}
                  <div 
                    onClick={copyEmail}
                    className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Email</p>
                        <p className="text-sm font-bold text-white">{contactInfo.email}</p>
                      </div>
                    </div>
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-white/20" />}
                  </div>

                  {/* Telegram */}
                  <Link
                    href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
                    target="_blank"
                    className="group flex items-center gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Telegram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Telegram</p>
                      <p className="text-sm font-bold text-white">{contactInfo.telegram}</p>
                    </div>
                  </Link>

                  {/* Phone */}
                  <div className="group flex items-center gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Phone</p>
                      <p className="text-sm font-bold text-white">{contactInfo.phone}</p>
                    </div>
                  </div>

                  {/* GitHub */}
                  <Link
                    href={contactInfo.github}
                    target="_blank"
                    className="group flex items-center gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20">GitHub</p>
                      <p className="text-sm font-bold text-white">@Zelalem-Zerihun</p>
                    </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
