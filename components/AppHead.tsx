import Head from "next/head";

export interface Meta {
  description: string;
  author?: string;
  siteName?: string;
  coverImage?: string;
  coverImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

type Props = {
  title: string;
  meta: Meta;
  url?: string;
};

const AppHead: React.FC<Props> = ({
  title,
  url = "https://satnaing.vercel.app/blog",
  meta,
}) => {
  const {
    author = "Sat Naing",
    description,
    siteName = "Sat Naing's Blog",
    coverImage,
    coverImageAlt,
    ogImage,
    ogImageAlt,
    type = "article",
  } = meta;

  let appOgImage = "";
  let appOgImageAlt = "";
  if (ogImage) {
    appOgImage = ogImage;
  } else if (!ogImage && coverImage) {
    appOgImage = coverImage;
  } else {
    appOgImage = "https://satnaing.vercel.app/satnaing-dev-og.png";
  }

  if (ogImageAlt) {
    appOgImageAlt = ogImageAlt;
  } else if (!ogImageAlt && coverImageAlt) {
    appOgImageAlt = coverImageAlt;
  } else {
    appOgImageAlt = "Sat Naing's Blog";
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={appOgImage} />
      <meta property="og:image:alt" content={appOgImageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={appOgImageAlt} />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;
