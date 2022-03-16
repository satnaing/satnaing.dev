import Image from "next/image";
import LinkButton from "../components/LinkButton";

import profilePic from "../public/satnaing.png";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-16 py-8 px-4">
      <div className="px-10 pb-4">
        <Image src={profilePic} width={1548} height={1733} />
      </div>

      <div>
        <span className="text-marrsgreen">Hi my name is</span>
        <h1 className="text-4xl font-semibold my-1">Sat Naing</h1>
        <span className="text-2xl text-marrsgreen font-medium">
          A Full-stack Developer
        </span>
        <div className="mt-2 my-4">
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
