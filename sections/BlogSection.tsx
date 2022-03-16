import Image from "next/image";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { RoughNotation } from "react-rough-notation";
import memojiLaptop from "../public/memoji-laptop.png";

const BlogSection: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  return (
    <section id="blog" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color="rgb(0, 140, 140)"
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Blog</h2>
        </RoughNotation>
      </div>
      <div>
        <div className="px-10">
          <Image src={memojiLaptop} width={421} height={421} />
        </div>
        <div className="mb-4">
          <p>
            At first, I didn't have any intention to make a blog. But then, I
            decided to write blog posts for what I've done and what I'm doing as
            a documenting practice. In the future, I may occationally share some
            of my knowledge during my professional software developer career.
          </p>
          <span className="block my-2" ref={elementRef}>
            Here are some of my latest blog posts
          </span>
        </div>
        {blogPosts.map((post) => (
          <div className="my-2" key={post.id}>
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        ))}
        <div className="mt-4">
          <a href="#">
            Read all posts{" "}
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
        </div>
      </div>
    </section>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Rust in the future of JavaScript Ecosystem",
    desc: "Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?",
  },
  {
    id: 2,
    title: "Creating a Monorepo with Lerna & Yarn Workspaces",
    desc: "In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.",
  },
  {
    id: 3,
    title: "From Firebase/Redis to MySQL with PlanetScale",
    desc: "Learn how I migrated my Next.js website to use MySQL with PlanetScale, resulting in 10x faster response times for my APIs.",
  },
];

export default BlogSection;
