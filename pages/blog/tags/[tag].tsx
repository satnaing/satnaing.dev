import { useEffect, useRef } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import gsap from "gsap";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTagPosts } from "utils/api";
import { MdxMeta } from "../posts/[slug]";

type Props = {
  posts: MdxMeta[];
  tag: string;
};

const Blog: NextPage<Props> = ({ posts, tag }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.fromTo(
      q(".tag-title"),
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
      <div ref={sectionRef} className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <section className="blog-section">
              <h1 className="overflow-hidden py-1 text-2xl md:text-3xl lg:text-4xl font-medium md:font-bold mb-0 md:mb-8 pl-2 md:pl-4 border-l-8 border-marrsgreen dark:border-carrigreen">
                <span className="tag-title block">Tag: {tag}</span>
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
  const posts = getAllTagPosts(
    ["slug", "title", "excerpt", "datetime", "category"],
    params!.tag as string
  );

  return {
    props: {
      posts,
      tag: params!.tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["tags"]);

  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }
  tags = tags.filter((x, i, a) => a.indexOf(x) == i);

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
};

export default Blog;
