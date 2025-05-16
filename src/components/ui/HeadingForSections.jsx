const HeadingForSections = ({ className, title, text }) => {
  return (
    <div
      className={`${className} text-black max-w-[50rem] mx-auto mb-12  md:text-center`}
    >
      {title && (
        <h2 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-5xl dark:text-slate-300">
          {title}
        </h2>
      )}
      {text && (
        <p className="mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 ">
          {text}
        </p>
      )}
    </div>
  );
};

export default HeadingForSections;
