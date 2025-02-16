const Home7 = () => {
  const features = [
    {
      title: "Guaranteed Investment",
      icon: "💰",
      description:
        "Your investment begins to grow immediately you have invested. Profits begin to accrue to your investment as the clock ticks.",
    },
    {
      title: "Fund Account",
      icon: "₿",
      description:
        "After verification of your details, add funds to your account. This makes you ready to invest.",
    },
    {
      title: "Start Earning",
      icon: "🔄",
      description:
        "Invest in any suitable plan on our platform and your money starts growing. Earn more via referrals.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Our Features</h2>
        <p className="text-gray-400 mt-2">
          Great features for investors to join us. We operate a unique system.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home7;
