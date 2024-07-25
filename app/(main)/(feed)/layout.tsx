import { Button } from '@/components/ui/button';
import React from 'react';
import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* Left Sidebar */}
      <Sidebar />
      {/* <aside className="w-64 border-r p-4 overflow-y-auto flex flex-col">
   
        <Button className="w-full mb-4">+ New Draft</Button>

        <div className="space-y-2">
          <p>Drafts</p>
          <p>Scheduled</p>
        </div>

        <div className="mt-4 flex-grow">
          <p className="font-semibold">Inspiration</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center justify-between">
              <span>Trending Topics</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </li>
            <li>Saved</li>
            <li className="flex items-center justify-between">
              <span>All Topics</span>
              <span className="text-sm text-gray-500">1234</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Demo</span>
              <span className="text-sm text-gray-500">123</span>
            </li>
            <li className="flex items-center justify-between">
              <span>LLM</span>
              <span className="text-sm text-gray-500">123</span>
            </li>
            <li className="flex items-center justify-between pl-4">
              <span>Youtube - Channel...</span>
              <span className="text-sm text-gray-500">10</span>
            </li>
            <li className="flex items-center justify-between pl-4">
              <span>Google News - Keyw...</span>
              <span className="text-sm text-gray-500">100</span>
            </li>
            <li className="flex items-center justify-between pl-4">
              <span>Subreddit</span>
              <span className="text-sm text-gray-500">18</span>
            </li>
            <li className="flex items-center justify-between">
              <span>AI Experts</span>
              <span className="text-sm text-gray-500">123</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 space-y-2">
          <p>Upgrade</p>
          <p>Documentation</p>
          <p>Feedback</p>
        </div>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}

        <Navbar />

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
};

export default FeedLayout;
