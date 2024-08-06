"use client";
import React, { useState } from "react";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const localizer = dayjsLocalizer(dayjs);

interface Event {
  start: Date;
  end: Date;
  title: string;
}

const ScheduleCalender: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const events: Event[] = [
    {
      start: new Date(2024, 6, 25, 10, 0),
      end: new Date(2024, 6, 25, 11, 0),
      title: "Excited to share insight",
    },
    {
      start: new Date(2024, 6, 26, 10, 0),
      end: new Date(2024, 6, 26, 11, 0),
      title: "Excited to share insight",
    },
    {
      start: new Date(2024, 6, 27, 11, 0),
      end: new Date(2024, 6, 27, 12, 0),
      title: "Excited to share insight",
    },
    {
      start: new Date(2024, 6, 25, 18, 30),
      end: new Date(2024, 6, 25, 19, 30),
      title: "Excited to share insight",
    },
  ];

  const eventStyleGetter = (event: Event) => {
    return {
      style: {
        backgroundColor: "#3498db",
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <div className="h-screen p-4  bg-white">
      <div className="flex  items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {dayjs(date).format("MMMM YYYY")}
        </h2>
        <div className="flex items-center space-x-2 pl-8">
          <button
            onClick={() => setDate(dayjs(date).subtract(1, "month").toDate())}
            className=" rounded-[50%] h-9 w-9 hover:bg-gray-200 border border-gray-300 flex justify-center items-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setDate(new Date())}
            className="px-4 py-2 font-bold  text-gray-700 rounded-[20px] hover:bg-gray-200 border border-gray-300"
          >
            Today
          </button>
          <button
            onClick={() => setDate(dayjs(date).add(1, "month").toDate())}
            className=" rounded-[50%] h-9 w-9 hover:bg-gray-200 border border-gray-300 flex justify-center items-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
        views={["month"]}
        defaultView={Views.MONTH}
        date={date}
        onNavigate={handleNavigate}
        eventPropGetter={eventStyleGetter}
        className="shadow-lg rounded-lg"
        components={{
          toolbar: () => null, // This removes the built-in toolbar
        }}
      />
    </div>
  );
};

export default ScheduleCalender;