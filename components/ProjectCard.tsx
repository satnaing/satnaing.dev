import { useRef } from "react";
import { motion } from "framer-motion";

import useOnScreen from "hooks/useOnScreen";
import LinkButton from "./LinkButton";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const right = index % 2 === 0 ? true : false;
  const { title, type, image, desc, tags, liveUrl, codeUrl } = project;

  const descVariants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    top: {
      x: right ? 100 : -100,
      opacity: 0,
    },
  };

  const item = {
    hidden: { x: right ? 100 : -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={elementRef}
      // variants={item}
      initial="top"
      animate={`${isOnScreen && "visible"}`}
      variants={descVariants}
      transition={{ delay: 0.5, duration: 0.75 }}
      className="my-10 md:mb-20 md:grid md:gap-x-8 md:grid-cols-2 md:grid-rows-4"
    >
      <div
        className={`heading md:row-span-1 ${
          right ? "md:text-right md:col-start-2" : "md:col-start-1"
        }`}
      >
        <h3 className="text-marrsgreen dark:text-carrigreen text-lg sm:text-xl lg:text-2xl font-medium">
          {title}
        </h3>
        <span className="font-medium">{type}</span>
      </div>
      <div
        className={`shadow-lg bg-bglight dark:bg-gray-700 mt-2 mb-4 ${
          right ? "md:col-start-1" : "md:col-start-2"
        } md:row-start-1 md:col-span-1 md:row-span-4 flex items-center`}
      >
        {image}
      </div>
      <div
        className={`info ${
          right ? "md:col-start-2" : "md:col-start-1"
        } md:row-start-2 md:row-span-3`}
      >
        <div className="bg-cardlight dark:bg-carddark p-4 rounded">{desc}</div>
        <div
          className={`flex flex-wrap ${
            right ? "md:flex-row-reverse" : ""
          } mt-2 mb-4 md:mt-4 md:mb-6 text-sm`}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className={`mr-5 ${right ? "md:mr-0 md:ml-5" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`${right ? "md:text-right" : ""}`}>
          <LinkButton href={liveUrl} targetBlank>
            View live
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block text-textlight dark:text-bgdark ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </LinkButton>

          <LinkButton href={codeUrl} className="ml-2" outline targetBlank>
            View code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-1 text-marrsgreen dark:text-carrigreen"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
