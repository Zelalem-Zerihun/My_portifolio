"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Download, Award, GraduationCap, BookOpen, X, ZoomIn, ShieldCheck } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "Frontend Development",
    issuer: "ALX",
    description: "Figma & React.js",
    image: "/certificates/alx-frontend.jpg",
  },
  {
    title: "Professional Development",
    issuer: "ALX",
    description: "Professional skills certification",
    image: "/certificates/alx-professional.jpg",
  },
  {
    title: "Advanced Flutter",
    issuer: "Udemy",
    description: "Advanced mobile development with Flutter",
    image: "/certificates/udemy-flutter.jpg",
  },
  {
    title: "JavaScript Certification",
    issuer: "freeCodeCamp",
    description: "JavaScript algorithms and data structures",
    image: "/certificates/freecodecamp-js.jpg",
  },
  {
    title: "Trainer Certification",
    issuer: "iCog Labs",
    description: "Certified trainer for software development",
    image: "/certificates/icog-trainer.jpg",
  },
]

const recommendations = [
  {
    title: "University Recommendation 1",
    from: "St. Mary's University",
    description: "Academic excellence recommendation",
    image: "/recommendations/smu-recommendation-1.jpg",
  },
  {
    title: "University Recommendation 2",
    from: "St. Mary's University",
    description: "Teaching assistance recommendation",
    image: "/recommendations/smu-recommendation-2.jpg",
  },
  {
    title: "INMS Recommendation",
    from: "Addis Ababa University - INMS",
    description: "Ethiopian Press Agency project recommendation",
    image: "/recommendations/aau-inms-recommendation.jpg",
  },
]

interface ImageItem {
  title: string
  issuer?: string
  from?: string
  description: string
  image: string
}

function ImageGalleryItem({ item, onClick }: { item: ImageItem; onClick: () => void }) {
  return (
    <div 
      className="group relative rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-500 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] bg-white/5 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">
            {item.issuer || item.from}
          </span>
        </div>
        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export function EducationSection() {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: ImageItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <section id="education" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                Education <br /> & <br /> <span className="text-primary italic">Credentials.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Where I studied, what I've earned, and the people who vouch for my work.
              </p>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 space-y-24">
              {/* Education */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Where I Studied</h3>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                    <h4 className="text-2xl lg:text-3xl font-black text-white group-hover:text-primary transition-colors italic">
                      Bachelor of Science in Computer Science
                    </h4>
                  </div>
                  <div className="flex items-center gap-4 text-white/40 font-bold uppercase tracking-widest text-xs">
                    <span>St. Mary&apos;s University</span>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Certificates</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert) => (
                    <ImageGalleryItem 
                      key={cert.title} 
                      item={cert} 
                      onClick={() => handleItemClick(cert)}
                    />
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">Recommendation Letters</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.map((rec) => (
                    <ImageGalleryItem 
                      key={rec.title} 
                      item={rec} 
                      onClick={() => handleItemClick(rec)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing images */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl bg-black/95 border-white/5 backdrop-blur-xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Certificate View</DialogTitle>
          {selectedItem && (
            <div className="relative aspect-auto max-h-[85vh] flex items-center justify-center">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1200}
                height={1600}
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-center">
                <h3 className="text-2xl font-black text-white italic mb-2">{selectedItem.title}</h3>
                <p className="text-white/40 uppercase tracking-[0.2em] text-xs">{selectedItem.issuer || selectedItem.from}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
