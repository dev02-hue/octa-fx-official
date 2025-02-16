const CustomerSupport = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center">Customer Support</h1>

      {/* Support Message */}
      <p className="mt-4 text-gray-300 text-center">
        CryptoCopy Markets Customer Support
      </p>
      <p className="text-gray-400 text-center mt-2">
        You can contact us for any issues by sending a mail to{" "}
        <a
          href="mailto:support@cryptocopymarkets.com"
          className="text-blue-400 underline"
        >
          Octafxmessage@gmail.com
        </a>
      </p>
      <p className="text-gray-400 text-center mt-2">
        Or via Live Chat or WhatsApp
      </p>

      {/* Send Mail Button */}
      <div className="flex justify-center mt-6">
        <a
          href="mailto:Octafxmessage@gmail.com"
          className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-600"
        >
          Send A Mail
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2018 OCTAFX TRADING SIGNALS</p>
      </footer>
    </div>
  );
};

export default CustomerSupport;
