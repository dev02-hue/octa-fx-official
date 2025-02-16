import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & About */}
        <div>
          <img
            src={assets.logo1}
            alt="Crypto Option Trades"
            className="w-24 mb-4"
          />
          <p className="text-gray-400">
            OCTAFX TRADING SIGNALS is one of the leading investment platforms
            incorporated in the United Kingdom, offering an array of regulated
            investment programs from real trading processes.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "FAQ", "Support", "signup", "Login"].map(
              (link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-gray-400 flex flex-col hover:text-yellow-500 transition duration-300"
                >
                  ➤ {link}
                </Link>
              )
            )}
          </ul>
        </div>

        {/* Right Section - Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2">
            {[
              "Frequently Asked Questions",
              "Types Of Crypto Option Trades",
              "Choosing Which Trades To Place",
              "Utilising Economic Calendars",
              "Trader Bonuses And Promotion",
            ].map((resource) => (
              <Link
                to={"/support"}
                key={resource}
                className="text-gray-400 flex flex-col hover:text-yellow-500 transition duration-300"
              >
                ➤ {resource}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
