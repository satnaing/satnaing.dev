type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={`${
        outline
          ? "border border-marrsgreen dark:border-carrigreen text-marrsgreen dark:text-carrigreen"
          : "bg-marrsgreen dark:bg-carrigreen text-bglight dark:text-bgdark"
      } py-2 px-3 rounded ${className}`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
