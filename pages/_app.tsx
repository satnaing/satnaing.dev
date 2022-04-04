import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";
import { ProvideFilter } from "context/filter";
import { ProvideSection } from "context/section";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <ProvideFilter>
          <ProvideSection>
            <Component {...pageProps} />
          </ProvideSection>
        </ProvideFilter>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
