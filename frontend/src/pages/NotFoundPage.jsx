
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text) flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full text-center">

        {/* 404 Header Box */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-6xl sm:text-7xl font-black text-(--accent) tracking-wider">
            404
          </span>

          <div className="h-16 w-px bg-(--border)" />

          <p className="text-left text-sm sm:text-base text-(--muted) font-medium leading-snug">
            This page could <br /> not be found.
          </p>
        </div>

        <p className="text-(--muted) text-sm mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-(--accent) hover:bg-(--accent-h) text-(--primary) font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-(--surface-2) hover:bg-(--muted)/20 text-(--text) font-medium px-6 py-3.5 rounded-full transition-all duration-300 border border-(--border) cursor-pointer"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
}
