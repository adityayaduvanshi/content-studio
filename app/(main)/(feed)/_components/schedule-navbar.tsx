import { CalendarDays, Columns4, Logs } from 'lucide-react'
import React from 'react'

const ScheduleNavbar = () => {
  return (
    <div className='flex p-4 gap-4 items-center'>
      <div className='font-semibold text-2xl'>Calender</div>
      <div className='flex gap-3'>
        <Logs />
        <h5>Queue</h5>
        </div>

        <div className='flex gap-3'>
        <Columns4 />
        <h5>Week</h5>
        </div>

        <div className='flex gap-3'>
        <CalendarDays />
        <h5>Month</h5>
        </div>

        <div></div>

    </div>
  )
}

export default ScheduleNavbar