"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const experiences = [
  {
    period: "Current",
    role: "Flutter Mobile Developer",
    company: "Origin Technologies",
    companyUrl: "https://origintech.com",
    logo: "/icons/Origin_Technologies.png",
    description: "CASA is an online real estate marketplace that connects property developers, agencies, and buyers to list, explore, and manage property listings while serving as a digital channel for verified users to promote properties and enabling buyers to directly contact sellers; as the platform does not act as a broker and does not own or manage listed properties to ensure a transparent, user-driven experience, I contributed to the development of the mobile application using Flutter, implementing state management with Riverpod, integrating RESTful APIs for efficient data handling, configuring and building the iOS version, managing deployment to the Google Play Store, and implementing Firebase Authentication for secure user access alongside testing to ensure stability and performance.",
    tags: ["Flutter", "Riverpod", "Firebase", "iOS Deployment", "Play Store"],
  },
  {
    period: "2023 - 2024",
    role: "Flutter Mobile Developer",
    company: "Addis Ababa University (for Ethiopian Press Agency)",
    companyUrl: "https://www.aau.edu.et/",
    logo: "/icons/Addis_Ababa_University.png",
    description: "Gazette Plus is an all-in-one news and information platform delivering newspapers, magazines, job listings, bid announcements, and historical multimedia content in a seamless mobile experience; built as part of the Integrated News Management System (INMS) for the Ethiopian Press Agency, the app focuses on accessibility, performance, and scalability, where I contributed to the development of cross-platform features using Flutter and Dart for Android and iOS, implemented secure authentication through Orchard Identity Server, enabled efficient data handling using GraphQL and RESTful APIs, and integrated the YouTube Data API for media streaming and podcast playback, while collaborating closely with UI/UX designers to deliver an intuitive interface and conducting debugging, testing, and optimization to ensure stability, responsiveness, and user-centered scalability within a collaborative environment.",
    tags: ["Flutter", "GraphQL", "REST API", "Orchard ID", "YouTube API"],
  },
  {
    period: "2022 - 2023",
    role: "Graduating Assistant",
    company: "St. Mary's University",
    companyUrl: "https://smuc.edu.et/",
    logo: "/icons/St._Mary's_University.png",
    description: "Taught 'Internet Programming' course to second-year students, covering both fundamental and advanced web technologies including HTML, CSS, JavaScript, and modern frameworks.",
    tags: ["Teaching", "Web Development", "Mentorship"],
  },
  {
    period: "Summer 2024",
    role: "Trainer",
    company: "iCog - Anyone Can Code Summer Camp",
    companyUrl: "https://icogacc.com/",
    logo: "/icons/iCog_acc.png",
    description: "Taught HTML, CSS, JavaScript, and Python to students. Guided them through hands-on projects and helped build foundational programming skills.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
  },
]

function ExperienceItem({ exp }: { exp: typeof experiences[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = exp.description.length > 250;
  const displayDescription = isLongDescription && !isExpanded 
    ? `${exp.description.substring(0, 250)}...` 
    : exp.description;

  return (
    <div className="group relative">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {exp.logo && (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 flex items-center justify-center border border-border shadow-md group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg">
              <Image 
                src={exp.logo} 
                alt={exp.company} 
                width={80} 
                height={80}
                className="object-contain"
                priority
              />
            </div>
          )}
          <div className="flex-1 min-w-[200px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <span className="text-sm font-semibold text-primary/80 tracking-wide">
                {exp.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2">
              {exp.companyUrl ? (
                <Link
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 group/link"
                >
                  <span className="text-lg font-medium text-muted-foreground group-hover/link:text-primary transition-colors">
                    {exp.company}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                </Link>
              ) : (
                <span className="text-lg font-medium text-muted-foreground">
                  {exp.company}
                </span>
              )}
              </div>          </div>
        </div>

        <div className="pl-0 sm:pl-[120px]">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {displayDescription}
            </p>
            {isLongDescription && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp className="h-4 w-4" /></>
                ) : (
                  <>Read More <ChevronDown className="h-4 w-4" /></>
                )}
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {exp.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
                  Experience
                </h2>
                <div className="w-12 h-px bg-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} exp={exp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
