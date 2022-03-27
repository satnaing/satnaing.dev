import React from "react";
import { LanguageType, useFilter } from "context/filter";

const BlogHeroSection: React.FC = () => {
  const { searchText, onSearch, postLanguage, onLanguageChange } = useFilter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch!(e.target.value);
  };

  return (
    <section className="mt-16 py-4 md:pt-16 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
      <div className="mt-10">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Sat Naing's{" "}
          <span className="text-marrsgreen dark:text-carrigreen">Blog</span>
        </h1>
        <p className="mt-4 mb-2">
          Hello, everyone! Welcome to my personal blog.
        </p>
        <p>
          In this blog, I will be writing about my projects (what I do/how I
          did), my personal experiences, and some random stuffs.
        </p>
        <p>
          You can follow me on my social media and{" "}
          <a href="https://github.com/satnaing" className="link">
            Github account
          </a>
          .
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block ml-1 fill-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </p>
      </div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="bg-cardlight dark:bg-carddark shadow-md p-3 pl-4 flex justify-center items-center rounded my-4">
        <input
          id="search"
          type="search"
          placeholder="Search posts"
          autoComplete="off"
          value={searchText}
          onChange={handleSearch}
          className="basis-11/12 bg-cardlight dark:bg-carddark focus-visible:outline-none"
        />
        <div className="basis-1/12 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="dark:fill-textlight"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center my-4 md:my-6">
        <label htmlFor="language" className="mr-2 flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          Blog Posts Language:{" "}
        </label>
        <select
          name="language"
          id="language"
          className="px-2 py-1 focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen"
          defaultValue={postLanguage}
          onChange={(e) => onLanguageChange!(e.target.value as LanguageType)}
        >
          <option value="All">All</option>
          <option value="English">English</option>
          <option value="Myanmar">Myanmar</option>
        </select>
      </div>
    </section>
  );
};

export default BlogHeroSection;
