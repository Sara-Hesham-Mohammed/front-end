import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const StockPrice = ({ symbol }) => {
  const [price, setPrice] = useState(null);
  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.emit('subscribeToStock', symbol);
    socket.on('stockPriceUpdate', (data) => setPrice(data));
    return () => socket.disconnect();
  }, [symbol]);

  return <div>{price ? `Current Price: $${price}` : 'Loading...'}</div>;
};

export default StockPrice;
