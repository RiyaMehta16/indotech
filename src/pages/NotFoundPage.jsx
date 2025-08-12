import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-w-80 flex flex-col items-center justify-center py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-red-600">404 — Page not found</h1>
      <p className="mt-3 text-gray-500">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-full transition-colors duration-300 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
