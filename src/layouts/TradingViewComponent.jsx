import { useEffect, useRef } from "react";

const TradingViewComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "D",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      save_image: false,
      container_id: "tradingview_chart",
    });

    const container = containerRef.current;

    // Append the script only if it hasn't been appended already
    if (container && !container.querySelector("script")) {
      container.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen p-4 bg-gray-900">
      {/* Marquee Section */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-gray-800 p-2">
        <div className="animate-marquee flex space-x-8 text-green-400 text-sm font-semibold">
          <span>BTC/USD: $98,317.39 ▲+1.75%</span>
          <span>ETH/USD: $2,777.29 ▲+3.78%</span>
          <span>BCH/USD: $348.37 ▲+3.99%</span>
          <span>LTC/USD: $110.25 ▲+2.34%</span>
        </div>
      </div>

      {/* TradingView Chart */}
      <div
        ref={containerRef}
        className="w-full h-[500px]"
        id="tradingview_chart"
      ></div>
    </div>
  );
};

export default TradingViewComponent;
