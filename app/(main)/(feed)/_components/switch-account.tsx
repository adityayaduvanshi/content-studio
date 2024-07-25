import React from 'react';
import { CircleUserRound } from 'lucide-react';

const SwitchAccount: React.FC = () => {
  return (
    <div className=" border-b  py-3.5 px-4 bg-gray-100 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
          P
        </span>
        <span className=" font-semibold">Personal</span>
      </div>
    </div>
  );
};

export default SwitchAccount;
