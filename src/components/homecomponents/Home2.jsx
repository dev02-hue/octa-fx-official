import { FaUserCheck, FaWallet } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Home2 = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4">
          Get Instant Results by following these 3 simple steps
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 - Sign Up */}
        <div className="bg-gray-900 p-8 rounded-lg text-center">
          <FaUserCheck className="text-pink-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">SIGN UP</h3>
          <p className="text-gray-300 font-medium mt-2">Seamless</p>
          <p className="text-gray-400 mt-2 text-sm">
            Sign up via our registration link. Provide valid details in the form
            fields and hit the submit button.
          </p>
        </div>

        {/* Step 2 - Fund Account */}
        <div className="bg-gray-900 p-8 rounded-lg text-center">
          <MdOutlineAccountBalanceWallet className="text-pink-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">FUND ACCOUNT</h3>
          <p className="text-gray-300 font-medium mt-2">Automatic</p>
          <p className="text-gray-400 mt-2 text-sm">
            After verification of your details, add funds to your account. This
            makes you ready to invest.
          </p>
        </div>

        {/* Step 3 - Start Earning */}
        <div className="bg-gray-900 p-8 rounded-lg text-center">
          <FaWallet className="text-pink-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">START EARNING</h3>
          <p className="text-gray-300 font-medium mt-2">Quick and easy</p>
          <p className="text-gray-400 mt-2 text-sm">
            Invest in any suitable plan on our platform and your money starts
            growing. Earn more via referrals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home2;
