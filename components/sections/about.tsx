export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
                About Me
              </h2>
              <div className="w-12 h-px bg-primary" />
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                Highly motivated and passionate software developer, graduated top of my class with a{" "}
                <span className="text-primary font-semibold">3.83 CGPA</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have a deep interest in creating visually appealing and intuitive software while 
                mastering the complex logic behind it. As a quick learner, I am driven by curiosity 
                and a strong dedication to continuously improving my skills and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is on building high-quality mobile applications using Flutter with clean 
                architecture principles, ensuring maintainable, scalable, and performant solutions 
                that deliver exceptional user experiences.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Apps Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
