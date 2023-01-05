import Image from "next/image";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTheme } from "next-themes";

import BlogHeader from "@/components/blog/BlogHeader";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import AppHead, { Meta } from "@/components/AppHead";
import Footer from "@/components/Footer";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/api";
import PostBody from "@/components/blog/PostBody";
import Tag from "@/components/blog/Tag";
import DateTime from "@/components/DateTime";
import HeadCategory from "@/components/blog/HeadCategory";

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage?: string;
  tags?: string[];
  content: string;
  coverImageWidth?: string;
  coverImageHeight?: string;
  featured: boolean;
  language: "English" | "Myanmar";
}

type Props = {
  post: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ post }) => {
  const { theme } = useTheme();
  const postUrl = `${process.env.NEXT_PUBLIC_URL}/blog/posts/${post.slug}`;
  return (
    <>
      {/* Facebook Plugin for comment & share */}
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=3098460656840262&autoLogAppEvents=1"
        nonce="BwXXZ73U"
      />

      <AppHead
        title={`${post.title} - Sat Naing`}
        url={`${process.env.NEXT_PUBLIC_URL}/blog/posts/${post.slug}`}
        meta={post}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <article className="blog-section">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen">
                <DateTime datetime={post.datetime} />
              </div>
              <HeadCategory category={post.category} />
              {post.tags && (
                <div className="my-2">
                  {post.tags.map((tag: string) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              )}
              {post.coverImage && (
                <div className="bg-cardlight dark:bg-carddark">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || "Picture"}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    width={Number(post.coverImageWidth) || 1200}
                    height={Number(post.coverImageHeight) || 700}
                  />
                </div>
              )}
              <PostBody content={post.content} />

              {/* <hr /> */}

              {/* Facebook Comment Plugin */}
              {/* <div
                className="fb-comments my-4"
                data-colorscheme="dark"
                data-href={postUrl}
                data-width="100%"
                data-numposts="5"
              ></div> */}

              {/* Facebook Share Button */}
              <div
                className="fb-share-button my-4"
                data-href={postUrl}
                data-layout="button"
                data-size="large"
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    postUrl
                  )}&amp;src=sdkpreparse`}
                  className="fb-xfbml-parse-ignore"
                >
                  Share
                </a>
              </div>
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
    "description",
    "slug",
    "author",
    "content",
    "ogImage",
    "ogImageAlt",
    "coverImage",
    "coverImageWidth",
    "coverImageHeight",
    "category",
    "tags",
    "type",
  ]);
  const content = await markdownToHtml((post.content as string) || "");

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
