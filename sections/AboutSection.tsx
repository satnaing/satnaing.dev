import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const AboutSection: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  return (
    <section id="whoami" className="my-5 pt-14 pb-20 px-4">
      <RoughNotationGroup show={isOnScreen}>
        <div className="text-center">
          <RoughNotation
            type="underline"
            color="rgb(0, 140, 140)"
            strokeWidth={2}
            order={1}
          >
            <h2 className="text-2xl inline-block my-6 font-medium">
              Who am I?
            </h2>
          </RoughNotation>
        </div>
        <p className="my-2">
          Hello, my name's Sat Naing. I've graduated from Edinburgh Napier
          University, majoring in Bachelor of Science (Hons) in Computing. I
          studied at Info Myanmar University specializing in Software
          Engineering.
        </p>
        <p className="my-2">
          I have over 2 and a helf years of experience working with web
          application development_ including both frontend and backend. I'm
          currently working as{" "}
          <RoughNotation type="highlight" color="#BFFCFB" order="2">
            <span className="whitespace-nowrap">a lead developer</span>
          </RoughNotation>{" "}
          in a Singapore company.
        </p>
        <span>Here are some technologies I've been working with recently</span>
        <div className="flex my-4" ref={elementRef}>
          <ul
            role="list"
            className="marker:text-marrsgreen list-disc pl-5 space-y-3"
          >
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React, NextJS</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
          </ul>
          <ul
            role="list"
            className="marker:text-marrsgreen list-disc pl-20 space-y-3"
          >
            <li>PHP</li>
            <li>CodeIgniter</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="text-center">
          <RoughNotation
            type="underline"
            color="rgb(0, 140, 140)"
            strokeWidth={2}
            order={3}
          >
            <h3 className="text-xl font-medium text-marrsgreen inline-block mt-12 mb-6">
              My Education Background
            </h3>
          </RoughNotation>
        </div>
        {educationInfo.map((edu) => (
          <div className="mb-4">
            <h4 className="text-marrsgreen text-lg font-medium">{edu.title}</h4>
            <span className="text-slate-500 italic">{edu.subTitle}</span>
            <ul
              role="list"
              className="marker:text-marrsgreen list-disc pl-6 space-y-1 mt-1"
            >
              {edu.list.map((li) => (
                <li>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </RoughNotationGroup>
    </section>
  );
};

const educationInfo = [
  {
    title: "B.Sc (Hons) in Computing",
    subTitle: "Edinburgh Napier University | 2018 ~ 2019",
    list: [
      "Studied computer science, software development, DevOps",
      "Graduated with First Class Honours",
      "Got merit in 7 modules out of 9",
    ],
  },
  {
    title: "HND in Computing & System Development",
    subTitle: "Info Myanmar University | 2016 - 2018",
    list: [
      "Studied modules specializing in software development",
      "Passed HND with overall Merit",
    ],
  },
  {
    title: "IELTS",
    subTitle: "British Council Myanmar | 2017",
    list: ["Got overall band score 6.5 and at least 6 in each skill"],
  },
  {
    title: "Myanmar Matriculation Exam",
    subTitle: "B.E.H.S (2) Thingangyun | 2015",
    list: ["Passed with 3 Distinctions"],
  },
];

export default AboutSection;
