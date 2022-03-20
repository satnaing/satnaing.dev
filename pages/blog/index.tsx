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

type Props = {
  posts: MdxMeta[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <AppHead
        title="Blog - Sat Naing"
        meta={{ description: "my blog desc" }}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHeroSection />
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">Featured Posts</h2>
              {posts.map(
                (post) =>
                  post.featured && <BlogCard post={post} key={post.slug} />
              )}
            </div>
            <hr className="mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6" />
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">All Posts</h2>
              {posts.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
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
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
