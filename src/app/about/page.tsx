"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();


  const logoOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const titleX = useTransform(scrollY, [0, 50], [0, 60]);

  return (
    <div className="pt-20 px-4 md:px-20 max-w-4xl mx-auto" ref={containerRef}>
      <div className="sticky top-0 bg-white  py-4 z-10">
        <div className="flex items-center relative  ">
          <motion.div
            style={{ opacity: logoOpacity }}
            className="absolute left-0"
          >
            <Link href="/">
              <motion.div
                className="text-xl font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                MH
              </motion.div>
            </Link>
          </motion.div>

          <motion.h1
            layoutId="nav-about"
            style={{ x: titleX }}
            className="text-3xl font-bold inline-block "
          >
            About
          </motion.h1>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert"
        >
          <p>
            I'm a Software Developer based in Lawndale, California, with a
            passion for building innovative web and mobile applications. My
            journey in software development began in 2017, and since then, I've
            grown from learning the basics of web development to leading
            development teams and creating full-stack applications.
          </p>

          <p>
            As a full-stack developer, I've had the opportunity to work on
            diverse projects, from native mobile applications to complex web
            platforms. At CodePlan, I specialized in implementing payment
            processes and state management solutions, while continuously
            improving user experiences through thoughtful feature development.
          </p>

          <p>
            My experience as a Team Lead at Bloom Institute of Technology was
            particularly rewarding, where I guided a team of 20 full-stack
            developers in a remote environment. This role allowed me to combine
            my technical expertise with my passion for mentoring, helping others
            grow while maintaining high-quality project deliverables.
          </p>

          <p>
            Currently, I'm focused on self-employed development work, taking on
            challenging projects that push the boundaries of what's possible
            with modern web technologies. I work with a variety of tools and
            frameworks including React Native, TypeScript, Node.js, and various
            cloud services to create scalable, user-friendly applications.
          </p>

          <p>
            When I'm not coding, you'll find me playing guitar or exploring new
            technologies. I believe in continuous learning and staying current
            with the latest developments in the tech industry, always looking
            for ways to improve and innovate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mt-8"
        >
          <a
            href="https://linkedin.com/in/imMichaelHarris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/imMichaelHarris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </a>
          <a
            href="https://x.com/hypedupharris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow on X
          </a>
        </motion.div>
      </div>
    </div>
  );
}
