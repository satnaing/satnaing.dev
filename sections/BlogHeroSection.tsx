import { useSearch } from "context/search";
import React from "react";

const BlogHeroSection: React.FC = () => {
  const { searchText, onSearch } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch!(e.target.value);
  };

  return (
    <section className="mt-16 py-4 md:pt-16 lg:pt-20 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
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
        <p>You can follow me on my social media and github account.</p>
      </div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="bg-cardlight dark:bg-carddark shadow-md p-3 pl-4 flex justify-center items-center rounded my-4 md:my-6">
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
    </section>
  );
};

export default BlogHeroSection;
