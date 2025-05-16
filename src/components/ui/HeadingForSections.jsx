const HeadingForSections = ({ className, title, text }) => {
  return (
    <div
      className={`text-black max-w-5xl w-full px-4 mx-auto mb-12 text-center ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 md:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {text && (
        <p className="py-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
          {text}
        </p>
      )}
    </div>
  );
};

export default HeadingForSections;
