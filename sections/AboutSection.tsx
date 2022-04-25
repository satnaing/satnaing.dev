import { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import satNaing from "../public/satnaing-about.jpg";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(".profile-picture"),
      { y: -50 },
      {
        scrollTrigger: {
          trigger: q(".profile-picture"),
          // toggleActions: "start pause resume reverse",\
          start: "top 60%",
          scrub: true,
          // markers: true,
        },
        y: 50,
        duration: 3,
      }
    );
  }, [q]);

  const { theme } = useTheme();

  const eduRef = useRef<HTMLDivElement>(null);
  const isEduOnScreen = useOnScreen(eduRef);

  // const elementRef = useRef<HTMLDivElement>(null);
  // const isOnScreen = useOnScreen(elementRef);

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
    <div className="bg-white dark:bg-[#1B2731]">
      <section ref={sectionRef} id="whoami" className="section">
        <RoughNotationGroup>
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
            <div className="basis-2/5 lg:basis-1/2 xl:basis-3/5 flex justify-center items-center">
              <div className="relative w-72 ">
                {/* <div className="absolute w-full h-full top-4 left-6 border-2 border-marrsgreen"></div> */}
                <Image
                  src={satNaing}
                  width={1080}
                  height={1348}
                  priority
                  alt="Sat Naing profile picture"
                  className="profile-picture drop-shadow-lg hover:grayscale"
                />
              </div>
            </div>

            <div className="basis-3/5 lg:basis-1/2 xl:basis-2/5" ref={eduRef}>
              {/* <p className="my-2">
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
              </p> */}
              <p className="my-2">
                I have over 2 and a half years of experience working with web
                application development_ including both frontend and backend.
                I'm currently working as a lead developer at a Singapore
                company.
              </p>
              <div className="my-4">Here is my education background.</div>
              {educationInfo.map((edu) => (
                <div className="mb-4" key={edu.id}>
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
                </div>
              ))}
            </div>
          </div>
        </RoughNotationGroup>
      </section>
    </div>
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
    list: ["Got overall band score 6.5."],
  },
];

export default AboutSection;
