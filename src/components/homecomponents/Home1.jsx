import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets"; // Import assets
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: assets.images, // First Background Image
    title: "Invest with Confidence, Grow with Purpose",
    text: "Unlocking Crypto's Full Potential with our unique trading platform.",
  },
  {
    id: 2,
    image: assets.download, // Second Background Image
    title: "Trade Smarter, Not Harder",
    text: "Discover AI-driven strategies to maximize your crypto earnings.",
  },
  {
    id: 3,
    image: assets.images, // Third Background Image
    title: "Your Gateway to Financial Freedom",
    text: "Start investing today and watch your portfolio grow effortlessly.",
  },
];

const Home1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden">
      {/* Background Image */}
      <motion.div
        key={slides[currentSlide].id}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <motion.div
        key={slides[currentSlide].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl mt-4">{slides[currentSlide].text}</p>

        {/* Buttons (Centered) */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link to={"/login"}>
            <button className="bg-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-pink-600 transition">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="border border-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition">
              SIGN UP
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home1;
