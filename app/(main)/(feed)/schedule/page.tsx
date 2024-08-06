import ScheduleCalender from "@/components/schedule-calender";
import React from "react";
import ScheduleNavbar from "../_components/schedule-navbar";
import { Separator } from "@/components/ui/separator";

const SchedulePage = () => {
  return (
    <div>
      <div>
        <ScheduleNavbar />
      </div>

      <Separator />
      <div className="pt-3">
        <ScheduleCalender />
      </div>
    </div>
  );
};

export default SchedulePage;
