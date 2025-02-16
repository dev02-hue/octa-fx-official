import {
  FaTachometerAlt,
  FaWallet,
  FaHistory,
  FaUser,
  FaHeadset,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DashboardNav from "../layouts/DashboardNav";
import Example from "../components/homecomponents/example";
import CustomerSupport from "../layouts/CustomerSupport";

const SupportPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-24 md:w-64 bg-gray-900 text-white p-4 flex flex-col">
        {/* Logo */}
        <div className="text-xs text-blue-700 md:text-xl font-bold mb-6 text-center">
          Octafx Trading Signal
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <NavLink to={"/dashboard"}>
              <li className="md:flex items-start md:items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FaTachometerAlt /> <span>Dashboard</span>
              </li>
            </NavLink>
            <NavLink to={"/dashboard/deposit"}>
              <li className="md:flex items-start md:items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FaWallet /> <span>Deposit</span>
              </li>
            </NavLink>
            <NavLink to={"/dashboard/history"}>
              <li className="md:flex items-left md:items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FaHistory /> <span className="">Transaction History</span>
              </li>
            </NavLink>
            <NavLink to={"/dashboard/profile"}>
              <li className="md:flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FaUser /> <span>Profile</span>
              </li>
            </NavLink>
            <NavLink to={"/dashboard/support"}>
              <li className="md:flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FaHeadset /> <span>Support</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </aside>

      {/* Dynamic Right Section */}
      <main className="bg-gray-900 overflow-auto">
        <DashboardNav />
        <Example />
        <CustomerSupport />
      </main>
    </div>
  );
};

export default SupportPage;
