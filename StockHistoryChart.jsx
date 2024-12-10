import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const StockHistoryChart = ({ symbol }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/stocks/history/${symbol}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [symbol]);

  if (!data) return <p>Loading...</p>;

  const chartData = {
    labels: data.map((point) => point.date),
    datasets: [
      {
        label: `${symbol} Price`,
        data: data.map((point) => point.price),
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockHistoryChart;
