import React, { useState } from 'react';

const AdvancedSearch = ({ onAdvancedSearch }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdvancedSearch({ startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 border"
      />
      <label>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-2 border"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Filter</button>
    </form>
  );
};

export default AdvancedSearch;
