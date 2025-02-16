import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Home6 = () => {
  return (
    <div className="bg-black text-white py-16 px-6 flex flex-col md:flex-row items-center ">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={assets.about}
          alt="Referral System"
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full md:pl-10 mt-6 md:mt-0 text-left">
        <h2 className="text-2xl md:text-3xl font-bold">Our Referral System</h2>
        <div className="w-16 h-1 bg-white my-3"></div>
        <p className="text-gray-400 mb-4">
          We operate a two (2) generational referral system. Investors can earn
          in our referral system by sharing/advertising their links on social
          media. We reward investors when others sign up with their referral
          link and invest. We reward up to two (2) generations of referrals.
        </p>

        <ul className="text-gray-400 space-y-2 mb-6">
          <li>• 5% first generation</li>
          <li>• 3% second generation</li>
          <li>• Credited automatically</li>
        </ul>

        <Link to={"/signup"}>
          <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home6;
