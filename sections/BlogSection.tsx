import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import BlogCardBox from "@/components/BlogCardBox";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { MdxMeta } from "pages/blog/posts/[slug]";
import BlogImageCard from "@/components/BlogImageCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  posts: MdxMeta[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for blog section
  const blogSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    blogSection && onSectionChange!("blog");
  }, [blogSection]);

  return (
    // <div>
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="blog" className="section px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 140, 140)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Blog</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          I write blog posts about what I've done and what I'm doing{" "}
          <br className="hidden sm:block" />
          as a documenting practice. Here are some of my recent blog posts.
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{
              dynamicBullets: true,
            }}
            navigation
            className="swiper-padding-mobile xs:swiper-padding"
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {posts.map((post, index) => (
              <SwiperSlide>
                <BlogImageCard
                  post={post}
                  className={`${index > 3 ? "hidden lg:block" : ""}`}
                  key={post.slug}
                  fullWH
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 lg:grid-rows-1 gap-4 md:gap-6 justify-items-center mb-6">
            {posts.map((post, index) => (
              // <BlogCardBox
              //   post={post}
              //   className={`${index > 3 ? "hidden lg:block" : ""}`}
              //   key={post.slug}
              //   fullWH
              // />
              <BlogImageCard
                post={post}
                className={`${index > 3 ? "hidden lg:block" : ""}`}
                key={post.slug}
                fullWH
              />
            ))}
          </div> */}
          <div className="mt-4 text-center">
            <Link href="/blog">
              <a className="link">
                Read all blog posts{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
