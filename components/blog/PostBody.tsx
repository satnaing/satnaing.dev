type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="prose prose-img:mx-auto prose-lg prose-headings:font-medium prose-h2:mb-3 prose-h3:mb-1 prose-h3:mt-6 prose-h3:text-xl prose-h3:font-bold prose-h3:italic prose-h3:text-marrsgreen dark:prose-h3:text-carrigreen prose-p:mt-1 prose-p:my-3 mx-auto max-w-4xl dark:prose-invert">
      <div
        // className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
