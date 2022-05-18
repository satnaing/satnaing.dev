import { useEffect, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";

type Props = {
  blogPosts: MdxMeta[];
};

const meta = {
  description:
    "Sat Naing is an independent full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Sat Naing",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og.png`,
  siteName: "Sat Naing",
  imageAlt: "Sat Naing portfolio website",
};

const Home: NextPage<Props> = ({ blogPosts }) => {
  const loadingRef = useRef(null);
  const q = gsap.utils.selector(loadingRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { duration: 0.7 } });
    tl.fromTo(q(".loading-text"), { y: 120 }, { y: -10 });
    tl.to(q(".white-bg"), { y: "-100%" }).to(
      q(".dark-bg"),
      { y: "-100%", duration: 0.6 },
      "-=0.6"
    );
  }, []);

  return (
    <>
      <AppHead
        title="Sat Naing - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <div ref={loadingRef}>
        <div className="white-bg fixed top-0 left-0 w-full h-screen bg-[#f0f5fa] dark:bg-[#0e141a] z-[9999] flex justify-center items-center">
          <div className="overflow-hidden">
            <span className="loading-text inline-block text-bgdark dark:text-bglight text-4xl sm:text-5xl lg:text-7xl tracking-widest">
              SatNaing.dev
            </span>
          </div>
        </div>
        <div className="dark-bg fixed top-0 left-0 w-full h-screen bg-marrsgreen dark:bg-carrigreen z-[9998]"></div>
      </div>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
