export default function LiveTradingCharts() {
  return (
    <section className="bg-black text-white py-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Live Trading Charts</h2>
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <iframe
            src="https://tradingview.deriv.com/"
            width="100%"
            height="500px"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
