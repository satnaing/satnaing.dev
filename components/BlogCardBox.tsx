import Link from "next/link";
import formatDatetime from "utils/formatDatetime";

type Props = {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    datetime: string;
  };
};

const BlogCardBox: React.FC<Props> = ({ post }) => {
  const { title, slug, excerpt, datetime } = post;
  return (
    <div
      title={title}
      className="my-4 mr-4 min-w-[16rem] w-64 bg-gray-100 dark:bg-carddark p-4 rounded shadow hover:shadow-md"
    >
      <div className="h-7 truncate">
        <Link href={`/blog/posts/${slug}`}>
          <a className="link inline-block">
            <h3 className="text-md font-medium">{title}</h3>
          </a>
        </Link>
      </div>
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300">
        {formatDatetime(datetime)}
      </div>
      <p className="dark:text-gray-300 text-sm h-36 overflow-hidden">
        {excerpt}
      </p>
    </div>
  );
};

export default BlogCardBox;
