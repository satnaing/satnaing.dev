import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import formatDatetime from "utils/formatDatetime";

type Props = {
  post: {
    coverImage?: string;
    slug: string;
    title: string;
    excerpt: string;
    datetime: string;
  };
  fullWH?: boolean;
  className?: string;
};

const BlogImageCard: React.FC<Props> = ({
  post,
  fullWH = false,
  className = "",
}) => {
  const { title, coverImage, slug, excerpt, datetime } = post;

  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".blog-image"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".blog-title"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".blog-text"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      );
  }, []);
  return (
    <div
      ref={sectionRef}
      title={title}
      className={`sm:min-w-[17rem] transition hover:-translate-y-2 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${
        fullWH ? "w-full" : "w-72 my-2"
      } ${className}`}
    >
      <div className="blog-image relative w-full h-48 md:h-40 mb-3">
        <Image
          src={coverImage!}
          layout="fill"
          className="object-contain"
          alt={title}
        />
      </div>
      <div className="mb-2 overflow-hidden">
        <Link href={`/blog/posts/${slug}`}>
          <a className="blog-title link inline-block outline-none dark:outline-none focus-within:underline">
            <h3
              className={`${
                fullWH ? "text-lg sm:text-md" : "text-md"
              } font-medium`}
            >
              {title}
            </h3>
          </a>
        </Link>
      </div>
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {formatDatetime(datetime)}
      </div>
      <p
        className={`blog-text dark:text-gray-300 ${
          fullWH ? "text-base sm:text-sm" : "text-sm w-60"
        } overflow-hidden text-ellipsis max-h-24`}
      >
        {excerpt}
      </p>
      {/* <Link href={`/blog/posts/${slug}`}>
        <a className="link inline-block mt-2">Read more</a>
      </Link> */}
    </div>
  );
};

export default BlogImageCard;
