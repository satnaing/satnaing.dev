export const H1 = (props: any) => (
  <h1 className="font-semibold md:font-bold text-3xl md:text-4xl" {...props} />
);

export const H2 = (props: any) => (
  <h2 className="font-medium text-3xl mt-8 mb-2" {...props} />
);

export const H3 = (props: any) => (
  <h3 className="font-medium text-2xl" {...props} />
);

export const H4 = (props: any) => (
  <h4 className="font-medium md:font-semibold text-xl" {...props} />
);

export const H5 = (props: any) => (
  <h5 className="font-medium md:font-semibold text-lg" {...props} />
);

export const H6 = (props: any) => (
  <h6 className="font-medium md:font-semibold text-base" {...props} />
);

export const Hr = (props: any) => (
  <hr className="my-4 border-gray-300" {...props} />
);

export const Ul = (props: any) => (
  <ul
    className="marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-4 space-y-1 mt-1"
    {...props}
  />
);

export const Ol = (props: any) => (
  <ol
    className="marker:text-marrsgreen dark:marker:text-carrigreen list-decimal pl-4 space-y-1 mt-1"
    {...props}
  />
);

export const P = (props: any) => <p className="my-3" {...props} />;

export const Blockquote = (props: any) => (
  <>
    <blockquote
      className="py-[2px] my-4 font-medium px-4 border-l-8 border-marrslight dark:border-carrilight italic bg-cardlight dark:bg-carddark"
      {...props}
    ></blockquote>
  </>
);

export const Pre = (props: any) => (
  <>
    <pre>
      <code className="language-javascript" {...props} />
    </pre>
  </>
);
