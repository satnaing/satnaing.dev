import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTagPosts } from "utils/api";
import { MdxMeta } from "../posts/[slug]";

type Props = {
  posts: MdxMeta[];
  tag: string;
};

const Blog: NextPage<Props> = ({ posts, tag }) => {
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
                Tag: {tag}
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
  const posts = getAllTagPosts(
    ["slug", "title", "excerpt", "datetime", "category"],
    params!.tag as string
  );

  return {
    props: {
      posts,
      tag: params!.tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["tags"]);

  let tags: string[] = [];
  for (let post of posts) {
    if (post.tags) tags.push(...(post.tags as string[]));
  }
  tags = tags.filter((x, i, a) => a.indexOf(x) == i);

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
};

export default Blog;
