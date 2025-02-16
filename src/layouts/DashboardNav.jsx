import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUser, FaHeadset } from "react-icons/fa";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate

const DashboardNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const defaultProfilePic =
    "https://res.cloudinary.com/dqhllq2ht/image/upload/v1739616057/logo1_iah2ds.jpg";

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("accessToken"); // Ensure token is cleared
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold hidden md:block">
          Octafx Trading Signal
        </span>
      </div>

      {/* Center - Balances (Scrollable on small screens) */}
      <div className="flex-1 mx-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
        <div className="flex space-x-6 text-sm">
          <span>Bitcoin Balance: $0.00</span>
          <span>Ethereum Balance: $0.00</span>
          <span>USDT Balance: $0.00</span>
          <span>XRP Balance: $0.00</span>
          <span>DOGE Balance: $0.00</span>
        </div>
      </div>

      {/* Right - Profile Section */}
      <div className="relative">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={defaultProfilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          <span className="hidden md:inline">
            {user?.displayName || user?.email || "User"}
          </span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center border-b border-gray-700">
              <img
                src={defaultProfilePic}
                alt="Profile"
                className="w-12 h-12 rounded-full mb-2"
              />
              <span>{user?.displayName || user?.email || "User"}</span>
            </div>
            <ul className="text-sm">
              <NavLink to={"/dashboard/profile"}>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2">
                  <FaUser /> <span>Profile</span>
                </li>
              </NavLink>
              <NavLink to={"/dashboard/support"}>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center space-x-2">
                  <FaHeadset /> <span>Support</span>
                </li>
              </NavLink>
              <li
                className="px-4 py-2 text-red-500 hover:bg-gray-700 cursor-pointer flex items-center space-x-2"
                onClick={handleLogout}
              >
                <FiLogOut /> <span>Sign Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
