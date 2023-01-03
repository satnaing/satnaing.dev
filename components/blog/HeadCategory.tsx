import Link from "next/link";
import slugify from "utils/slugify";

type Props = {
  category: string;
};

const HeadCategory: React.FC<Props> = ({ category }) => {
  const slug = slugify(category);
  return (
    <span className="flex items-center mt-2 mb-2 px-2 border-l-4 border-marrsgreen dark:border-carrigreen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block mr-2"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Category"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
        />
      </svg>{" "}
      <Link
        href={slug ? `/blog/categories/${slug}` : "uncategorized"}
        className="hover:text-marrsgreen dark:hover:text-carrigreen font-medium outline-marrsgreen dark:outline-carrigreen"
      >
        {category ? category : "uncategorized"}
      </Link>
    </span>
  );
};

export default HeadCategory;
