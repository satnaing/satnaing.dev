import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import useScrollListener from "../hooks/useScrollListener";

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

const Header: NextPage = () => {
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
    <header>
      <div
        className={`bg-bglight z-30 top-0 drop-shadow-md fixed transition-transform duration-400 px-4 h-16 w-full flex items-center justify-between ${navClassList.join(
          " "
        )}`}
      >
        <Link href="/">
          <a className="text-xl">
            SatNaing<span className="text-marrsgreen">.dev</span>
          </a>
        </Link>
        <button type="button" aria-label="change theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
          </svg>
        </button>
      </div>

      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-bglight w-11/12 rounded drop-shadow-lg">
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

      <button type="button" className="hidden" aria-label="change theme">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
