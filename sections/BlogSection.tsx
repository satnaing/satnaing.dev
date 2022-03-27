import Link from "next/link";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import BlogCardBox from "@/components/BlogCardBox";
import useOnScreen from "../hooks/useOnScreen";
import { MdxMeta } from "../pages/blog/posts/[slug]";

type Props = {
  posts: MdxMeta[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  return (
    <section id="blog" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Blog</h2>
        </RoughNotation>
      </div>
      <div className="text-center mb-8" ref={elementRef}>
        I write blog posts about what I've done and what I'm doing{" "}
        <br className="hidden sm:block" />
        as a documenting practice. Here are some of my recent blog posts.
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 lg:grid-rows-1 gap-4 md:gap-6 justify-items-center mb-6">
          {posts.map((post, index) => (
            <BlogCardBox
              post={post}
              className={`${index > 3 ? "hidden lg:block" : ""}`}
              key={post.slug}
              fullWH
            />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/blog">
            <a className="link">
              Read all blog posts{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
