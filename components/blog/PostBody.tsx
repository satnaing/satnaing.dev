type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="prose prose-lg prose-marrsgreen mx-auto max-w-4xl dark:prose-invert">
      <div
        // className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
