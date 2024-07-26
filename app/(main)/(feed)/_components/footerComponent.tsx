import React from 'react';

const FooterComponent: React.FC = () => {
  return (
    <div className="p-5 space-y-2 ml-1">
      <p className="text-gray-700 mt-1 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100 ">Upgrade</p>
      <p className="text-gray-700 pt-2 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100 ">Documentation</p>
      <p className="text-gray-700 pt-2 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100  ">Feedback</p>
    </div>
  );
};

export default FooterComponent;