import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import { MdxMeta } from "../posts/[slug]";
import slugify, { unslugify } from "utils/slugify";

type Props = {
  posts: MdxMeta[];
  category: string;
};

const Blog: NextPage<Props> = ({ posts, category }) => {
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
          <main id="main" className="mb-20 min-h-[70vh]">
            <div className="mt-16 pt-8 md:pt-16 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:font-bold mb-0 md:mb-8 pl-2 md:pl-4 border-l-8 border-marrsgreen dark:border-carrigreen">
                Category:{" "}
                <span className="capitalize">{unslugify(category)}</span>
              </h1>
            </div>
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts(
    ["slug", "title", "excerpt", "datetime", "category"],
    params!.category as string
  );

  return {
    props: {
      posts,
      category: params!.category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["category"]);
  const categories = posts
    .map((post) => post.category)
    .filter((x, i, a) => a.indexOf(x) == i);

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: slugify(category as string),
        },
      };
    }),
    fallback: false,
  };
};

export default Blog;
