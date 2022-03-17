import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectSection from "../sections/ProjectSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-bglight dark:bg-bgdark">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
