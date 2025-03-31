"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const skillCategories = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
    "Sass",
  ],
  "Frontend Frameworks & Libraries": [
    "React JS",
    "Next.js",
    "Redux",
    "Material UI",
    "Bootstrap",
    "Semantic UI",
    "Tailwind CSS",
  ],
  "Backend & Databases": [
    "Node.js",
    "Express",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "SQL",
  ],
  "Mobile Development": ["React Native", "Expo"],
  "Development Tools & Other": [
    "Git",
    "Docker",
    "Appwrite",

    "REST APIs",
    "GraphQL APIs",
    "Jest",

    "Testing",

    "Agile",
    "Scrum",
  ],
};

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const titleX = useTransform(scrollY, [0, 50], [0, 60]);

  return (
    <div
      className="pt-20 px-4 md:px-20 max-w-4xl mx-auto pb-2"
      ref={containerRef}
    >
      <div className="sticky md:relative top-0 bg-white py-4 z-10">
        <div className="flex items-center relative">
          <motion.div
            style={{ opacity: logoOpacity }}
            className="absolute left-0 md:hidden "
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
            layoutId="nav-skills"
            style={{ x: titleX }}
            className="text-3xl font-bold inline-block"
          >
            Skills
          </motion.h1>
        </div>
      </div>

      <div className="space-y-12 mt-8">
        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    className="px-4 py-2 bg-gray-50 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
