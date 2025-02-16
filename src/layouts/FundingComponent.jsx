import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiXrp, SiDogecoin } from "react-icons/si";
import { useState } from "react";
import { assets } from "../assets/assets";

const wallets = [
  {
    name: "Bitcoin",
    icon: <FaBitcoin />,
    address: "17JRbLaEYDSLsRJ34XCcsq6Yq4GyANie83",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum />,
    address: "0x4997606c27df68cf41eea5c7d61ab35e6d60ee3e",
  },
  {
    name: "Usdc",
    icon: assets.avatar, // This is an image
    address: "0x4997606c27df68cf41eea5c7d61ab35e6d60ee3e",
  },
  {
    name: "USDT",
    icon: <SiTether />,
    address: "TJDBYxpBYQ291rfaVc2E9pNGajSj9qJryF",
  },
  {
    name: "XRP",
    icon: <SiXrp />,
    address: "rJn2zAPdFA193sixJwuFixRkYDUtx3apQh",
  },
  {
    name: "DOGE",
    icon: <SiDogecoin />,
    address: "D9kPiod3CS2LFx84mqVjpz923PyoadXXqC",
  },
];

const FundingComponent = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (address, name) => {
    navigator.clipboard.writeText(address);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500); // Reset after 1.5s
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Go Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-red-600 hover:bg-red-500 transition rounded-md text-white"
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-semibold mb-4">Account Funding</h2>
      <p className="mb-6 text-gray-400">
        Fund your account by sending your desired investment amount to the
        currency address below. Click the address to copy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wallets.map(({ name, icon, address }) => (
          <div
            key={name}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:scale-105 transition"
          >
            {/* Render icon or image */}
            {typeof icon === "string" ? ( // Check if icon is an image path
              <img
                src={icon} // Use the image path
                alt={name}
                className="w-12 h-12 mb-3 rounded-full" // Adjust size and styling
              />
            ) : (
              <div className="text-4xl mb-3 text-yellow-400">{icon}</div> // Render icon
            )}

            <h3 className="text-xl font-medium mb-2">{name}</h3>
            <p
              className="text-gray-300 text-sm bg-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition text-center select-all"
              onClick={() => copyToClipboard(address, name)}
            >
              {address}
            </p>
            {copied === name && (
              <span className="text-green-400 text-sm mt-2">Copied!</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingComponent;
