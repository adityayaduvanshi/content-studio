import React from 'react';
import SwitchAccount from './switch-account';
import Draft from './draft';
import InspirationComponent from './inspiration';

const Sidebar = () => {
  return (
    <aside className="w-[280px] border-r  overflow-y-auto flex flex-col">
      <SwitchAccount />
      <Draft />
      <InspirationComponent />
    </aside>
  );
};

export default Sidebar;
