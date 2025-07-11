import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  // State to hold the user's email input
  const [email, setEmail] = useState("");
  // State to hold success messages
  const [message, setMessage] = useState("");
  // State to hold error messages
  const [error, setError] = useState("");

  // Handles the password reset form submission
  const handleReset = async (e) => {
    e.preventDefault();
    // Clear previous error and success messages before new request
    setError("");
    setMessage("");
    try {
      // Firebase function to send password reset email
      await sendPasswordResetEmail(auth, email);
      // Update message state on success
      setMessage("Password reset message has been sent!");
    } catch (err) {
      // Update error state if an error occurs
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Password reset</h2>
        {message && <p className="text-green-600 mb-3">{message}</p>}
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input
          type="email"
          className="w-full px-3 py-2 border rounded mb-4"
          placeholder="Ваш Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Change password
        </button>
        <Link
          to="/login"
          className="block mt-4 text-blue-600 hover:underline text-center"
        >
          Back to login
        </Link>
      </form>
    </div>
  );
}
