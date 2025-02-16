import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setUser } from "../redux/authSlice";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken(); // Get the Firebase token

      localStorage.setItem("accessToken", token); // Save token to localStorage
      dispatch(setUser(userCredential.user));

      setMessage("Login successful!");
      setTimeout(() => {
        setMessage("");
        navigate("/dashboard"); // Redirect to the dashboard
      }, 3000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      setMessage("");
      const userCredential = await signInWithPopup(auth, googleProvider);
      dispatch(setUser(userCredential.user));
      setMessage("Login successful!");
      setTimeout(() => {
        setMessage("");
        navigate("/dashboard"); // Redirect to the dashboard
      }, 3000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign In</h2>

        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 p-2 rounded flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {message && (
          <p className="text-center text-green-500 mt-4">{message}</p>
        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 bg-white text-gray-700 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            <FcGoogle className="text-2xl" />
            <span>Sign in with Google</span>
          </button>
        </div>

        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link className="text-blue-400 hover:underline" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
