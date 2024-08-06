import React from 'react';
import DraftItem from './draft-item';

const PostedTab = () => {
  const draftItems = Array(6).fill(null); 

  return (
    <div className="grid grid-cols-3 gap-4 p-5 pl-16  ">
      {draftItems.map((_, index) => (
        <DraftItem key={index} />
      ))}
    </div>
  );
};

export default PostedTab