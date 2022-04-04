import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const eduRef = useRef<HTMLDivElement>(null);
  const isEduOnScreen = useOnScreen(eduRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    aboutSection ? onSectionChange!("who am i?") : onSectionChange!("");
  }, [aboutSection]);

  // Animation variants
  const leftVariants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    top: {
      x: -100,
      opacity: 0,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section ref={sectionRef} id="whoami" className="section">
      <RoughNotationGroup show={isOnScreen}>
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
          >
            <h2 className="section-heading">Who am I?</h2>
          </RoughNotation>
        </div>
        <div className="md:flex md:space-x-8">
          <motion.div
            className="basis-1/2 xl:basis-3/5"
            initial="top"
            animate={`${isSecOnScreen && "visible"}`}
            variants={leftVariants}
            transition={{ duration: 0.75 }}
          >
            <p className="my-2">
              Hello, my name's Sat Naing. I've graduated from{" "}
              <a href="https://www.napier.ac.uk/" className="link">
                Edinburgh Napier University
              </a>
              , majoring in Bachelor of Science (Hons) in Computing. I studied
              at{" "}
              <a href="https://imu.edu.mm/" className="link">
                Info Myanmar University
              </a>{" "}
              specializing in Software Engineering.
            </p>
            <p className="my-2">
              I have over 2 and a half years of experience working with web
              application development_ including both frontend and backend. I'm
              currently working as a lead developer at a Singapore company.
            </p>
            <span>
              Here are some technologies I've been working with recently
            </span>
            <div className="flex my-4" ref={elementRef}>
              <ul
                role="list"
                className="marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-5 space-y-3"
              >
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React, NextJS</li>
                <li>Prisma</li>
                <li>PostgreSQL</li>
              </ul>
              <ul
                role="list"
                className="marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-20 space-y-3"
              >
                <li>PHP</li>
                <li>CodeIgniter</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="basis-1/2 xl:basis-2/5"
            ref={eduRef}
            variants={container}
            initial="hidden"
            animate={`${isEduOnScreen && "show"}`}
          >
            <div className="text-center md:sr-only">
              <RoughNotation
                type="underline"
                color={`${
                  theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"
                }`}
                strokeWidth={2}
                order={2}
              >
                <h3 className="text-xl font-medium text-marrsgreen dark:text-carrigreen inline-block mt-12 mb-6">
                  My Education Background
                </h3>
              </RoughNotation>
            </div>
            {educationInfo.map((edu) => (
              <motion.div
                className="mb-4"
                key={edu.id}
                variants={item}
                transition={{ duration: 0.75 }}
              >
                <h4 className="text-marrsgreen dark:text-carrigreen text-lg font-medium">
                  {edu.title}
                </h4>
                <span className="text-slate-500 dark:text-slate-200 italic">
                  {edu.subTitle}
                </span>
                <ul
                  role="list"
                  className="marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-6 space-y-1 mt-1"
                >
                  {edu.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RoughNotationGroup>
    </section>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "B.Sc (Hons) in Computing",
    subTitle: "Edinburgh Napier University | 2018 ~ 2019",
    list: [
      "Studied computer science, software development, DevOps",
      "Graduated with First Class Honours",
      "Got merit in 7 modules out of 9",
    ],
  },
  {
    id: 2,
    title: "HND in Computing & System Development",
    subTitle: "Info Myanmar University | 2016 - 2018",
    list: [
      "Studied modules specializing in software development",
      "Passed HND with overall Merit",
    ],
  },
  {
    id: 3,
    title: "IELTS",
    subTitle: "British Council Myanmar | 2017",
    list: ["Got overall band score 6.5 and at least 6 in each skill"],
  },
  {
    id: 4,
    title: "Myanmar Matriculation Exam",
    subTitle: "B.E.H.S (2) Thingangyun | 2015",
    list: ["Passed with 3 Distinctions"],
  },
];

export default AboutSection;
