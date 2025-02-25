import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

const Calendar = ({ mode = "single", selected, className }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className={`p-4 bg-white shadow rounded ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-blue-500">
          Previous
        </button>
        <span className="font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button onClick={handleNextMonth} className="text-blue-500">
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {/* Placeholder for dates */}
        {[...Array(30)].map((_, index) => (
          <div key={index} className="text-center">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
