import { assets } from "../../assets/assets";

const Home8 = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 text-white"
      style={{
        backgroundImage: `url(${assets.download})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="container mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-3xl font-bold">274</h2>
          <p className="text-lg">Online</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-3xl font-bold">1K</h2>
          <p className="text-lg">Investors</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-3xl font-bold">810,780</h2>
          <p className="text-lg">Investments</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-3xl font-bold">$5M</h2>
          <p className="text-lg">Profits</p>
        </div>
      </div>
    </section>
  );
};

export default Home8;
