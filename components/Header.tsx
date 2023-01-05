import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import gsap from "gsap";

import useScrollListener from "hooks/useScrollListener";
import { useSection } from "context/section";

const navLinks = [
  {
    url: "#whoami",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
      </svg>
    ),
    text: "Who am i?",
  },
  {
    url: "#projects",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
      </svg>
    ),
    text: "Projects",
  },
  {
    url: "#blog",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z" />
        <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z" />
      </svg>
    ),
    text: "Blog",
  },
  {
    url: "#contact",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z" />
      </svg>
    ),
    text: "Contact",
  },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { currentSection } = useSection();
  const [navClassList, setNavClassList] = useState<any>([]);
  const scroll = useScrollListener();

  const mainRef = useRef(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 1, ease: "Power0.easeNone" }
    );
  }, []);

  // update theme button aria-label according to theme value
  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("!shadow-md");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <header className="md:flex">
      <div
        ref={mainRef}
        className={`main-nav lower-glassmorphism bg-bglight dark:bg-bgdark z-30 top-0 shadow-sm fixed duration-400 px-4 sm:px-8 h-16 w-full ${navClassList.join(
          " "
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl md:hover:text-marrsgreen dark:md:hover:text-carrigreen focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen"
          >
            SatNaing
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
          </Link>
          <nav className="flex items-center">
            <div className="glassmorphism md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none bg-bglight dark:bg-carddark dark:text-textlight w-11/12 rounded drop-shadow-lg md:drop-shadow-none">
              <ul className="flex justify-evenly items-center py-1">
                {navLinks.map((navLink) => (
                  <li key={navLink.url}>
                    <a
                      href={navLink.url}
                      className={`text-sm md:text-lg flex flex-col items-center w-[4.5rem] md:w-auto dark:fill-textlight md:mr-6 md:hover:text-marrsgreen md:dark:hover:text-carrigreen link-outline ${
                        currentSection === navLink.text.toLocaleLowerCase() &&
                        "text-marrsgreen dark:text-carrigreen fill-marrsgreen dark:fill-carrigreen"
                      }`}
                    >
                      <span className="md:hidden">{navLink.svg}</span>
                      <span className="whitespace-nowrap">{navLink.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              ref={themeBtnRef}
              // aria-label={theme === "dark" ? "dark" : "light"}
              aria-live="polite"
              className="w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-textlight hidden dark:inline-block transform scale-110 md:dark:hover:fill-carrigreen"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="dark:hidden transform scale-90 md:hover:fill-marrsgreen "
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
