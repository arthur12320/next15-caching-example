import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">User Not Found</h2>
      <p className="mb-4">{`Sorry, the user you're looking for doesn't exist.`}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
