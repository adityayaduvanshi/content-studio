'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Draft: React.FC = () => {
  const router = useRouter();
  return (
    <div className="p-5 pb-2 border-b ">
      {/* <button className="w-full bg-blue-500 text-white py-2  hover:bg-blue-600 transition duration-200 mb-3">
     
      </button> */}
      <Button
        onClick={() => router.push('/new')}
        className=" w-full bg-blue-600 hover:bg-blue-500"
      >
        + New Draft
      </Button>
      <p className="text-gray-700 mt-3 ml-1 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100">Drafts</p>
      <p className="text-gray-700 mt-2 ml-1 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100">Scheduled</p>
    </div>
  );
};

export default Draft;
