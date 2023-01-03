import { useEffect, useRef } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import gsap from "gsap";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import { MdxMeta } from "../posts/[slug]";
import slugify, { unslugify } from "utils/slugify";
import Loader from "@/components/Loader";

type Props = {
  posts: MdxMeta[];
  category: string;
};

const Blog: NextPage<Props> = ({ posts, category }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.fromTo(
      q(".category-title"),
      { x: "-100%" },
      {
        x: 0,
        ease: "back.out(1.7)",
        // delay: 1.2,
        duration: 0.7,
      }
    );
  }, []);
  return (
    <>
      <AppHead title="Blog - Sat Naing" />
      {/* <Loader>
        <span className="capitalize">{unslugify(category)}</span>
      </Loader> */}
      <div ref={sectionRef} className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <section className="blog-section">
              <h1 className="overflow-hidden py-1 text-2xl md:text-3xl lg:text-4xl font-medium md:font-bold mb-0 md:mb-8 pl-2 md:pl-4 border-l-8 border-marrsgreen dark:border-carrigreen">
                <span className="category-title block">
                  Category:{" "}
                  <span className="capitalize">{unslugify(category)}</span>
                </span>
              </h1>
              <ul>
                {posts.map((post) => (
                  <BlogCard post={post} key={post.slug} />
                ))}
              </ul>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts(
    ["slug", "title", "excerpt", "datetime", "category"],
    params!.category as string
  );

  return {
    props: {
      posts,
      category: params!.category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["category"]);
  const categories = posts
    .map((post) => post.category)
    .filter((x, i, a) => a.indexOf(x) == i);

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: slugify(category as string),
        },
      };
    }),
    fallback: false,
  };
};

export default Blog;
