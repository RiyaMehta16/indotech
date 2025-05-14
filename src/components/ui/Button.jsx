import { cn } from "../../utils/cn";

export function Button({ className, children }) {
  return (
    <button
      className={cn(
        "ml-10 px-4 py-2 bg-blue-500 text-white rounded",
        className
      )}
    >
      {children}
    </button>
  );
}
