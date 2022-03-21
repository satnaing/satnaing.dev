import Link from "next/link";
import slugify from "utils/slugify";

type Props = {
  category: string;
};

const HeadCategory: React.FC<Props> = ({ category }) => {
  const slug = slugify(category);
  return (
    <span className="mt-2 mb-2 inline-block px-2 border-l-4 border-marrsgreen">
      Category:{" "}
      <Link href={slug ? `/blog/categories/${slug}` : "uncategorized"}>
        <a>{category ? category : "uncategorized"}</a>
      </Link>
    </span>
  );
};

export default HeadCategory;
