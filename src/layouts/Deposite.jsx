import { Link } from "react-router-dom";

const depositPlans = [
  { name: "Starter", amount: 2000, roi: 50 },
  { name: "Standard", amount: 5000, roi: 80 },
  { name: "Executive", amount: 15000, roi: 120 },
  { name: "Premium", amount: 25000, roi: 150 },
  { name: "Gold", amount: 35000, roi: 220 },
  { name: "Diamond", amount: 50000, roi: 350 },
];

const Deposite = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Deposit</h2>
      <p className="text-center text-lg text-gray-400 mb-12">Select a Plan</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {depositPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
            <p className="text-blue-400 text-center text-lg mt-2">
              ${plan.amount}
            </p>
            <p className="text-gray-400 text-center">{plan.roi}% ROI</p>
            <Link to={"/dashboard/deposit/fund"}>
              <button className="mt-4 w-full bg-blue-600 py-2 rounded-lg text-white font-bold hover:bg-blue-500 transition-all">
                Select Plan
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deposite;
