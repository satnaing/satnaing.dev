import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";
import { ProvideSearch } from "context/search";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <ProvideSearch>
          <Component {...pageProps} />
        </ProvideSearch>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
