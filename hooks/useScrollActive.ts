import { useState, useEffect, RefObject } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement>) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      const sectionHeight = ref.current?.offsetHeight;
      const sectionTop = ref.current?.offsetTop! - 80;
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + (sectionHeight as number)
      ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    scrollActive();
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return state;
}
