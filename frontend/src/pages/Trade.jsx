import React from 'react';

import TradingViewWidget from '../components/TradingViewWidget';
import TradingViewTickerTape from '../components/TradingViewTickerTape';
import TradingViewNews from '../components/TradingViewNews';

const Trade = () => {

  return (
    <div className="trade">
      <TradingViewTickerTape />
      <div className="tradingview mb-8 flex flex-col p-8 justify-center items-center md:flex-row gap-8">
        <div className="h-[400px] w-[90%] md:h-[600px]"><TradingViewWidget/></div>
        <div><TradingViewNews /></div>
      </div>
      
    </div>
  );
};

export default Trade;