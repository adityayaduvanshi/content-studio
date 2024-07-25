'use client';
import React from 'react';
import { Bookmark, CirclePlus, Folder, Menu, TrendingUp } from 'lucide-react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const InspirationComponent: React.FC = () => {
  return (
    <div className="p-5 border-b border-gray-600">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium">Inspiration</span>
        <div className="flex space-x-2">
          <CirclePlus className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Folder className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-gray-500" />
          <span className="mt-1">Trending Topics</span>
        </div>
        <div className="flex items-center space-x-2">
          <Bookmark className="w-5 h-5 text-gray-500" />
          <span className="mt-1">Saved</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Menu className="w-5 h-5 text-gray-500" />
            <span className="mt-1">All Topics</span>
          </div>
          <span className="text-sm text-gray-500">1234</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SimpleTreeView>
              <TreeItem className=" bg-white" itemId="grid" label="AI Experts">
                <TreeItem itemId="grid-community" label="Item-1" />
                <TreeItem itemId="grid-pro" label="Item-2" />
                <TreeItem itemId="grid-premium" label="Item-3" />
              </TreeItem>
            </SimpleTreeView>
          </div>
          <span className="text-sm text-gray-500">123</span>
        </div>
        <div className="flex items-center justify-between ">
          <SimpleTreeView>
            <TreeItem itemId="grid" label="LLM">
              <TreeItem itemId="grid-community" label="Youtube- Channel" />
              <TreeItem itemId="grid-pro" label="Google News" />
              <TreeItem itemId="grid-premium" label="Subreddit" />
            </TreeItem>
          </SimpleTreeView>
          <span className="text-sm text-gray-500">123</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SimpleTreeView>
              <TreeItem itemId="grid" label="AI Experts">
                <TreeItem itemId="grid-community" label="Item-1" />
                <TreeItem itemId="grid-pro" label="Item-2" />
                <TreeItem itemId="grid-premium" label="Item-3" />
              </TreeItem>
            </SimpleTreeView>
          </div>
          <span className="text-sm text-gray-500">123</span>
        </div>
      </div>
    </div>
  );
};

export default InspirationComponent;
