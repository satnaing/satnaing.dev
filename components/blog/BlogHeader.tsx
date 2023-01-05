import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import useScrollListener from "../../hooks/useScrollListener";

const BlogHeader: React.FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [navClassList, setNavClassList] = useState<any>([]);
  const scroll = useScrollListener();
  const themeBtnRef = useRef<HTMLButtonElement>(null);

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
        className={`lower-glassmorphism bg-bglight dark:bg-bgdark z-30 top-0 shadow-sm fixed duration-400 px-4 sm:px-8 h-16 w-full ${navClassList.join(
          " "
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/blog"
            className="after:content-['blog'] after:bg-bgdark dark:after:bg-bglight after:text-textlight dark:after:text-bgdark after:text-base after:px-2 after:inline-block after:rotate-12 after:absolute after:-right-12 hover:after:rotate-0 relative text-xl sm:text-2xl hover:text-marrsgreen dark:hover:text-carrigreen focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen"
          >
            SatNaing
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
          </Link>
          <nav className="flex items-center">
            <div className="glassmorphism md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none bg-bglight dark:bg-carddark dark:text-textlight w-11/12 rounded drop-shadow-lg md:drop-shadow-none">
              <ul className="flex justify-evenly items-center py-1">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.url}
                    className={`${navLink.text === "Home" ? "md:hidden" : ""}`}
                  >
                    <Link
                      href={navLink.url}
                      className={`text-sm md:text-lg flex flex-col items-center w-[4.5rem] md:w-auto md:mr-6  dark:fill-textlight md:hover:text-marrsgreen md:dark:hover:text-carrigreen link-outline
                        ${
                          router.pathname === navLink.url &&
                          "text-marrsgreen dark:text-carrigreen fill-marrsgreen dark:fill-carrigreen"
                        }`}
                    >
                      <span className="md:hidden">{navLink.svg}</span>
                      <span className="whitespace-nowrap">{navLink.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              ref={themeBtnRef}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              aria-live="polite"
              className="w-8 h-8 rounded-lg flex justify-center items-center link-outline"
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

const navLinks = [
  {
    url: "/blog",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className=""
      >
        <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
      </svg>
    ),
    text: "Home",
  },
  {
    url: "/blog/categories",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className=""
      >
        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
      </svg>
    ),
    text: "Categories",
  },
  {
    url: "/blog/tags",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className=""
      >
        <path d="M20 4H8.515a2 2 0 0 0-1.627.838l-4.701 6.581a.997.997 0 0 0 0 1.162l4.701 6.581A2 2 0 0 0 8.515 20H20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 14H8.515l-4.286-6 4.286-6H20v12z"></path>
      </svg>
    ),
    text: "Tags",
  },
  {
    url: "/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className=""
      >
        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
      </svg>
    ),
    text: "Portfolio",
  },
];

export default BlogHeader;
