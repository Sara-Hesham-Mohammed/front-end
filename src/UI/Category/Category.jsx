import React from 'react';

const Category = ({ options }) => {
  return (
    <div>
      {/* Dropdown menu for small screens */}
      <div className="sm:hidden">
        <label htmlFor="Category" className="sr-only">Category</label>
        <select
          id="Category"
          className="w-full rounded-md border-gray-200"
          onChange={(e) => options.find((opt) => opt.label === e.target.value)?.onClick()}
        >
          {options.map((option) => (
            <option key={option.label} value={option.label} selected={option.isSelected}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation menu for larger screens */}
      <div className="hidden sm:block">
        <nav className="flex gap-6" aria-label="Categories">
          {options.map((option) => (
            <a
              key={option.label}
              href={option.href}
              className={`shrink-0 rounded-lg p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700 ${
                option.isSelected ? 'bg-sky-100 text-sky-600' : 'text-gray-500'
              }`}
              aria-current={option.isSelected ? 'page' : undefined}
              onClick={option.onClick}
            >
              {option.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Category;
