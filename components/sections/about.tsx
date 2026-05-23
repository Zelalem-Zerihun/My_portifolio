"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Section label */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                The <br /> Human <br /> <span className="text-primary italic">Element.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Blending academic excellence with a relentless drive for engineering innovation.
              </p>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-medium">
                Highly motivated and passionate software developer, graduated top of my class with a{" "}
                <span className="text-primary italic font-black">3.83 CGPA</span>.
              </p>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  I have a deep interest in creating visually appealing and intuitive software while 
                  mastering the complex logic behind it. As a quick learner, I am driven by curiosity 
                  and a strong dedication to continuously improving my skills and expertise.
                </p>
                <p>
                  My focus is on building high-quality mobile applications using Flutter with clean 
                  architecture principles, ensuring maintainable, scalable, and performant solutions 
                  that deliver exceptional user experiences.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-white/10">
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 italic group-hover:text-primary transition-colors">3+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Years Experience</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 italic group-hover:text-primary transition-colors">10+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
