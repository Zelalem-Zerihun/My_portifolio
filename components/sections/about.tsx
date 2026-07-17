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
                A Bit <br /> About <br /> <span className="text-primary italic">Me.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Who I am beyond the code — what drives me and how I got here.
              </p>
            </div>

            {/* Content */}
            <div className="lg:w-2/3">
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-medium">
                I'm a software developer who loves building things that people actually enjoy using.
              </p>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  I love crafting software that looks great and works even better. There's something
                  deeply satisfying about getting both the design and the logic just right. I pick things
                  up quickly, and I'm always looking for the next thing to learn.
                </p>
                <p>
                  Most of my work lives in the Flutter ecosystem — building mobile apps with clean
                  architecture that are easy to maintain, fast to run, and genuinely enjoyable to use.
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
