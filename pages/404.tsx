import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";

import { meta } from "pages";

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Sat Naing - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="h-screen flex flex-col justify-center selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <div className="flex justify-center items-center flex-col mt-auto">
            <h1 className="text-8xl xs:text-9xl font-bold text-marrsgreen dark:text-carrigreen">
              404
            </h1>
            <div className="text-lg xs:text-2xl my-2">
              Page Not Found :'&#40;
            </div>
            <div className="max-w-xs text-center mb-10">
              It seems the page you're looking for does not exist, or there
              might be a typo in the URL.
            </div>
            <LinkButton href="/" outline>
              Go to Home Page
            </LinkButton>
          </div>
          <Footer noPadding />
        </div>
      </div>
    </>
  );
};

export default Home;
