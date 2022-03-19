import { MDXProvider } from "@mdx-js/react";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Ol,
  P,
  Pre,
  Ul,
} from "@/components/MdxElements";
import AppHead, { Meta } from "./AppHead";
import { useRouter } from "next/router";
import Link from "next/link";

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: Ul,
  ol: Ol,
  p: P,
  hr: Hr,
  blockquote: Blockquote,
  pre: Pre,
};

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
}

type Props = {
  meta: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ meta, children }) => {
  const { pathname } = useRouter();
  return (
    <MDXProvider components={components}>
      <AppHead
        title={`${meta.title} - Sat Naing`}
        url={`https://satnaing.vercel.app/${pathname}`}
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20 mt-16 min-h-[70vh]">
            <article className="py-8 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {meta.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen">
                {meta.datetime}
              </div>
              <span className="mt-2 mb-2 inline-block px-2 border-l-4 border-marrsgreen">
                Category: How do I
              </span>
              <div className="mt-2 mb-6">
                Tags:
                <Link href="/blog/categories/javascript">
                  <a className="link-outline dark:fill-bglight hover:bg-marrsgreen hover:text-bglight hover:fill-bglight dark:hover:bg-carrigreen dark:hover:text-bgdark dark:hover:fill-bgdark py-1 px-2 bg-gray-300 text-xs dark:bg-carddark rounded mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="inline-block scale-75 mr-1"
                    >
                      <path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"></path>
                      <circle cx="8.496" cy="8.495" r="1.505"></circle>
                    </svg>
                    JavaScript
                  </a>
                </Link>
              </div>
              {children}
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </MDXProvider>
  );
};

export default BlogLayout;
