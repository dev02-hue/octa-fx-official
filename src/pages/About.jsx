import Home7 from "../components/homecomponents/Home7";
import ImageComponent from "../layouts/ImageComponent";

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <ImageComponent />

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <h2 className="text-3xl font-bold">About OctaFx Trading Signal</h2>
          <p className="mt-4 text-gray-300">
            OctaFx Trading Signal is one of the leading investment platforms in
            crypto copy trading, incorporated since 2018. We offer a range of
            regulated investment programs from real trading processes, ensuring
            consistent profit for our investors regardless of market
            capitalization.
          </p>
          <h3 className="mt-6 text-2xl font-semibold">What We Do</h3>
          <p className="mt-2 text-gray-300">
            Our platform connects investors with top-performing traders,
            allowing them to copy trades and earn profits without losing control
            of their funds. Users can store their funds in their own exchange
            accounts or portfolios.
          </p>
          <h3 className="mt-6 text-2xl font-semibold">Why Choose Us?</h3>
          <p className="mt-2 text-gray-300">
            Beginners can trade like professionals by automatically copying
            expert positions. Our platform simplifies crypto investments, even
            for those new to the market.
          </p>
          <h3 className="mt-6 text-2xl font-semibold">
            WHY IS COPY TRADING GREAT FOR NEWBIES?
          </h3>
          <p className="mt-2 text-gray-300">
            Crypto copy trading is a great option if you are brand new to the
            cryptocurrency industry, because the thing about cryptocurrency
            trading, in general, is that it often requires a lot of time and
            research. For example, traders will need to find the best
            cryptocurrency projects, otherwise known as ‘hidden gems’, according
            to the cryptocurrency community. You will also need to manage your
            trades and keep track of what’s going on when it comes to the
            industry. This means that you need to have advanced knowledge of
            technical analysis. Of course, building up skills like this and
            doing your research is going to take a lot of your time. There are a
            lot of green traders out there that are using copy trading because
            it allows them to make money while investing little of their effort
            and time.
          </p>
        </div>
      </div>
      <Home7 />
    </section>
  );
};

export default About;
