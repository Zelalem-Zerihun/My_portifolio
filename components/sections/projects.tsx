"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Download, Smartphone, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const publishedApps = [
  {
    name: "Gazetta Plus",
    description: "Whether you're looking for the latest headlines, exploring archived editions, searching for jobs or bids, or diving into historical media, Gazette Plus is your reliable source.",
    role: "Lead Flutter Developer",
    company: "Addis Ababa University",
    logo: "/icons/Gazetta_plus.png",
    companyLogo: "/icons/Addis_Ababa_University.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=et.press.gazette_plus",
    tags: ["Flutter", "Riverpod", "News"],
    whiteBg: true,
  },
  {
    name: "Casa",
    description: "CASA is an online marketplace developed and managed by Origin Tech PLC that connects property developers, real estate agencies, and potential buyers to list, view, and manage real estate properties.",
    role: "Flutter Developer",
    company: "Origin Technologies",
    logo: "/icons/Casa.png",
    companyLogo: "/icons/Origin_Technologies.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.origin.casa_mobile",
    tags: ["Flutter", "Clean Architecture"],
  },
]

const personalProjects = [
  {
    name: "The Reviewers",
    description: "Reviewers App is a movie platform that provides personalized and AI-powered movie recommendations, popular movie listings with release date notifications, a watchlist feature, movie news, and a dedicated section for Amharic films.",
    role: "Solo Developer",
    logo: "/icons/the_reviewers.png",
    apkUrl: "/apk/app-release.apk",
    tags: ["Flutter", "Firebase", "Riverpod", "YouTube API", "REST API"],
    bgColor: "#1D80E4",
  },
]

const webProjects = [
  {
    name: "EPSIRA Digital Hub",
    description: "The EPSIRA digital hub is a comprehensive platform designed to professionalize and scale political science in Ethiopia by integrating a digital publication engine for scholarly journals, a multi-tier membership management system, an event and workshop portal for national conferences, a searchable community directory for research collaboration, and a governance section for institutional transparency and ethics.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    hosting: "Vercel",
    liveUrl: "https://epsira.vercel.app/",
    logo: "/icons/epsira_website.png",
    whiteBg: true,
  },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("apps")

  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Projects
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-8">
                  <TabsTrigger value="apps" className="gap-2">
                    <Smartphone className="h-4 w-4" />
                    Mobile Apps
                  </TabsTrigger>
                  <TabsTrigger value="web" className="gap-2">
                    <Globe className="h-4 w-4" />
                    Web Projects
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="apps" className="space-y-8">
                  {/* Published Apps */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-6">
                      Published Apps
                    </h3>
                    <div className="space-y-6">
                      {publishedApps.map((app) => (
                        <Card key={app.name} className="bg-card border-border hover:border-primary/50 transition-colors">
                          <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                              {/* App Icon */}
                              <div 
                                className={`w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden border border-border flex-shrink-0 ${app.whiteBg ? 'bg-white' : 'bg-primary/5'}`}
                                style={app.bgColor ? { backgroundColor: app.bgColor } : {}}
                              >
                                {app.logo ? (
                                  <Image 
                                    src={app.logo} 
                                    alt={app.name} 
                                    width={80} 
                                    height={80}
                                    className={app.whiteBg || app.bgColor ? "object-contain p-2" : "object-cover"}
                                  />
                                ) : (
                                  <Smartphone className="h-10 w-10 text-primary" />
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                  <h4 className="text-lg font-bold text-foreground">
                                    {app.name}
                                  </h4>
                                  
                                  {/* Company Branding */}
                                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-secondary/50 border border-border w-fit">
                                    {app.companyLogo && (
                                      <div className="w-4 h-4 relative flex-shrink-0">
                                        <Image 
                                          src={app.companyLogo} 
                                          alt={app.company} 
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                    )}
                                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                                      {app.company}
                                    </span>
                                  </div>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                  {app.description}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                  <div className="flex flex-wrap gap-2">
                                    {app.tags.map((tag) => (
                                      <Badge key={tag} variant="outline" className="text-[10px] font-medium py-0 px-2">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  
                                  <div className="flex gap-2 sm:ml-auto">
                                    {app.playStoreUrl && (
                                      <Button asChild size="sm" variant="ghost" className="h-8 px-3 text-xs gap-1.5 hover:bg-primary/10 hover:text-primary">
                                        <Link href={app.playStoreUrl} target="_blank">
                                          Play Store
                                          <ExternalLink className="h-3 w-3" />
                                        </Link>
                                      </Button>
                                    )}
                                    {app.appStoreUrl && (
                                      <Button asChild size="sm" variant="ghost" className="h-8 px-3 text-xs gap-1.5 hover:bg-primary/10 hover:text-primary">
                                        <Link href={app.appStoreUrl} target="_blank">
                                          App Store
                                          <ExternalLink className="h-3 w-3" />
                                        </Link>
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Personal Projects */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-6">
                      Personal Projects (In Development)
                    </h3>
                    <div className="space-y-6">
                      {personalProjects.map((project) => (
                        <Card key={project.name} className="bg-card border-border hover:border-primary/50 transition-colors">
                          <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                              {/* App Icon */}
                              <div 
                                className={`w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden border border-border flex-shrink-0 ${project.whiteBg ? 'bg-white' : 'bg-accent/5'}`}
                                style={project.bgColor ? { backgroundColor: project.bgColor } : {}}
                              >
                                {project.logo ? (
                                  <Image 
                                    src={project.logo} 
                                    alt={project.name} 
                                    width={80} 
                                    height={80}
                                    className={project.whiteBg || project.bgColor ? "object-contain p-2" : "object-cover"}
                                  />
                                ) : (
                                  <Smartphone className="h-10 w-10 text-accent" />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-foreground mb-1">
                                  {project.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {project.description}
                                </p>
                                <p className="text-xs text-muted-foreground mb-4">
                                  <span className="text-foreground">{project.role}</span>
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                  <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  <Button asChild size="sm" variant="outline" className="ml-auto">
                                    <Link href={project.apkUrl} download>
                                      <Download className="h-3 w-3 mr-1" />
                                      Download APK
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="web" className="space-y-6">
                  {webProjects.map((project) => (
                    <Card key={project.name} className="bg-card border-border hover:border-primary/50 transition-colors overflow-hidden">
                      <div className={`aspect-video relative flex items-center justify-center ${project.whiteBg ? 'bg-white' : 'bg-muted'}`}>
                        {project.logo ? (
                          <div className="relative w-full h-full p-8">
                            <Image 
                              src={project.logo} 
                              alt={project.name} 
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            <Globe className="h-12 w-12" />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {project.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <Button asChild size="sm">
                            <Link href={project.liveUrl} target="_blank">
                              Visit Website
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                          Hosted on {project.hosting}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
