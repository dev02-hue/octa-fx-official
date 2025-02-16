import { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://octa-backend.onrender.com/send-support-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl font-bold">REACH OUT TO US</h2>
      <p className="text-gray-400 mt-2">Home / REACH OUT TO US</p>

      <div className="bg-gray-900 p-6 rounded-lg mt-6 w-full max-w-md">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">EMAIL</span>
        </div>
        <p className="text-gray-400 mt-2">support@cryptooptiontrades.com</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-black rounded-md text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-black rounded-md text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-black rounded-md text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-700 bg-black rounded-md text-white h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Support;
