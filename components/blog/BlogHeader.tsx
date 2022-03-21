import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useScrollListener from "../../hooks/useScrollListener";

const BlogHeader: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [navClassList, setNavClassList] = useState<any>([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("transform -translate-y-full drop-shadow-none");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <header className="md:flex">
      <div
        className={`bg-bglight dark:bg-bgdark z-30 top-0 drop-shadow-md fixed transition-transform duration-400 px-4 sm:px-8 h-16 w-full ${navClassList.join(
          " "
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/blog">
            <a className="after:content-['blog'] after:bg-bgdark dark:after:bg-bglight after:text-textlight dark:after:text-bgdark after:text-base after:px-2 after:inline-block after:rotate-12 after:absolute after:-right-12 hover:after:rotate-0 relative text-xl sm:text-2xl hover:text-marrsgreen dark:hover:text-carrigreen focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen">
              SatNaing
              <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
            </a>
          </Link>
          <div className="flex">
            <nav className="hidden md:block">
              <ul className="flex">
                {navLinks.map((navLink) => (
                  <li key={navLink.url}>
                    <Link href={navLink.url}>
                      <a className="text-lg flex flex-col items-center mr-6 hover:text-marrsgreen dark:hover:text-carrigreen link-outline">
                        {navLink.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="change theme"
              className="w-8 h-8 rounded-lg flex justify-center items-center link-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-textlight hidden dark:inline-block transform scale-110 dark:hover:fill-carrigreen"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="dark:hidden transform scale-90 hover:fill-marrsgreen "
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="fixed md:hidden bottom-4 z-30 left-1/2 transform -translate-x-1/2 bg-bglight dark:bg-carddark dark:text-textlight w-11/12 rounded drop-shadow-lg">
        <ul className="flex justify-evenly items-center py-1">
          {navLinks.map((navLink) => (
            <li key={navLink.url}>
              <a
                href={navLink.url}
                className="text-sm flex flex-col items-center w-[4.5rem]"
              >
                {navLink.svg}
                {navLink.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const navLinks = [
  {
    url: "/blog/categories",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-textlight"
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
        className="dark:fill-textlight"
      >
        <path d="M20 4H8.515a2 2 0 0 0-1.627.838l-4.701 6.581a.997.997 0 0 0 0 1.162l4.701 6.581A2 2 0 0 0 8.515 20H20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 14H8.515l-4.286-6 4.286-6H20v12z"></path>
      </svg>
    ),
    text: "Tags",
  },
];

export default BlogHeader;
