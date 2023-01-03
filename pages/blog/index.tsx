import type { GetStaticProps, NextPage } from "next";
import { MdxMeta } from "./posts/[slug]";

import AppHead from "@/components/AppHead";
import BlogHeroSection from "@/sections/BlogHeroSection";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import { useFilter } from "context/filter";
import Loader from "@/components/Loader";

type Props = {
  posts: MdxMeta[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const { searchText, postLanguage } = useFilter();
  return (
    <>
      <AppHead title="Blog - Sat Naing" />
      <Loader>Sat Naing&apos;s Blog</Loader>
      <div className="bg-bglight dark:bg-bgdark min-h-screen">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHeroSection />
            {searchText === "" && postLanguage === "All" && (
              <>
                <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-medium mb-2">Featured Posts</h2>
                  <ul>
                    {posts.map(
                      (post) =>
                        post.featured && (
                          <BlogCard post={post} key={post.slug} />
                        )
                    )}
                  </ul>
                </div>
                <hr
                  aria-hidden="true"
                  className="mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"
                />
              </>
            )}
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">
                {searchText === "" && postLanguage === "All" && "All Posts"}
                {searchText !== "" && <div>Search result(s)</div>}
                {postLanguage !== "All" &&
                  `Posts written in '${postLanguage}' language`}
              </h2>
              <ul>
                {posts
                  .filter(({ title }) =>
                    title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .filter(({ language }) => {
                    if (postLanguage === "All") return true;
                    return language === postLanguage;
                  })
                  .map((post) => (
                    <BlogCard post={post} key={post.slug} />
                  ))}
              </ul>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
    "language",
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
