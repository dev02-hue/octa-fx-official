import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black h-[6rem] text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={assets.logo1} alt="Logo" className="h-16" />
        <p>OCTAFX TRADING SIGNALS</p>
      </div>

      {/* Desktop Nav Links (Hidden on Small Screens) */}
      <ul className="hidden md:flex space-x-6">
        {["Home", "About", "FAQ", "Support", "signup", "Login"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-gray-300"
          >
            <li>{item}</li>
          </NavLink>
        ))}
        <select className="bg-gray-800 text-white py-1 px-2 rounded-md text-sm">
          <option>🌎 Select Language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </ul>

      {/* Right Section (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/signup">
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-full">
            Start Trading
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[8rem] left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-20">
          {["Home", "About", "FAQ", "Support", "Register", "Login"].map(
            (item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-gray-300"
              >
                <li>{item}</li>
              </NavLink>
            )
          )}
          <select className="bg-gray-800 text-white py-1 px-2 rounded-md text-sm">
            <option>🌎 Select Language</option>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <Link to="/signup">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-full">
              Start Trading
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
