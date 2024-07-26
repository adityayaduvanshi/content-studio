import TextEditor from '@/components/text-editor';
import React from 'react';

const NewPage = () => {
  return (
    <div className=" grid grid-cols-2">
      <TextEditor />
      <div></div>
    </div>
  );
};

export default NewPage;
