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

const BlogCard: React.FC<Props> = ({ post }) => {
  const { title, slug, excerpt, datetime } = post;
  return (
    <div className="my-4 md:mt-0 md:mb-8">
      <Link href={`/blog/posts/${slug}`}>
        <a className="link inline-block">
          <h3 className="text-lg font-medium">{title}</h3>
        </a>
      </Link>
      <div className="italic text-sm mb-1 text-carddark dark:text-gray-300">
        {formatDatetime(datetime)}
      </div>
      <p className="dark:text-gray-300">{excerpt}</p>
    </div>
  );
};

export default BlogCard;
