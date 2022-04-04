import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import satnaingBlog from "public/projects/satnaing-blog.png";
import haruFashion from "public/projects/haru-fashion.png";
import haruApi from "public/projects/haru-api.png";
import tipCalculator from "public/projects/tip-calculator.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  // Animation variants
  const descVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    top: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <motion.span
        className="text-center block mb-4"
        ref={elementRef}
        initial="top"
        animate={`${isSecOnScreen && "visible"}`}
        variants={descVariants}
        transition={{ duration: 0.75 }}
      >
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </motion.span>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} project={project} />
      ))}
      <div className="text-center">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/satnaing"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Sat Naing's Blog",
    type: "Frontend",
    image: (
      <Image
        src={satnaingBlog}
        width={1264}
        height={685}
        alt="Sat Naing's Blog"
        className="transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "My personal blog where I can write down my thoughts and experiences. Contents are written in markdown format. Git based Headless CMS called Forestry is used as a CMS.",
    tags: ["Forestry", "TailwindCSS", "TypeScript", "NextJS"],
    liveUrl: "https://satnaing.dev/blog/",
    codeUrl: "https://github.com/satnaing/my-portfolio",
  },
  {
    title: "Haru Fashion",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        width={1440}
        height={685}
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
  },
  {
    title: "Haru API",
    type: "Backend",
    image: (
      <Image
        src={haruApi}
        width={2300}
        height={1431}
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
  },
  {
    title: "Tip Calculator",
    type: "Frontend",
    image: (
      <Image
        src={tipCalculator}
        width={1440}
        height={685}
        alt="Tip Calculator"
        className="transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "A Progressive Web App (PWA) that can calculate the tip amount and each user's amount to pay. This app is written in Scss and React with TypeScript.",
    tags: ["React", "TypeScript", "Scss"],
    liveUrl: "https://splitter-sn.netlify.app/",
    codeUrl: "https://github.com/satnaing/tip-calculator",
  },
];

export default ProjectSection;
