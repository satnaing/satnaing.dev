import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";
import { ProvideFilter } from "context/filter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <ProvideFilter>
          <Component {...pageProps} />
        </ProvideFilter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
