import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import SkipToMain from "../components/SkipToMain";
import SocialLinks from "../components/SocialLinks";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sat Naing</title>
      </Head>
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
