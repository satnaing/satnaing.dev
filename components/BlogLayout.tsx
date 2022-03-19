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

interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
}

type Props = {
  meta: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ meta, children }) => {
  return (
    <MDXProvider components={components}>
      <AppHead title={`${meta.title} - Sat Naing`} meta={meta} />
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
              <div className="mt-2 mb-10 italic text-marrsdark dark:text-carrigreen">
                {meta.datetime}
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
