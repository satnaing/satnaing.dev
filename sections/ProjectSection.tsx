import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import haruFashion from "public/projects/haru-fashion.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/projects/astro-paper.webp";
import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
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
    title: "AstroPaper",
    type: "Frontend",
    image: (
      <Image
        src={astroPaper}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A minimal, accessible and SEO-friendly Astro blog theme. One of the most starred blog templates built with Astro.",
    tags: ["Astro", "TypeScript", "React", "TailwindCSS"],
    liveUrl: "https://astro-paper.pages.dev/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Terminal Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website in terminal version developed with React and TypeScript. ",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/satnaing/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/satnaing/terminal-portfolio",
  },
  {
    title: "Haru Fashion",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/satnaing/haru-fashion",
  },
  {
    title: "Haru API",
    type: "Backend",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/satnaing/haru-api",
  },
  {
    title: "Next Bookstore",
    type: "Frontend + HeadlessCMS",
    image: (
      <Image
        src={nextBookstore}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An online bookstore developed using NextJS 13 with appDir and StrapiCMS.",
    tags: ["NextJS", "Radix UI ", "TailwindCSS", "TanstackQuery", "StrapiCMS"],
    liveUrl: "https://nextbookstore.vercel.app/",
    codeUrl: "https://github.com/satnaing/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/satnaing/next-bookstore",
  },
  {
    title: "Shadcn Admin",
    type: "Backend",
    image: (
      <Image
        src={shadcnAdmin}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Admin Dashboard UI built with Shadcn and Vite. Built with responsiveness and accessibility in mind.",
    tags: ["ShadcnUI", "Vite", "React Router", "TypeScript"],
    liveUrl: "https://shadcn-admin.netlify.app/",
    codeUrl: "https://github.com/satnaing/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/shadcn-admin",
  },
];

export default ProjectSection;
