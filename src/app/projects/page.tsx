'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/config/projects";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const titleX = useTransform(scrollY, [0, 100], [0, 100]);
  const [activeProject, setActiveProject] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const activeIndex = Math.round(scrollPosition / windowHeight);
      setActiveProject(activeIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory" ref={containerRef}>
      <div className="sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-20">
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link href="/">
              <motion.div
                className="text-xl font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                MH
              </motion.div>
            </Link>
            <motion.h1
              layoutId="nav-projects"
              style={{ x: windowWidth < 768 ? titleX : 0 }}
              className="text-2xl md:text-3xl font-bold inline-block"
            >
              Projects
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Project Counter */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeProject === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Project Counter Display */}
      <div className="fixed bottom-4 left-4 md:left-8 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-mono text-gray-600"
        >
          {String(activeProject + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
        </motion.div>
      </div>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="h-screen flex items-center snap-start relative overflow-hidden"
          initial={{ opacity: index === 0 ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `linear-gradient(135deg, ${project.style.gradient.from} 0%, ${project.style.gradient.via} 50%, ${project.style.gradient.to} 100%)`,
                `linear-gradient(45deg, ${project.style.gradient.to} 0%, ${project.style.gradient.from} 50%, ${project.style.gradient.via} 100%)`,
                `linear-gradient(225deg, ${project.style.gradient.via} 0%, ${project.style.gradient.to} 50%, ${project.style.gradient.from} 100%)`
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <div className="px-4 md:px-20 max-w-7xl mx-auto w-full relative z-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={index === 0 ? { x: 0, opacity: 1 } : undefined}
                whileInView={index !== 0 ? { x: 0, opacity: 1 } : undefined}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-3 md:space-y-6"
              >
                <h2 className="text-2xl md:text-5xl font-bold">{project.title}</h2>
                <p className="text-base md:text-xl text-gray-600">{project.description}</p>
                <p className="text-sm md:text-base text-gray-600">{project.details}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Site
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Project
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={index === 0 ? { x: 0, opacity: 1 } : undefined}
                whileInView={index !== 0 ? { x: 0, opacity: 1 } : undefined}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`${
                  project.isMobile ? "w-[280px] mx-auto" : "w-full max-w-[1000px] mx-auto"
                } relative`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                {project.isMobile && (
                  <div className="absolute -inset-[16px] border-[16px] border-[#1a1a1a] rounded-[4.5rem] pointer-events-none bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[140px] h-[40px] bg-black rounded-b-[20px]"></div>
                    {/* Side Button */}
                    <div className="absolute -right-[16px] top-[140px] w-[4px] h-[70px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-full"></div>
                    {/* Volume Buttons */}
                    <div className="absolute -left-[16px] top-[140px] w-[4px] h-[45px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-full"></div>
                    <div className="absolute -left-[16px] top-[195px] w-[4px] h-[45px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-full"></div>
                    {/* Camera Module */}
                    <div className="absolute -right-[16px] top-[280px] w-[8px] h-[8px] bg-black rounded-full">
                      <div className="absolute inset-0.5 bg-[#2a2a2a] rounded-full"></div>
                    </div>
                    {/* Camera Array */}
                    <div className="absolute -right-[16px] top-[280px] w-[24px] h-[24px] bg-black rounded-full">
                      <div className="absolute inset-1 bg-[#2a2a2a] rounded-full"></div>
                      <div className="absolute inset-2 bg-black rounded-full"></div>
                    </div>
                    {/* Flash */}
                    <div className="absolute -right-[16px] top-[310px] w-[4px] h-[4px] bg-[#2a2a2a] rounded-full"></div>
                  </div>
                )}
                {!project.isMobile && (
                  <div className="absolute -inset-[20px] border-[20px] border-[#1a1a1a] rounded-[1rem] pointer-events-none bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-2xl">
                    {/* Monitor Stand */}
                    <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2 w-[120px] h-[40px] bg-[#1a1a1a] rounded-b-lg"></div>
                    {/* Monitor Base */}
                    <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[40px] bg-[#1a1a1a] rounded-lg"></div>
                    {/* Webcam */}
                    <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-black rounded-full">
                      <div className="absolute inset-0.5 bg-[#2a2a2a] rounded-full"></div>
                    </div>
                  </div>
                )}
                <div className={`${
                  project.isMobile ? "aspect-[9/19.2] rounded-[4rem]" : "aspect-video rounded-lg"
                } bg-gray-100 cursor-pointer overflow-hidden relative group`}>
                  {project.videoUrl ? (
                    <>
                      <video
                        src={project.videoUrl}
                        className={`w-full h-full ${project.isMobile ? 'object-contain' : 'object-contain'}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      {/* Muted symbol overlay */}
                      <div className="absolute bottom-4 right-4">
                        <div className="p-2 rounded-full bg-black/50">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828 2.828M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      {/* Unmute button on hover */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <motion.button
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            const video = e.currentTarget.parentElement?.parentElement?.querySelector('video') as HTMLVideoElement;
                            if (video) {
                              video.muted = !video.muted;
                            }
                          }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828 2.828M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </motion.button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Project Preview
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}