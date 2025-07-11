import React from "react";
import { Link } from "react-router-dom";


// Page for not founded pages 404
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md px-8 py-10 flex flex-col items-center max-w-lg">
        <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
        <p className="text-gray-500 mb-6 text-center">
          Sorry, but the page you are looking for does not exist.<br />
           It may have been moved or deleted.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
           Home
        </Link>
      </div>
    </div>
  );
}
