import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // 🚀 Import navigation hook
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setUser } from "../redux/authSlice";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Import Firestore instance
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 🚀 Initialize navigation

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save additional user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
        phone: formData.phone,
        uid: user.uid,
        createdAt: new Date().toISOString(),
      });

      dispatch(setUser(user));
      setMessage("Registration successful!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setMessage("");
    setLoading(true);

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Reference to the Firestore document
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      // If user doesn't exist in Firestore, save additional details
      if (!userSnap.exists()) {
        const nameParts = user.displayName
          ? user.displayName.split(" ")
          : ["User"];
        const firstName = nameParts[0] || "User";
        const lastName =
          nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        await setDoc(userRef, {
          firstName,
          lastName,
          email: user.email,
          country: "", // User can update later
          phone: "", // User can update later
          uid: user.uid,
          photoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
        });
      }

      dispatch(setUser(user));
      setMessage("Google Sign-In successful!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setMessage(`Google Sign-In failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
        <h2 className="text-center text-2xl font-bold">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat Password"
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 p-2 rounded flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Register"
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
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
