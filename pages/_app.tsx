import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Head from "next/head";
import { ProvideFilter } from "context/filter";
import { ProvideSection } from "context/section";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, { x: mouseX, y: mouseY, delay: 0 });
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        ref={cursorRef}
        className="w-12 h-12 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
      />
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
