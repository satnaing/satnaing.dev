import Image from "next/image";
import { useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import useOnScreen from "../hooks/useOnScreen";
import ProjectCard from "../components/ProjectCard";

import haruFashion from "../public/projects/haru-fashion.png";
import tipCalculator from "../public/projects/tip-calculator.png";

const ProjectSection: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  return (
    <section id="projects" className="section">
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
      <span className="text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} index={index} project={project} />
      ))}
      <div className="text-center">
        Other projects can be explored in my{" "}
        <a
          href="https://github.com/satnaing"
          className="font-medium underline text-marrsgreen dark:text-carrigreen"
        >
          Github Profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Haru Fashion",
    type: "Frontend",
    image: <Image src={haruFashion} width={1440} height={685} />,
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
  },
  {
    title: "Haru API",
    type: "Backend",
    image: <Image src={haruFashion} width={1440} height={685} />,
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
  },
  {
    title: "Tip Calculator",
    type: "Frontend",
    image: <Image src={tipCalculator} width={1440} height={685} />,
    desc: "A Progressive Web App (PWA) that can calculate the tip amount and each user’s amount to pay. This app is written in Scss and React with TypeScript.",
    tags: ["React", "TypeScript", "Scss"],
    liveUrl: "https://splitter-sn.netlify.app/",
    codeUrl: "https://github.com/satnaing/tip-calculator",
  },
];

export default ProjectSection;
