import Image from "next/image";
import LinkButton from "../components/LinkButton";

import profilePic from "../public/satnaing.png";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-16 pt-8 sm:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-screen mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse">
      <div className="px-10 xs:px-28 sm:px-0 pb-4 mx-auto sm:w-2/5 lg:p-0 lg:basis-1/3">
        <Image src={profilePic} width={1548} height={1733} />
      </div>

      <div className="lg:basis-2/3">
        <span className="text-marrsgreen dark:text-carrigreen">
          Hi my name is
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
          Sat Naing
        </h1>
        <span className="text-2xl md:text-3xl lg:text-5xl md:block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
          A Full-stack Developer
        </span>
        <div className="mt-2 my-4 md:mb-8">
          I craft things for user-interface (front-end) and I build things for
          api & backend stuffs. <br /> Sometimes, I make UI/UX design in Figma
          and Photoshop too. <br />
          Currently, I'm into React, NextJs, Express and PostgreSQL.
        </div>
        <LinkButton href="mailto:contact@satnaing.dev">Contact me!</LinkButton>
      </div>
    </section>
  );
};

export default HeroSection;
