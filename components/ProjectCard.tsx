import LinkButton from "./LinkButton";

type Props = {
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
  };
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { title, type, image, desc, tags, liveUrl, codeUrl } = project;

  return (
    <div className="my-6">
      <h3 className="text-marrsgreen text-lg font-medium">{title}</h3>
      <span className="font-medium">{type}</span>
      <div className="shadow-lg bg-bglight mt-2 mb-4">{image}</div>
      <div className="bg-cardlight p-4 rounded">{desc}</div>
      <div className="flex flex-wrap mt-2 mb-4 text-sm">
        {tags.map((tag) => (
          <span key={tag} className="mr-5">
            {tag}
          </span>
        ))}
      </div>
      <LinkButton href={liveUrl} targetBlank>
        View live
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block text-white ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </LinkButton>

      <LinkButton href={codeUrl} className="ml-2" outline targetBlank>
        View code
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block ml-1 text-marrsgreen"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </LinkButton>
    </div>
  );
};

export default ProjectCard;
