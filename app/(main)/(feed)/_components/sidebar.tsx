'use client';
import React, { useState, useEffect, useRef } from 'react';

import SwitchAccount from './switch-account';
import Draft from './draft';
import InspirationComponent from './inspiration';
import FooterComponent from './footerComponent';

const Sidebar = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(288);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!isResizing) return;
      const newWidth =
        e.clientX - sidebarRef.current.getBoundingClientRect().left;
      if (newWidth > 150 && newWidth < 600) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const startResizing = () => {
    setIsResizing(true);
  };

  return (
    <aside
      ref={sidebarRef}
      className="border-r overflow-y-auto flex flex-col relative"
      style={{ width: `${sidebarWidth}px` }}
    >
      <SwitchAccount />
      <Draft />
      <InspirationComponent />
      <FooterComponent />
      <div
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-gray-300 hover:bg-gray-400"
        onMouseDown={startResizing}
      />
    </aside>
  );
};

export default Sidebar;
