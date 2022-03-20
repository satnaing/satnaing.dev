import Link from "next/link";

type Props = {
  tag: string;
};

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/blog/tags/${tag}`} key={tag}>
      <a className="link-outline whitespace-nowrap dark:fill-bglight hover:bg-marrsgreen hover:text-bglight hover:fill-bglight dark:hover:bg-carrigreen dark:hover:text-bgdark dark:hover:fill-bgdark py-1 px-2 bg-gray-300 text-xs dark:bg-carddark rounded mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="inline-block scale-75 mr-1"
        >
          <path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"></path>
          <circle cx="8.496" cy="8.495" r="1.505"></circle>
        </svg>
        {tag}
      </a>
    </Link>
  );
};

export default Tag;
