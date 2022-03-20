import Link from "next/link";

type Props = {
  category: { name?: string; slug?: string };
};

const HeadCategory: React.FC<Props> = ({ category }) => {
  const { name, slug } = category;
  return (
    <span className="mt-2 mb-2 inline-block px-2 border-l-4 border-marrsgreen">
      Category:{" "}
      <Link href={slug ? `/blog/categories/${slug}` : "uncategorized"}>
        <a>{name ? name : "uncategorized"}</a>
      </Link>
    </span>
  );
};

export default HeadCategory;
