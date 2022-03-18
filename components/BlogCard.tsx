type Props = {
  post: {
    id: number;
    title: string;
    link: string;
    desc: string;
  };
};

const BlogCard: React.FC<Props> = ({ post }) => {
  const { title, link, desc } = post;
  return (
    <div className="my-4 md:mt-0 md:mb-8">
      <a href={link} className="link inline-block">
        <h3 className="text-lg font-medium">{title}</h3>
      </a>
      <p className="dark:text-gray-300">{desc}</p>
    </div>
  );
};

export default BlogCard;
