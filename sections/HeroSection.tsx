import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

import LinkButton from "../components/LinkButton";
import useOnScreen from "hooks/useOnScreen";

import profilePic from "../public/satnaing.png";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(sectionRef);

  const variants = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    top: {
      y: -30,
      opacity: 0,
    },
    left: {
      x: -100,
      opacity: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 pt-8 sm:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-screen mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
    >
      <motion.div
        initial="top"
        animate={`${isOnScreen && "visible"}`}
        variants={variants}
        transition={{ duration: 0.25 }}
        className="px-10 xs:px-28 sm:px-0 pb-4 mx-auto sm:w-2/5 lg:p-0 lg:basis-1/3"
      >
        <Image
          src={profilePic}
          width={1548}
          height={1733}
          priority
          alt="Sat Naing profile picture"
        />
      </motion.div>

      <motion.div
        initial="left"
        animate={`${isOnScreen && "visible"}`}
        variants={variants}
        transition={{ duration: 0.25 }}
        className="lg:basis-2/3"
      >
        <span className="text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">
          Hi my name is
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
          Sat Naing
        </h1>
        <span className="text-2xl md:text-3xl lg:text-5xl md:block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
          A Full-stack Developer
        </span>
        <div className="mt-2 my-4 md:mb-8">
          <p>
            I'm an independent full-stack developer based in Yangon, Myanmar.
          </p>
          <p>
            I am passionate about writing codes and developing web applications
            to solve <span className="whitespace-nowrap">real-life</span>{" "}
            challenges.
          </p>
          I usually craft front-end with React, NextJS; and I build back-end
          especially using PHP, NodeJS & Express.
        </div>
        <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          Contact me!
        </LinkButton>
      </motion.div>
      <a
        href="#whoami"
        className="group absolute link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
