import { Link } from "react-router-dom";

const plans = [
  {
    name: "STARTER",
    price: "$2000",
    roi: "95% ROI",
  },
  {
    name: "STANDARD",
    price: "$5000",
    roi: "100% ROI",
  },
  {
    name: "EXECUTIVE",
    price: "$15000",
    roi: "120% ROI",
  },
];

const CopyPlans = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
          Choose Your Copy Plan
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
      </div>

      {/* Pricing Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="bg-pink-600 text-white py-3 mt-4 rounded-lg text-2xl font-bold">
              {plan.price}
            </div>
            <p className="text-gray-300 font-medium mt-4">{plan.roi}</p>
            <p className="text-gray-400 mt-2 text-sm">Bitcoin Accepted</p>
            <p className="text-gray-400 mt-2 text-sm">12Hash 1MHZ 48h</p>
            <p className="text-gray-400 mt-2 text-sm">1 Trade Per Day</p>
            <p className="text-gray-400 mt-2 text-sm">
              Dedicated Account Manager 24/7
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Full Access to All Features
            </p>
            <Link to={"/signup"}>
              <button className="bg-[#F9A825] px-3 py-3 mt-2 rounded-full cursor-pointer">
                START TRADING
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CopyPlans;
