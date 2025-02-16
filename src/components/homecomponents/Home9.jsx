import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { assets } from "../../assets/assets";

const testimonials = [
  {
    name: "Annabelle Hernandez",
    location: "Oslo, Norway",
    image: assets.profile1,
    review:
      "I've tried multiple trading platforms, but this one truly stands out. The user experience is seamless!",
  },
  {
    name: "Amara Patel",
    location: "Mumbai, India",
    image: assets.profile2,
    review:
      "I was skeptical at first, but after consistent profits, I can confidently say this platform is reliable.",
  },
  {
    name: "Carlos Mendez",
    location: "Madrid, Spain",
    image: assets.profile3,
    review:
      "The support team is amazing, and the trading tools are top-notch. Highly recommended!",
  },
  {
    name: "Miaeloise",
    location: "Toronto, Canada",
    image: assets.profile6,
    review:
      "A game-changer in the trading industry! The analytics and insights provided are invaluable.",
  },
  {
    name: "Jackson",
    location: "Usa",
    image: assets.profile5,
    review:
      "This platform has helped me achieve my financial goals faster than I ever imagined!",
  },
  {
    name: "Ralph Collins",
    location: "Berlin, Germany",
    image: assets.profile4,
    review:
      "I appreciate the transparency and ease of use. My returns have been consistently great!",
  },
];

export default function Home9() {
  return (
    <div className="bg-black py-12 flex justify-center">
      <div className="w-full max-w-3xl text-white text-center px-4">
        <h2 className="text-xl font-bold text-red-500 mb-6">
          What Our Clients Say
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start mx-auto max-w-full md:max-w-lg h-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full md:mr-4 mb-4 md:mb-0"
                />
                <div className="text-left">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                  <p className="mt-2 text-sm">{testimonial.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
