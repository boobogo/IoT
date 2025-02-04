import React, { useEffect, useRef, memo } from 'react';

function TradingViewTickerTape() {
  const container = useRef();

  useEffect(() => {
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "adaptive",
        "width": "400",
        "height": "600",
        "colorTheme": "light",
        "locale": "en"
        }  
      `;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewTickerTape);