import { useState } from "react";

export default function Home12() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // You can replace this with an API call to submit form data
  };

  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Make an Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full p-3 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full p-3 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            className="w-full p-3 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
