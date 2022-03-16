import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { RoughNotation } from "react-rough-notation";
import LinkButton from "../components/LinkButton";

const ContactSection: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  return (
    <section id="contact" className="section text-center">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color="rgb(0, 140, 140)"
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg" ref={elementRef}>
          Let's be awesome thgether!
        </h3>
        <p className="mb-6">
          As a dev, I do love coding and always looking for new challenges.
          Thus, if you have some opportunities/challenges or just want to build
          awesome things together, don't hesitate to contact me! My inbox is
          always open.
        </p>
        <LinkButton href="mailto:contact@satnaing.dev">
          Get in touch!
        </LinkButton>
      </div>
    </section>
  );
};

export default ContactSection;
