import { Link } from "react-router-dom";

const Home5 = () => {
  const options = [
    { name: "STOCKS" },
    { name: "FOREX" },
    { name: "CRUDE" },
    { name: "CRYPTO" },
    { name: "GOLD" },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        Choose what&apos;s right for you
      </h2>
      <div className="w-16 h-1 bg-white mx-auto my-3"></div>
      <p className="text-gray-400 mb-8">
        Invest on what you want, when you want to with our user-friendly
        platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {options.map((option, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-lg text-center hover:border-red-500 transition"
          >
            <h3 className="text-xl font-bold text-red-500">{option.name}</h3>
            <Link to={"./signup"}>
              <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                SELECT
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home5;
