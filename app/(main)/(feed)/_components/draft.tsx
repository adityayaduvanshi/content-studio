import { Button } from '@/components/ui/button';
import React from 'react';

const Draft: React.FC = () => {
  return (
    <div className="p-5 border-b ">
      {/* <button className="w-full bg-blue-500 text-white py-2  hover:bg-blue-600 transition duration-200 mb-3">
     
      </button> */}
      <Button className=" w-full bg-blue-600 hover:bg-blue-500">
        {' '}
        + New Draft
      </Button>
      <p className="text-gray-700 mt-2">Drafts</p>
      <p className="text-gray-700 mt-2">Scheduled</p>
    </div>
  );
};

export default Draft;
