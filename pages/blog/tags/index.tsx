import type { GetStaticProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import Tag from "@/components/blog/Tag";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import Loader from "@/components/Loader";

type Props = {
  tags: string[];
  tagCounts: { [key: string]: number };
};

const Blog: NextPage<Props> = ({ tags, tagCounts }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.utils.toArray(q(".blog-tag")).forEach((tag, i) => {
      const initialDelay = 1.2;
      const delayTime = i == 0 ? initialDelay : initialDelay + i * 0.1;
      gsap.fromTo(
        tag as any,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "back.out(1.7)",
          delay: delayTime,
        }
      );
    });
  }, []);

  return (
    <>
      <AppHead title="Blog - Sat Naing" />
      <Loader>Tags</Loader>
      <div ref={sectionRef} className="bg-bglight dark:bg-bgdark min-h-screen">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <section className="blog-section">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Tags</h1>
              <ul>
                {tags &&
                  tags.map((tag: string) => (
                    <li className="inline-block" key={tag}>
                      <Tag tag={tag} size="lg" count={tagCounts[tag]} />
                    </li>
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["tags"]);

  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }

  const tagCounts: { [key: string]: number } = {};

  for (const tag of tags) {
    tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1;
  }

  tags = tags.filter((x, i, a) => a.indexOf(x) == i);

  return {
    props: {
      tags,
      tagCounts,
    },
  };
};

export default Blog;
