import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from '../../assets/Google_Favicon_2025.svg'; // SVG file
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Login() {
  // State hooks for form data and feedback
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");   // For successful message
  const [showReset, setShowReset] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  // Handle login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); setInfo("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setInfo("Login successful!");
      setTimeout(() => navigate("/"), 1200);  // Redirect after 1.2s
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle login with Google
  const handleGoogle = async () => {
    setError(""); setInfo("");
    try {
      await signInWithPopup(auth, googleProvider);
      setInfo("Login via Google is successful!");
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle password reset
  const handleReset = async () => {
    setError(""); setInfo("");
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setInfo("The password reset email has been sent!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

        {/* Error */}
        {error && (
          <Alert variant="destructive" className="mb-4 flex items-start bg-red-50 border border-red-200">
            <AlertTriangle className="text-red-500 mr-3 mt-1 w-5 h-5" />
            <div>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}

        {/* Information/Success */}
        {info && (
          <Alert className="mb-4 flex items-start bg-green-50 border border-green-200">
            <CheckCircle2 className="text-green-500 mr-3 mt-1 w-5 h-5" />
            <div>
              <AlertTitle>Successfuly!</AlertTitle>
              <AlertDescription>{info}</AlertDescription>
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
        {!showReset && (
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
        )}
        {showReset ? (
          <div className="mb-4">
            {resetSent ? (
              <span className="text-green-600">An e-mail was sent!</span>
            ) : (
              <button
                onClick={handleReset}
                type="button"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Reset password
              </button>
            )}
          </div>
        ) : (
          <>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Log In
            </button>
            <button
              onClick={handleGoogle}
              type="button"
              className="w-full py-2 mt-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <img
                src={GoogleLogo}
                alt="Google"
                className="w-5 h-5 mr-2"
                style={{ minWidth: 20, minHeight: 20, maxWidth: 24, maxHeight: 24 }}
              />
              Log in with Google
            </button>
          </>
        )}
        <div className="flex justify-between mt-4 text-sm">
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setShowReset(!showReset)}
          >
            {showReset ? "Back" : "You forgot your password?"}
          </button>
          <Link to="/register" className="text-blue-600 hover:underline">
            Registration
          </Link>
        </div>
      </form>
    </div>
  );
}
