import { Files, Maximize2, Trash2 } from 'lucide-react';
import React from 'react';

const DraftItem = () => {
  return (
    <div className="border border-gray-500 rounded-lg p-4 flex flex-col justify-between w-[350px] h-[330px]">
      <div>
        <p className="text-sm text-gray-700 mb-2">
        Excited to share insights on scaling Global Capability Centers! These hubs drive innovation, optimize processes, and foster growth. Lets discuss strategies to enhance their impact.
        </p>
        <p className="text-sm text-gray-600">
          Whether its picking up a new skill, diving into the latest industry trends, or simply challenging ourselves to think differently, continuous learning keeps us innovative and adaptable. Let's commit to being lifelong learners and inspire those...
        </p>
      </div>
      <div className="pt-7">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Saved 2 days ago</span>
          <div className="flex space-x-3 pr-4 cursor-pointer">
          <Maximize2 />
          <Trash2 />
          <Files />
            <button className="bg-blue-600 text-white px-5 py-[6px] hover:bg-blue-900">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftItem;