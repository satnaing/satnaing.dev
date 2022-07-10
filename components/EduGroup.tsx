import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  edu: {
    id: number;
    title: string;
    subTitle: string;
    list: string[];
  };
};

const EduGroup: React.FC<Props> = ({ edu }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `50% bottom`,
      },
    });

    tl.fromTo(
      q(".edu-heading"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(
        q(".edu-info"),
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<25%"
      )
      .fromTo(
        q(".edu-list"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<10%"
      );
  }, []);

  return (
    <div className="edu-group mb-4" ref={sectionRef}>
      <div className="overflow-hidden">
        <h3
          className={`edu-heading text-marrsgreen dark:text-carrigreen text-lg font-medium`}
        >
          {edu.title}
        </h3>
      </div>
      <div className="overflow-hidden">
        <span className={`edu-info text-slate-500 dark:text-slate-200 italic`}>
          {edu.subTitle}
        </span>
      </div>
      <ul
        role="list"
        className=" marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-6 space-y-1 mt-1"
      >
        {edu.list.map((li) => (
          <li key={li} className={`edu-list`}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EduGroup;
