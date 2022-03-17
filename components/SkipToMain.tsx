const SkipToMain: React.FC = () => {
  return (
    <a
      role="button"
      className={`py-2 px-3 absolute left-2 opacity-95 outline-marrsgreen  dark:outline-carrigreen rounded-b-lg transition-transform -translate-y-52 focus:transform focus:translate-y-0 lg:text-xl z-50 bg-marrsgreen dark:bg-carrigreen text-textlight dark:text-bgdark`}
      href="#main"
    >
      Skip to main content
    </a>
  );
};

export default SkipToMain;
