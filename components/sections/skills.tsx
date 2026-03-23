import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Expert" },
      { name: "Riverpod", level: "Advanced" },
      { name: "BLoC Pattern", level: "Advanced" },
      { name: "Clean Architecture", level: "Advanced" },
      { name: "Dart", level: "Expert" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "REST API Integration", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "ASP.NET", level: "Intermediate" },
      { name: "Secure Coding", level: "Advanced" },
    ],
  },
  {
    title: "Deployment & Tools",
    skills: [
      { name: "Google Play Store", level: "Advanced" },
      { name: "iOS App Store", level: "Advanced" },
      { name: "Git/GitHub", level: "Advanced" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
  {
    title: "Soft Skills & Languages",
    skills: [
      { name: "Effective Communication", level: "None" },
      { name: "Critical Thinking", level: "None" },
      { name: "Meeting Deadlines", level: "None" },
      { name: "Quick Learner", level: "None" },
      { name: "English (Fluent)", level: "None" },
      { name: "Amharic (Native)", level: "None" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                Skills
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <div className="space-y-12">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant={skill.level === "Expert" ? "default" : "secondary"}
                          className="px-4 py-2 text-sm"
                        >
                          {skill.name}
                          {skill.level === "Expert" && category.title !== "Soft Skills & Languages" && (
                            <span className="ml-2 text-xs opacity-70">Expert</span>
                          )}
                        </Badge>
                      ))}
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
