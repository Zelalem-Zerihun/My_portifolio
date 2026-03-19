"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Download, Award, GraduationCap, BookOpen, X, ZoomIn } from "lucide-react"
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
    <Card 
      className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-xs">
              {item.issuer || item.from}
            </Badge>
          </div>
          <h4 className="text-sm font-medium text-foreground line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function ImageModal({ 
  item, 
  isOpen, 
  onClose 
}: { 
  item: ImageItem | null
  isOpen: boolean
  onClose: () => void 
}) {
  if (!item) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = item.image
    link.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {item.description} from {item.issuer || item.from}
        </DialogDescription>
        <div className="relative">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
            <div>
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.issuer || item.from}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="secondary"
                onClick={handleDownload}
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full h-[80vh] bg-muted">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="95vw"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
    <section id="education" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Education & Credentials
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4 space-y-12">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Education</h3>
                </div>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground mb-2">St. Mary&apos;s University</p>
                    <div className="flex items-center gap-4">
                      <Badge variant="default">CGPA: 3.83</Badge>
                      <span className="text-sm text-muted-foreground">Graduated Top of Class</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Certificates */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Certificates</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Click on any certificate to view full size
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Recommendation Letters</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Click on any letter to view full size
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Image Modal */}
      <ImageModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  )
}
