import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How long does withdrawal take?",
    answer:
      "Withdrawals are paid in a space of 0 - 24 hours, considering the functioning of the blockchain network when there are many transactions to be added to a block.",
  },
  {
    question: "Is DEPOSIT Automatic?",
    answer:
      "All deposits are automatically credited to your balance, as you send BTC to the unique wallet address generated during funding request.",
  },
  {
    question: "Can I invest in multiple plans?",
    answer:
      "Yes, you can invest in multiple plans. All investments run concurrently.",
  },
  {
    question: "What does OctaFx company trade?",
    answer:
      "OctaFx Trading Signals earns on cryptocurrency mining as well as on cloud mining and trading of cryptocurrencies.",
  },
  {
    question: "Is the company legally registered?",
    answer:
      "OctaFx Trading Signal Company is a subsidiary of FINANCIAL SERVICES BUREAU LIMITED incorporated in United Kingdom.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Registration on OctaFx Trading Signal Company is free.",
  },
  {
    question: "When can I withdraw money",
    answer:
      "You can make a request at anytime, including weekends. Regardless always consult your account manager for advice as your trading plans should be put into consideration.",
  },
  {
    question: "What is withdrawal limit?",
    answer: "There is no limit for withdrawals.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full text-white bg-black">
      <h2 className="text-2xl font-bold text-center text-red-500 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-2">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold p-3 bg-gray-800 rounded-md hover:bg-gray-700"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 mt-2 bg-white text-black rounded-md shadow-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
