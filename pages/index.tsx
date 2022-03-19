import type { NextPage } from "next";
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

const meta = {
  description:
    "Sat Naing is a passionate fullstack developer who love coding both front-end and back-end using amazing technologies.",
  author: "Sat Naing",
  type: "website",
  siteName: "Sat Naing",
  imageAlt: "Sat Naing portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Sat Naing - A Full-stack Developer"
        url="https://satnaing.vercel.app"
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <SocialLinks />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
