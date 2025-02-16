const Example = () => {
  return (
    <div>
      <iframe
        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22BTC%2FUSD%22%2C%22proName%22%3A%22COINBASE%3ABTCUSD%22%7D%2C%7B%22description%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22COINBASE%3AETHUSD%22%7D%2C%7B%22description%22%3A%22BCH%2FUSD%22%2C%22proName%22%3A%22COINBASE%3ABCHUSD%22%7D%2C%7B%22description%22%3A%22LTC%2FUSD%22%2C%22proName%22%3A%22COINBASE%3ALTCUSD%22%7D%2C%7B%22description%22%3A%22XRPUSD%22%2C%22proName%22%3A%22COINBASE%3AXRPUSD%22%7D%2C%7B%22description%22%3A%22USDT%2FUSD%22%2C%22proName%22%3A%22COINBASE%3AUSDTUSD%22%7D%5D%2C%22showSymbolLogo%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.cryptooptiontrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.cryptooptiontrades.com%2Fdashboard%2F%22%7D"
        title="ticker tape TradingView widget"
        lang="en"
        style={{
          userSelect: "none",
          boxSizing: "border-box",
          display: "block",
          height: "74px",
          width: "100%",
          border: "none", // Replace frameBorder with CSS
          overflow: "hidden", // Replace scrolling with CSS
        }}
      ></iframe>
    </div>
  );
};

export default Example;
