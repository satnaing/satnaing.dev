import Head from "next/head";

export type Meta = {
  title?: string;
  description: string;
  author?: string;
  siteName?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  url?: string;
};

type Props = {
  title: string;
  meta: Meta;
};

const AppHead: React.FC<Props> = ({ title, meta }) => {
  const {
    author = "Sat Naing",
    description,
    siteName = "Sat Naing's Blog",
    image = "https://satnaing.vercel.app/satnaing-dev-og.png",
    imageAlt = "Sat Naing's Blog",
    type = "article",
    url = "https://satnaing.vercel.app/blog",
  } = meta;
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;
