"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Globe, ExternalLink, ShieldCheck, Zap, Layers, ArrowLeft, CheckCircle2, Cpu, Code, Shield, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation as SwiperNavigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projectsData = {
  "gazetta-plus": {
    name: "Gazetta Plus",
    category: "News & Media • Mobile App",
    overview: "Whether you're looking for the latest headlines, exploring archived editions, searching for jobs or bids, or diving into historical media, Gazette Plus is your reliable source.",
    challenge: "The primary challenge was integrating a vast archive of historical media with real-time news delivery while ensuring low latency and high accessibility across different network conditions in Ethiopia.",
    solution: "We architected a reactive data layer using Flutter and Riverpod, integrating GraphQL for efficient data fetching. We also leveraged the YouTube Data API for seamless media streaming and implemented robust caching strategies.",
    contributions: [
      {
        title: "Real-time Engine",
        icon: Cpu,
        description: "Engineered a multi-threaded data pipeline that synchronizes news content in under 200ms.",
      },
      {
        title: "Secure Auth",
        icon: Shield,
        description: "Implemented Orchard Identity Server for secure, enterprise-grade user authentication.",
      },
      {
        title: "Media Streaming",
        icon: Gauge,
        description: "Custom video player integration with HLS support for high-fidelity media playback.",
      },
    ],
    techStack: ["Flutter", "GraphQL", "Riverpod", "Orchard ID", "YouTube API"],
    image: "/icons/Gazetta_plus.png",
    playStore: "https://play.google.com/store/apps/details?id=et.press.gazette_plus",
    screenshots: [
      "/images/Epa/epa-1.jpg",
      "/images/Epa/epa-2.jpg",
      "/images/Epa/epa-3.jpg",
      "/images/Epa/epa-4.jpg",
      "/images/Epa/epa-5.jpg",
      "/images/Epa/epa-6.jpg",
      "/images/Epa/epa-7.jpg",
    ]
  },
  "casa": {
    name: "Casa",
    category: "Real Estate • Mobile App",
    overview: "CASA is an online marketplace that connects property developers, real estate agencies, and potential buyers to list, view, and manage real estate properties.",
    challenge: "The real estate market required a transparent, user-driven platform that could handle high-resolution image uploads, real-time messaging between buyers and sellers, and verified user listings.",
    solution: "I architected the mobile application using Flutter, implementing a clean architecture pattern to ensure maintainability. We integrated Firebase for real-time updates and secure authentication.",
    contributions: [
      {
        title: "Image Processing",
        icon: Layers,
        description: "Implemented on-device image compression to ensure fast uploads even on limited bandwidth.",
      },
      {
        title: "Real-time Chat",
        icon: Zap,
        description: "Built a robust messaging system using Firebase Cloud Firestore for instant buyer-seller communication.",
      },
      {
        title: "Verified Listings",
        icon: ShieldCheck,
        description: "Engineered a multi-step verification workflow to ensure the authenticity of property listings.",
      },
    ],
    techStack: ["Flutter", "Riverpod", "Firebase", "Clean Architecture", "REST API"],
    image: "/icons/Casa.png",
    playStore: "https://play.google.com/store/apps/details?id=com.origin.casa_mobile",
    screenshots: [
      "/images/casa/casa 1.png",
      "/images/casa/casa 2.png",
      "/images/casa/casa 3.png",
      "/images/casa/casa 4.png",
      "/images/casa/casa 5.png",
      "/images/casa/casa 6.png",
      "/images/casa/casa 7.png",
    ]
  },
  "epsira": {
    name: "EPSIRA Digital Hub",
    category: "Digital Publication • Web Platform",
    overview: "A comprehensive platform designed to professionalize and scale political science in Ethiopia with digital publication engine, membership management, and event portals.",
    stats: [
      { label: "Journal Issues", value: "50+" },
      { label: "Member Growth", value: "300%" },
      { label: "Event Bookings", value: "1.2k" },
      { label: "Platform Uptime", value: "99.9%" },
    ],
    challenge: "The association needed a centralized hub that could manage scholarly publications, handle complex membership tiers, and facilitate national conference registrations all in one place.",
    solution: "We built a modern web platform using Next.js and Firebase, featuring a custom CMS for journal management and a robust authentication system for multi-tier memberships.",
    contributions: [
      {
        title: "Publication Engine",
        icon: Code,
        description: "Developed a custom CMS for scholarly journals with support for PDF indexing and metadata management.",
      },
      {
        title: "Membership Portal",
        icon: Shield,
        description: "Architected a multi-tier membership system with automated billing and secure directory access.",
      },
      {
        title: "Event Hub",
        icon: Zap,
        description: "Integrated an end-to-end event management system with registration tracking and digital certificate issuance.",
      },
    ],
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Vercel"],
    image: "/icons/epsira_website.png",
    liveUrl: "https://epsira.vercel.app/",
    screenshots: [
      "/images/Epa/epa-1.jpg",
      "/images/Epa/epa-2.jpg",
      "/images/Epa/epa-3.jpg",
      "/images/Epa/epa-4.jpg",
      "/images/Epa/epa-5.jpg",
      "/images/Epa/epa-6.jpg",
      "/images/Epa/epa-7.jpg",
    ]
  },
  "reviewers-app": {
    name: "The Reviewers App",
    category: "Entertainment • Mobile App",
    overview: "The Reviewers App is a sophisticated Flutter application designed for cinephiles, offering a blend of movie discovery, curated reviews, and AI-powered recommendations. It serves as a central hub for both mainstream international cinema and specialized content, such as Amharic films.",
    challenge: "The challenge was to create a unified experience that bridges the gap between watching trailers and tracking digital releases, while integrating advanced AI for personalized discovery and supporting local cinema.",
    solution: "I implemented a robust architecture using Riverpod and GoRouter, integrated Google's Gemini AI for the movie chat, and built a proactive notification system using Firebase Messaging.",
    contributions: [
      {
        title: "AI Integration",
        icon: Cpu,
        description: "Implemented a Gemini-powered chat interface for personalized movie recommendations based on user mood and taste.",
      },
      {
        title: "Release Tracker",
        icon: Zap,
        description: "Developed a proactive notification system with countdown timers for digital movie releases.",
      },
      {
        title: "Architecture",
        icon: Shield,
        description: "Built with Riverpod and Clean Architecture for a scalable and maintainable codebase.",
      },
    ],
    techStack: ["Flutter", "Riverpod", "Gemini AI", "Firebase", "Hive", "Dio", "TMDB API"],
    image: "/images/reviewers/reviewers-logo.png",
    screenshots: [
      "/images/reviewers/reviewers-1.png",
      "/images/reviewers/reviewers-2.png",
      "/images/reviewers/reviewers-3.png",
      "/images/reviewers/reviewers-4.png",
      "/images/reviewers/reviewers-5.png",
      "/images/reviewers/reviewers-6.png",
      "/images/reviewers/reviewers-7.png",
      "/images/reviewers/reviewers-8.png",
    ]
  },
  "finpilot": {
    name: "FinPilot",
    category: "Finance • Mobile App",
    overview: "FinPilot is an intelligent, AI-powered financial management application designed to simplify personal finance by automatically tracking transactions via SMS parsing and providing Gemini-driven insights through a sleek interface.",
    challenge: "The primary challenge was developing a reliable and secure SMS parsing engine that could handle various bank formats and languages while maintaining user privacy and providing actionable financial advice through AI.",
    solution: "I built a regex-based extraction engine optimized for local Ethiopian banks and integrated Gemini 1.5 Flash for proactive financial insights. The app uses SQLite for secure, local-first data persistence.",
    contributions: [
      {
        title: "SMS Engine",
        icon: Cpu,
        description: "Engineered a sophisticated regex-based parser that extracts transaction details from bank SMS in real-time.",
      },
      {
        title: "FinPilot AI",
        icon: Zap,
        description: "Integrated Gemini 1.5 Flash to provide context-aware financial advice and automated insight cards.",
      },
      {
        title: "Analytics",
        icon: Gauge,
        description: "Developed custom-painted visual charts and a glassmorphism-based dashboard for advanced financial tracking.",
      },
    ],
    techStack: ["Flutter", "Riverpod", "Gemini AI", "SQLite", "GoRouter", "Telephony API"],
    image: "/images/finpilot/finpilot_logo.png",
    screenshots: [
      "/images/finpilot/finpilot.png",
      "/images/finpilot/finpilot-2.png",
      "/images/finpilot/finpilot-3.png",
      "/images/finpilot/finpilot-4.png",
      "/images/finpilot/finpilot-5.png",
    ]
  },
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-24">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                    {project.category}
                  </span>
                  <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                    {project.name}
                  </h1>
                </div>
                <p className="text-white/40 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  {project.overview}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {project.playStore && (
                  <Button asChild className="rounded-2xl h-14 px-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white">
                    <Link href={project.playStore} target="_blank">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Get it on Google Play
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="rounded-2xl h-14 px-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white">
                    <Link href={project.liveUrl} target="_blank">
                      <Globe className="mr-2 h-5 w-5" />
                      Visit Live Website
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            {"stats" in project && project.stats && (project.stats as any[]).length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden mb-32">
                {(project.stats as any[]).map((stat) => (
                  <div key={stat.label} className="bg-black p-8 lg:p-12 text-center">
                    <div className="text-3xl lg:text-5xl font-black text-white mb-2 italic">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Visuals */}
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 p-12 lg:p-24 mb-32">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill 
                  className="object-contain opacity-80"
                />
              </div>
            </div>

            {/* Screenshot Carousel if available */}
            {"screenshots" in project && project.screenshots && (
              <div className="space-y-16 mb-32">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-white">
                      Product <span className="text-primary italic">Interface.</span>
                    </h2>
                    <p className="text-white/40 text-lg leading-relaxed">
                      Explore the application through an interactive showcase of its core features, design system, and user experience.
                    </p>
                  </div>
                </div>

                <div className="relative group/carousel">
                  <Swiper
                    modules={[Autoplay, Pagination, SwiperNavigation]}
                    spaceBetween={32}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet !bg-white/20',
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
                    }}
                    navigation={true}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="!pb-16"
                  >
                    {(project.screenshots as string[]).map((screenshot, index) => (
                      <SwiperSlide key={index}>
                        <div 
                          className={`relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 group transition-all duration-700 hover:border-primary/20 hover:shadow-[0_0_80px_rgba(var(--primary),0.1)] ${
                            project.category.toLowerCase().includes("web") ? "aspect-video" : "aspect-[9/19.5]"
                          }`}
                        >
                          <Image 
                            src={screenshot} 
                            alt={`${project.name} screenshot ${index + 1}`} 
                            fill 
                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          
                          {/* Decorative border glow */}
                          <div className="absolute inset-0 border border-white/10 rounded-[2rem] lg:rounded-[3rem] pointer-events-none group-hover:border-primary/30 transition-colors duration-700" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Custom Navigation Styles via Global CSS or Inline */}
                  <style jsx global>{`
                    .swiper-button-next, .swiper-button-prev {
                      color: white !important;
                      background: rgba(255,255,255,0.05);
                      width: 50px !important;
                      height: 50px !important;
                      border-radius: 50%;
                      border: 1px solid rgba(255,255,255,0.1);
                      backdrop-filter: blur(10px);
                      transition: all 0.3s ease;
                    }
                    .swiper-button-next:after, .swiper-button-prev:after {
                      font-size: 18px !important;
                      font-weight: bold;
                    }
                    .swiper-button-next:hover, .swiper-button-prev:hover {
                      background: var(--primary);
                      border-color: var(--primary);
                      color: black !important;
                    }
                    .swiper-pagination-bullet {
                      transition: all 0.3s ease;
                      width: 12px;
                      height: 4px;
                      border-radius: 2px;
                    }
                    .swiper-pagination-bullet-active {
                      width: 32px;
                    }
                  `}</style>
                </div>
              </div>
            )}

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Layers className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">The Challenge</h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {project.challenge}
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Complex data synchronization
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    High-availability requirements
                  </li>
                </ul>
              </div>

              <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Zap className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tight">The Solution</h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {project.solution}
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Clean Architecture implementation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Optimized networking layer
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Contributions */}
            <div className="space-y-16 mb-32">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
                Core <span className="text-primary italic">Contributions.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.contributions.map((contribution) => (
                  <div key={contribution.title} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all group text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      <contribution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 italic">{contribution.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {contribution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight text-white">The Tech Stack</h2>
                <p className="text-white/40">Leveraging cutting-edge technologies to deliver a fluid and secure experience.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-8 py-3 rounded-2xl bg-white/5 text-white/60 border-none font-bold text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
