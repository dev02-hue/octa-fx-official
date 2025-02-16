import { assets } from "../../assets/assets";

export default function Home10() {
  const investors = [
    {
      name: "Elroy Bot",
      joined: "2025",
      withdrawal: "Withdrawal pendng",
      image: assets.mainclient,
      investors: "New Investor",
    },
    {
      name: "Annabelle Hernandez",
      joined: "2018",
      withdrawal: "$250,000.00",
      image: assets.profile1,
      investors: "Top Investor",
    },
    {
      name: "Ivy Webster",
      joined: "2019",
      withdrawal: "$119,000.00",
      image: assets.female1,
      investors: "Top Investor",
    },
    {
      name: "Alex Johnson",
      joined: "2025",
      withdrawal: "Withdrawal pendng",
      image: assets.male1,
      investors: "New Investor",
    },
    {
      name: "caroline",
      joined: "2025",
      withdrawal: "Withdrawal pendng",
      image: assets.female2,
      investors: "New Investor",
    },
    {
      name: "Ray Smith",
      joined: "2019",
      withdrawal: "$119,000.00",
      image: assets.male2,
      investors: "Top Investor",
    },
  ];

  return (
    <section className="bg-black text-white py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Our Top Investors</h2>
        <p className="text-gray-400 mb-6">
          We kept track of the Top players on our platform so you learn and get
          inspired.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={investor.image}
                alt={investor.name}
                className="w-24 h-24 mx-auto rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">{investor.name}</h3>
              <p className="text-gray-400 text-sm">{investor.investors}</p>
              <p className="text-gray-500 text-sm">
                Joined in {investor.joined}
              </p>
              <p className="text-yellow-400 font-bold mt-2">
                Record: {investor.withdrawal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
