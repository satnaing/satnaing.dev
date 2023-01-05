import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
};

const Loader: React.FC<Props> = ({ children }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(loadingRef);

    const tl = gsap.timeline({ defaults: { duration: 0.7 } });
    tl.fromTo(q(".loading-text"), { y: 120 }, { y: -10 });
    tl.to(q(".white-bg"), { y: "-100%" }).to(
      q(".dark-bg"),
      { y: "-100%", duration: 0.6 },
      "-=0.6"
    );
  }, []);

  return (
    <div ref={loadingRef} aria-hidden="true">
      <div className="white-bg fixed top-0 left-0 w-full h-screen bg-[#f0f5fa] dark:bg-[#0e141a] z-[9999] flex justify-center items-center">
        <div className="overflow-hidden">
          <span className="loading-text inline-block text-bgdark dark:text-bglight text-4xl sm:text-5xl lg:text-7xl tracking-widest">
            {children}
          </span>
        </div>
      </div>
      <div className="dark-bg fixed top-0 left-0 w-full h-screen bg-marrsgreen dark:bg-carrigreen z-[9998]"></div>
    </div>
  );
};

export default Loader;
