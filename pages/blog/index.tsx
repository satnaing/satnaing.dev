import type { NextPage } from "next";
import Header from "../../components/Header";
import HeroSection from "../../sections/HeroSection";
import AboutSection from "../../sections/AboutSection";
import ProjectSection from "../../sections/ProjectSection";
import BlogSection from "../../sections/BlogSection";
import ContactSection from "../../sections/ContactSection";
import Footer from "../../components/Footer";
import SkipToMain from "../../components/SkipToMain";
import SocialLinks from "../../components/SocialLinks";
import Head from "next/head";
import BlogHeader from "../../components/BlogHeader";
import BlogHeroSection from "../../sections/BlogHeroSection";
import BlogCard from "../../components/BlogCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sat Naing's Blog</title>
      </Head>
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHeroSection />
            <div className="py-8 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium">Featured Posts</h2>
              {blogPosts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
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
