import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import DateTime from "@/components/DateTime";

type Props = {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    datetime: string;
  };
};

const BlogCard: React.FC<Props> = ({ post }) => {
  const { title, slug, excerpt, datetime } = post;

  const sectionRef = useRef<HTMLLIElement>(null);

  // Animations
  // useEffect(() => {
  //   const q = gsap.utils.selector(sectionRef);

  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     // defaults: { stagger: 0.2, duration: 0.2 },
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: `70% bottom`,
  //     },
  //   });

  //   tl.fromTo(
  //     q(".blog-title"),
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       ease: "Power3.easeInOut",
  //       duration: 0.5,
  //       stagger: 0.2,
  //     }
  //   )
  //     .fromTo(q(".blog-datetime"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
  //     .fromTo(
  //       q(".blog-excerpt"),
  //       { opacity: 0 },
  //       { opacity: 1, stagger: 0.2, duration: 1.5 },
  //       "<10%"
  //     );
  // }, []);

  return (
    <li ref={sectionRef} className="my-4 md:mt-0 md:mb-8">
      <div className="overflow-hidden">
        <Link
          href={`/blog/posts/${slug}`}
          className="blog-title link inline-block outline-none dark:outline-none focus-within:underline"
        >
          <h3 className="text-lg font-medium">{title}</h3>
        </Link>
      </div>
      <div className="overflow-hidden">
        <div className="blog-datetime italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <DateTime datetime={datetime} />
        </div>
      </div>
      <p className="blog-excerpt dark:text-gray-300">{excerpt}</p>
    </li>
  );
};

export default BlogCard;
