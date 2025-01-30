import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/StockTicker.css";

const stockData = [
  { symbol: "AAPL", price: 185.30, change: +1.25 },
  { symbol: "TSLA", price: 209.80, change: -2.14 },
  { symbol: "AMZN", price: 151.50, change: +3.10 },
  { symbol: "GOOG", price: 141.20, change: -1.45 },
  { symbol: "MSFT", price: 390.10, change: +0.95 },
  { symbol: "NFLX", price: 412.35, change: -3.20 },
  { symbol: "NVDA", price: 679.50, change: +4.55 },
  { symbol: "META", price: 318.75, change: -0.75 },
  { symbol: "AMD", price: 125.30, change: +2.60 },
  { symbol: "SPY", price: 450.20, change: -1.10 },
];

export default function StockTicker() {
  return (
    <div className="stock-ticker-container">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {stockData.map((stock, index) => (
          <div key={index} className="stock-item">
            {stock.symbol}: ${stock.price.toFixed(2)}{" "}
            <span className={stock.change >= 0 ? "up" : "down"}>
              {stock.change >= 0 ? "📈 +" : "📉 "}
              {Math.abs(stock.change).toFixed(2)}
            </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </div>
        ))}
      </Marquee>
    </div>
  );
}
