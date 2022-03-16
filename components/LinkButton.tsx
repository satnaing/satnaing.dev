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
          ? "border border-marrsgreen text-marrsgreen"
          : "bg-marrsgreen text-bglight"
      } py-2 px-3 rounded ${className}`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
