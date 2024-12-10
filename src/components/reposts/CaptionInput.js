import React from 'react';

const CaptionInput = ({ caption, setCaption }) => {
  return (
    <textarea
      placeholder="Add a caption..."
      value={caption}
      onChange={(e) => setCaption(e.target.value)}
      className="w-full bg-slate-100 border p-2 mt-2 rounded-lg"
    ></textarea>
  );
};

export default CaptionInput;
