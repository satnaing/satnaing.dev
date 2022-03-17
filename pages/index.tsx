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

const Home: NextPage = () => {
  return (
    <div className="bg-bglight dark:bg-bgdark">
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
  );
};

export default Home;
