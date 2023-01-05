import Link from "next/link";

import DateTime from "@/components/DateTime";

type Props = {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    datetime: string;
  };
  fullWH?: boolean;
  className?: string;
};

const BlogCardBox: React.FC<Props> = ({
  post,
  fullWH = false,
  className = "",
}) => {
  const { title, slug, excerpt, datetime } = post;
  return (
    <li
      className={`blog-card-box sm:min-w-[17rem] bg-gray-100 dark:bg-carddark p-4 rounded shadow hover:shadow-md ${
        fullWH ? "w-full" : "w-72 my-2"
      } ${className}`}
    >
      <div className="mb-2">
        <Link href={`/blog/posts/${slug}`} className="link inline-block">
          <h3
            className={`${
              fullWH ? "text-lg sm:text-md" : "text-md"
            } font-medium`}
          >
            {title}
          </h3>
        </Link>
      </div>
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <DateTime datetime={datetime} />
      </div>
      <p
        className={`dark:text-gray-300 ${
          fullWH ? "text-base sm:text-sm" : "text-sm w-60"
        } overflow-hidden`}
      >
        {excerpt}
      </p>
    </li>
  );
};

export default BlogCardBox;
