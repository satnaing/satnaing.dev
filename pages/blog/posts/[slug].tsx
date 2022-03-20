import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/Footer";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import AppHead, { Meta } from "@/components/AppHead";
import { useRouter } from "next/router";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/api";
import PostBody from "@/components/blog/PostBody";
import formatDatetime from "utils/formatDatetime";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import HeadCategory from "@/components/blog/HeadCategory";
import Tag from "@/components/blog/Tag";

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
  category: { name?: string; slug?: string };
  tags?: string[];
  content: string;
  coverImage?: { url: string; alt: string };
}

type Props = {
  post: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ post }) => {
  const { pathname } = useRouter();
  const appPath = post.slug ? `/blog/posts/${post.slug}` : pathname;
  return (
    <>
      <AppHead
        title={`${post.title} - Sat Naing`}
        url={`https://satnaing.vercel.app/${appPath}`}
        meta={post}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20 mt-16 min-h-[70vh]">
            <article className="py-8 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen">
                {formatDatetime(post.datetime)}
              </div>
              <HeadCategory category={post.category} />
              {post.tags && (
                <div className="mt-2 mb-6">
                  <span className="mb-2 mr-2 inline-block">Tags: </span>
                  {post.tags.map((tag: string) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              )}
              {post.coverImage && (
                <div className="bg-cardlight dark:bg-carddark">
                  <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.alt}
                    width={1200}
                    height={700}
                  />
                </div>
              )}
              <PostBody content={post.content} />
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string, [
    "title",
    "datetime",
    "slug",
    "author",
    "content",
    "ogImage",
    "ogImageAlt",
    "coverImage",
    "category",
    "tags",
    "type",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogLayout;
