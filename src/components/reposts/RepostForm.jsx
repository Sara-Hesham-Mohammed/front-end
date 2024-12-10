import React, { useState } from 'react';
import ArticlePreview from './ArticlePreview';
import CaptionInput from './CaptionInput';
import RepostFormActions from './RepostFormActions';

const RepostForm = ({ article, onRepost, onCancel }) => {
  const [caption, setCaption] = useState('');

  const handleRepost = () => {
    if (caption.trim() === '') {
      alert('Please add a caption.');
      return;
    }
    onRepost({ caption, article });
  };

  return (
    <div className="bg-white border rounded-xl p-6 shadow-lg max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4 text-gray-800">Repost Article</h1>
      <ArticlePreview article={article} />
      <CaptionInput caption={caption} setCaption={setCaption} />
      <RepostFormActions onCancel={onCancel} onSubmit={handleRepost} />
    </div>
  );
};

export default RepostForm;
