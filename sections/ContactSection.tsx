import { useRef } from "react";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import useOnScreen from "../hooks/useOnScreen";
import LinkButton from "../components/LinkButton";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();

  const descVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.75 },
    },
    right: {
      x: 50,
      opacity: 0,
    },
    left: {
      x: -50,
      opacity: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[80vh] text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <motion.h3
          className="font-medium text-lg mb-2 md:text-3xl"
          ref={elementRef}
          initial="right"
          animate={`${isSecOnScreen && "visible"}`}
          variants={descVariants}
        >
          Let's be awesome together!
        </motion.h3>
        <motion.p
          className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose"
          initial="left"
          animate={`${isSecOnScreen && "visible"}`}
          variants={descVariants}
        >
          As a dev, I do love coding and always looking for new challenges.
          Thus, if you have some opportunities/challenges or just want to build
          awesome things together, don't hesitate to contact me! My inbox is
          always open.
        </motion.p>
        <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          Get in touch!
        </LinkButton>
      </div>
    </section>
  );
};

export default ContactSection;
