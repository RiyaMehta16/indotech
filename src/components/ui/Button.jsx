export function Button({ className, children }) {
  return (
    <button
      className={`px-8 py-2 rounded-full relative bg-slate-700/2 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600/20 hover:bg-slate-700/10 hover:cursor-pointer ${className}`}
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="relative z-20 text-slate-700">{children}</span>
    </button>
  );
}
