import React from 'react';

const RepostFormActions = ({ onCancel, onSubmit }) => {
  return (
    <div className="flex justify-between mt-4">
      <button 
        onClick={onCancel} 
        className="bg-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-400 transition-colors">
        Cancel
      </button>
      <button 
        onClick={onSubmit} 
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
        Repost
      </button>
    </div>
  );
};

export default RepostFormActions;
