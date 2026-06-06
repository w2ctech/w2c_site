import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4">
      <h1 className="text-8xl font-extrabold text-accent">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-tx">Page Not Found</h2>
      <p className="mt-2 text-tx-2">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-colors hover:opacity-90">
        Back to Home
      </Link>
    </div>
  );
}
