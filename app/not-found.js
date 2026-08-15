import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white px-6 text-center">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-6 text-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-semibold text-sm text-white animated-border shadow-lg shadow-indigo-500/20"
      >
        Back to Home
      </Link>
    </div>
  );
}
