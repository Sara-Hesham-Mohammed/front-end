import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, category, source });
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border"
      />
      <select onChange={(e) => setCategory(e.target.value)} className="p-2 border">
        <option value="">Select Category</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <select onChange={(e) => setSource(e.target.value)} className="p-2 border">
        <option value="">Select Source</option>
        <option value="BBC">BBC</option>
        <option value="CNN">CNN</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white">Search</button>
    </form>
  );
};

export default SearchBar;
