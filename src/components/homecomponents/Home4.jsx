const Home4 = () => {
    const plans = [
      {
        name: "PREMIUM",
        price: "$25000",
        roi: "150% ROI",
        hash: "12Hash 1MHZ 48h",
        robots: "2 Trade Robot",
      },
      {
        name: "GOLD",
        price: "$35000",
        roi: "220% ROI",
        hash: "15Hash 1MHZ 48h",
        robots: "3 Trade Robot",
      },
      {
        name: "DIAMOND",
        price: "$50000",
        roi: "350% ROI",
        hash: "20Hash 1MHZ 48h",
        robots: "4 Trade Robot",
      },
      {
        name: "Business",
        price: "$10000",
        roi: "450 % ROI",
        hash: "20Hash 3MHZ 48h",
        robots: "7 Trade Robot",
      },
    ];
  
    return (
      <div className="bg-black text-white py-12 px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900 text-center p-6 rounded-lg shadow-lg"
            >
              <div className="bg-pink-700 text-white py-4 text-xl font-bold uppercase">
                {plan.name}
              </div>
              <div className="text-3xl font-bold py-4">{plan.price}</div>
              <div className="text-gray-300 py-2">{plan.roi}</div>
              <div className="text-gray-300 py-2">Bitcoin Accepted</div>
              <div className="text-gray-300 py-2">{plan.hash}</div>
              <div className="text-gray-300 py-2">{plan.robots}</div>
              <div className="text-gray-300 py-2">
                Dedicated Account Manager 24/7
              </div>
              <div className="text-gray-300 py-2">
                Full Access to All Features
              </div>
              <div className="text-gray-300 py-2">24/7 Support</div>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full">
                START TRADING
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home4;
  