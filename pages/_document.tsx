import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sat Naing" />
        <meta
          name="description"
          content="Sat Naing is a passionate fullstack developer who love coding both front-end and back-end using amazing technologies."
        />
        <meta property="og:title" content="Sat Naing" />
        <meta
          property="og:description"
          content="Sat Naing is a passionate fullstack developer who love coding both front-end and back-end using amazing technologies."
        />
        <meta
          property="og:image"
          content="https://satnaing.vercel.app/satnaing-dev-og.png"
        />
        <meta property="og:url" content="https://satnaing.vercel.app/" />
        <meta property="og:site_name" content="Sat Naing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Sat Naing's portfolio website"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#F9FAFB" />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
