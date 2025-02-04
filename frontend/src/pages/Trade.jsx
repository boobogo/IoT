import React from 'react';

import TradingViewWidget from '../components/TradingViewWidget';
import TradingViewTickerTape from '../components/TradingViewTickerTape';
import TradingViewNews from '../components/TradingViewNews';

const Trade = () => {

  return (
    <div className="trade">
      <TradingViewTickerTape />
      <div className="tradingview mb-8 flex flex-col p-4 justify-center items-center md:flex-row gap-8">
        <TradingViewWidget />
        <TradingViewNews />
      </div>
    </div>
  );
};

export default Trade;
