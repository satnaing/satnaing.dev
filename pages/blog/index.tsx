import type { GetStaticProps, NextPage } from "next";

import { articlesWithMetadata } from "utils/articlesWithMetadata";
import { MdxMeta } from "@/components/BlogLayout";

import AppHead from "@/components/AppHead";
import BlogHeroSection from "@/sections/BlogHeroSection";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

type Props = {
  posts: MdxMeta[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <AppHead
        title="Blog - Sat Naing"
        meta={{ description: "my blog desc" }}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHeroSection />
            <div className="py-8 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium">Featured Posts</h2>
              {posts.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: MdxMeta[] = await articlesWithMetadata();

  return {
    props: {
      posts,
    },
  };
};

const blogPosts = [
  {
    id: 1,
    title: "Rust in the future of JavaScript Ecosystem",
    link: "#somelink",
    desc: "Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?",
  },
  {
    id: 2,
    title: "Creating a Monorepo with Lerna & Yarn Workspaces",
    link: "#somelink",
    desc: "In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.",
  },
  {
    id: 3,
    title: "From Firebase/Redis to MySQL with PlanetScale",
    link: "#somelink",
    desc: "Learn how I migrated my Next.js website to use MySQL with PlanetScale, resulting in 10x faster response times for my APIs.",
  },
];

export default Home;
