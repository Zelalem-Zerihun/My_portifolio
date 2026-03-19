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
    name: "News Ethiopia",
    description: "Official news application for Ethiopian Press Agency providing latest news and updates.",
    role: "Lead Flutter Developer",
    company: "INMS - Ethiopian Press Agency",
    playStoreUrl: "https://play.google.com",
    appStoreUrl: "https://apps.apple.com",
    tags: ["Flutter", "Riverpod", "News"],
  },
  {
    name: "Origin App",
    description: "Mobile application developed for Origin Tech with modern UI and seamless performance.",
    role: "Flutter Developer",
    company: "Origin Tech",
    playStoreUrl: "https://play.google.com",
    tags: ["Flutter", "Clean Architecture"],
  },
]

const personalProjects = [
  {
    name: "Personal Productivity App",
    description: "A comprehensive productivity application currently in development, featuring task management, habit tracking, and goal setting.",
    role: "Solo Developer",
    apkUrl: "/downloads/app.apk",
    tags: ["Flutter", "Riverpod", "SQLite"],
  },
]

const webProjects = [
  {
    name: "Association Website",
    description: "Full-featured association website with member management, events, and news sections.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    hosting: "Netlify",
    liveUrl: "https://example.com",
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
                            <div className="flex flex-col sm:flex-row gap-4">
                              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Smartphone className="h-8 w-8 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-foreground mb-1">
                                  {app.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {app.description}
                                </p>
                                <p className="text-xs text-muted-foreground mb-4">
                                  <span className="text-foreground">{app.role}</span> at {app.company}
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                  <div className="flex flex-wrap gap-2">
                                    {app.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  <div className="flex gap-2 ml-auto">
                                    {app.playStoreUrl && (
                                      <Button asChild size="sm" variant="outline">
                                        <Link href={app.playStoreUrl} target="_blank">
                                          Play Store
                                          <ExternalLink className="h-3 w-3 ml-1" />
                                        </Link>
                                      </Button>
                                    )}
                                    {app.appStoreUrl && (
                                      <Button asChild size="sm" variant="outline">
                                        <Link href={app.appStoreUrl} target="_blank">
                                          App Store
                                          <ExternalLink className="h-3 w-3 ml-1" />
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
                            <div className="flex flex-col sm:flex-row gap-4">
                              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Smartphone className="h-8 w-8 text-accent" />
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
                      <div className="aspect-video bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          <Globe className="h-12 w-12" />
                        </div>
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
