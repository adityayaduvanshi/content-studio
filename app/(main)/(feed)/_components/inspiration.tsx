"use client";
import React, { useState } from "react";
import {
  Bookmark,
  CirclePlus,
  Folder,
  Menu,
  TrendingUp,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Star,
  Trash2,
  FolderPen,
  Copy,
  Link,
} from "lucide-react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const InspirationComponent: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpandedItems(nodeIds);
  };

  const renderTreeItem = (
    label: string,
    children?: React.ReactNode,
    count?: number
  ) => (
    <TreeItem
      itemId={label}
      label={
        <div
          className="flex items-center justify-between w-full p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100 relative"
          onMouseEnter={() => setHoveredItem(label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span>{label}</span>
          {hoveredItem === label ? (
            <div className="absolute right-1" onClick={(e) => e.stopPropagation()}>
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </PopoverTrigger>
                <PopoverContent className="px-2 py-2 w-fit">
                  <div className="grid text-sm text-left">
                    <div className=" flex gap-2 text-md rounded-md hover:bg-slate-200 cursor-pointer py-1 px-2">
                    <Star className="w-4 h-4" />
                      Add to Favorites
                    </div>
                    <div className="flex gap-2 text-md hover:bg-slate-200 rounded-md cursor-pointer py-2 px-2">
                    <Link className="w-4 h-4" /> Copy link
                    </div>
                    <div className="hover:bg-slate-200 flex gap-2 text-md rounded-md cursor-pointer py-2 px-2">
                    <Copy className="w-4 h-4" /> Duplicate
                    </div>
                    <div className="hover:bg-slate-200 flex gap-2 text-md rounded-md cursor-pointer py-2 px-2">
                    <FolderPen className="w-4 h-4" /> Rename
                    </div>
                    <div className="hover:bg-slate-200 flex gap-2 text-md rounded-md cursor-pointer py-2 px-2">
                      Move to
                    </div>
                    <div className="hover:bg-slate-200 flex gap-2 text-md rounded-md cursor-pointer py-2 px-2">
                    <Trash2 className="w-4 h-4" /> Delete
                    </div>
                    <div className="hover:bg-slate-200 rounded-md flex gap-2 text-md cursor-pointer py-2 px-2">
                      Turn into wiki
                    </div>
                    <div className="hover:bg-slate-200 rounded-md flex gap-2 text-md cursor-pointer py-2 px-2">
                      Open in new tab
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) : !expandedItems.includes(label) ? (
            <span className="text-sm text-gray-500">{count}</span>
          ) : null}
        </div>
      }
      
      classes={{
        root: "text-inherit",
        content: "p-0 hover:bg-transparent focus:bg-transparent",
        iconContainer: "w-auto ml-1",
        label: "p-1",
        group: "ml-4",
      }}
    >
      {children}
    </TreeItem>
  
  );

  console.log("jaja")

  return (
    <div className="p-5 border-b">
      <div className="flex items-center justify-between p-1 mb-4 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100">
        <span className="font-medium ml-1">Inspiration</span>
        <div className="flex space-x-2">
          <CirclePlus className="w-4 h-4 text-gray-500 cursor-pointer" />
          <Folder className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100">
          <TrendingUp className="w-5 h-5 text-gray-500" />
          <span>Trending Topics</span>
        </div>
        <div className="flex items-center space-x-2 p-1 pt-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100">
          <Bookmark className="w-5 h-5 text-gray-500" />
          <span>Saved</span>
        </div>
        <div
          className="flex items-center justify-between p-1 pt-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100"
          onMouseEnter={() => setHoveredItem("all-topics")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="flex items-center space-x-2">
            <Menu className="w-5 h-5 text-gray-500" />
            <span>All Topics</span>
          </div>
          <span className="text-sm text-gray-500">1234</span>
        </div>
        <SimpleTreeView
          expanded={expandedItems}
          onNodeToggle={handleToggle}
        >
          {renderTreeItem(
            "AI Experts",
            <>
              <TreeItem itemId="ai-experts-1" label="Item-1" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto",
                label: "p-2",
              }} />
              <TreeItem itemId="ai-experts-2" label="Item-2" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto",
                label: "p-2",
              }} />
              <TreeItem itemId="ai-experts-3" label="Item-3" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto",
                label: "p-2",
              }} />
            </>,
            123
          )}
          {renderTreeItem(
            "LLM",
            <>
              <TreeItem
                itemId="llm-youtube"
                label={
                  <div className="flex items-center justify-between w-full">
                    <span>Youtube Channel</span>
                    <span className="text-sm text-gray-500">10</span>
                  </div>
                }
                classes={{
                  root: "text-inherit",
                  content: "p-0 hover:bg-transparent focus:bg-transparent",
                  iconContainer: "w-auto mr-1",
                  label: "p-2",
                }}
              />
              <TreeItem
                itemId="llm-google"
                label={
                  <div className="flex items-center justify-between w-full">
                    <span>Google News</span>
                    <span className="text-sm text-gray-500">100</span>
                  </div>
                }
                classes={{
                  root: "text-inherit",
                  content: "p-0 hover:bg-transparent focus:bg-transparent",
                  iconContainer: "w-auto mr-1",
                  label: "p-2",
                }}
              />
              <TreeItem
                itemId="llm-reddit"
                label={
                  <div className="flex items-center justify-between w-full">
                    <span>Subreddit</span>
                    <span className="text-sm text-gray-500">18</span>
                  </div>
                }
                classes={{
                  root: "text-inherit",
                  content: "p-0 hover:bg-transparent focus:bg-transparent",
                  iconContainer: "w-auto mr-1",
                  label: "p-2",
                }}
              />
            </>,
            128
          )}
          {renderTreeItem(
            "Another Category",
            <>
              <TreeItem itemId="another-1" label="Item-1" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto mr-1",
                label: "p-2",
              }} />
              <TreeItem itemId="another-2" label="Item-2" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto mr-1",
                label: "p-2",
              }} />
              <TreeItem itemId="another-3" label="Item-3" classes={{
                root: "text-inherit",
                content: "p-0 hover:bg-transparent focus:bg-transparent",
                iconContainer: "w-auto mr-1",
                label: "p-2",
              }} />
            </>,
            123
          )}
        </SimpleTreeView>
      </div>
    </div>
  );
};

export default InspirationComponent;