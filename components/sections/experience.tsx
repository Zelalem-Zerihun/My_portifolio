import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "Current",
    role: "Flutter Mobile Developer",
    company: "Origin Tech",
    companyUrl: "https://origintech.com",
    description: "Developing and maintaining mobile applications using Flutter framework with focus on clean architecture and modern state management solutions.",
    tags: ["Flutter", "Riverpod", "Clean Architecture"],
  },
  {
    period: "2023 - 2024",
    role: "Flutter Mobile Developer",
    company: "INMS - Ethiopian Press Agency",
    description: "Developed mobile application using Flutter with Riverpod for state management. Integrated with ASP.NET backend and performed security testing using MobSF and Burp Suite. Collaborated with Addis Ababa University team on the project.",
    tags: ["Flutter", "Riverpod", "ASP.NET", "Security Testing"],
  },
  {
    period: "2022 - 2023",
    role: "Graduating Assistant",
    company: "St. Mary's University",
    description: "Taught 'Internet Programming' course to second-year students, covering both fundamental and advanced web technologies including HTML, CSS, JavaScript, and modern frameworks.",
    tags: ["Teaching", "Web Development", "Mentorship"],
  },
  {
    period: "Summer 2024",
    role: "Trainer",
    company: "iCog - Anyone Can Code Summer Camp",
    description: "Taught HTML, CSS, JavaScript, and Python to students. Guided them through hands-on projects and helped build foundational programming skills.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Experience
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="sm:w-32 flex-shrink-0">
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                          {exp.companyUrl ? (
                            <Link
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 ml-2"
                            >
                              <span className="text-muted-foreground font-normal">
                                · {exp.company}
                              </span>
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                            </Link>
                          ) : (
                            <span className="text-muted-foreground font-normal ml-2">
                              · {exp.company}
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
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
