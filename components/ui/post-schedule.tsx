import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Linkedin, Twitter } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const ScheduleButton = () => (
  <Button variant="secondary">Schedule</Button>
);

export const PostNowButton = () => (
  <Button className=" bg-blue-500 text-white">Post Now</Button>
);

const EditorButtons = () => {
  return (
    <div className="flex justify-end items-center mb-4">
      <div className="text-sm text-gray-500 mr-7 ">Saved 2 mins ago</div>
      <div className="flex gap-3">
        <Popover>
          <PopoverTrigger>
            <ScheduleButton />
          </PopoverTrigger>
          <PopoverContent className="w-[450px] overflow-y-auto p-1">
            <div className="space-y-1">
              <div className="text-md font-semibold p-2">Schedule Post</div>

              <div className="flex items-center gap-14">
                <h3 className=" text-md font-semibold p-3 pl-7">Schedule</h3>

                <div className="flex items-center justify-between">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker label="Basic date picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex justify-end text-blue-400 cursor-pointer underline underline-offset-1 pr-20 text-sm">
                Pick next free slot in the queue
              </div>

              <div className="flex pt-5">
                <h3 className=" text-md font-semibold p-3 pl-7">Platforms</h3>
                <div className="space-y-4 pt-4 pl-14 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-7">
                      <Switch />
                      <Linkedin className="w-6 h-6" />
                      <span>@icebe_ckv</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-7">
                      <Switch />
                      <Twitter className="w-6 h-6" />
                      <span>@icebe_ckv</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end p-3 pr-8">
                <Button
                  variant="ghost"
                  className="py-2 px-5 text-md text-blue-400 inline-block border border-blue-400 rounded"
                >
                  Cancel
                </Button>
                <Button className="py-2 px-5 text-md text-white bg-blue-500 rounded-sm ">
                  Schedule Post
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <PostNowButton />
          </PopoverTrigger>
          <PopoverContent className="w-[450px] overflow-y-auto p-1">
            <div className="space-y-1">
              <div className="text-md font-semibold p-2">Post Now</div>

              <div className="flex">
                <h3 className=" text-md font-semibold p-3 pl-7">Platforms</h3>
                <div className="space-y-4 pt-4 pl-7 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-7">
                      <Switch />
                      <Linkedin className="w-6 h-6" />
                      <span>@icebe_ckv</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-7">
                      <Switch />
                      <Twitter className="w-6 h-6" />
                      <span>@icebe_ckv</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end p-3 pr-8">
                <Button
                  variant="ghost"
                  className="py-2 px-5 text-md text-blue-400 inline-block border border-blue-400 rounded"
                >
                  Cancel
                </Button>
                <Button className="py-2 px-5 text-md text-white bg-blue-500 rounded-sm ">
                  Post Now
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default EditorButtons;
