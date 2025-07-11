import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Register() {
  // State for user input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handler for user registration
  const handleRegister = async (e) => {
    e.preventDefault();   // Prevent default form submission
    setError("");         // Reset error state before new request
    setSuccess("");       // Reset success state before new request
    try {
      // Register user with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Registration was successful! Welcome");
      setEmail("");       // Clear email input on success
      setPassword("");    // Clear password input on success
    } catch (err) {
      setError(err.message);  // Set error message if registration fails
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

        {/* УСПЕХ */}
        {success && (
          <Alert variant="default" className="mb-4 bg-green-50 border border-green-200 flex items-start">
            <CheckCircle2 className="text-green-500 mr-3 mt-1 w-6 h-6" />
            <div>
              <AlertTitle>Successfully!</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </div>
          </Alert>
        )}

        {/* ERROR */}
        {error && (
          <Alert variant="destructive" className="mb-4 bg-red-50 border border-red-200 flex items-start">
            <AlertTriangle className="text-red-500 mr-3 mt-1 w-6 h-6" />
            <div>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}

        <div className="mb-4">
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Register
        </button>
        <div className="flex justify-center mt-4 text-sm">
          <Link to="/login" className="text-blue-600 hover:underline">
            You have alredy have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
