import React, { useState } from "react";
import "./Calendar.css"; // import your custom CSS file

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function renderCalendar() {
    const monthDays = []; // create an array to hold the calendar days
    const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    const endDate = new Date(monthEnd);
    const weekStart = new Date(startDate.setDate(startDate.getDate() - startDate.getDay())); // calculate the first day of the week
    const weekEnd = new Date(endDate.setDate(endDate.getDate() + (6 - endDate.getDay()))); // calculate the last day of the week
    const currentDate = new Date(weekStart);

    while (currentDate <= weekEnd) {
      monthDays.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return monthDays.map((day, index) => (
      <div className="calendar-day" key={index}>
        {day.getDate()}
      </div>
    ));
  }

  function handlePrevMonth() {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  }

  function handlePrevYear() {
    setSelectedDate(new Date(selectedDate.getFullYear() - 1, selectedDate.getMonth(), 1));
  }

  function handleNextYear() {
    setSelectedDate(new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth(), 1));
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-header-left">
          <button onClick={handlePrevMonth}>
            Prev
          </button>
        </div>
        <div className="calendar-header-center">
          <button onClick={handlePrevYear}>
            &lt;&lt;
          </button>
          {selectedDate.toLocaleString("default", { year: "numeric", month: "long" })}
          <button onClick={handleNextYear}>
            &gt;&gt;
          </button>
        </div>
        <div className="calendar-header-right">
          <button onClick={handleNextMonth}>
            Next
          </button>
        </div>
      </div>
      <div className="calendar-body">
        <div className="calendar-day-names">
          <div className="calendar-day-of-week">Sun</div>
          <div className="calendar-day-of-week">Mon</div>
          <div className="calendar-day-of-week">Tue</div>
          <div className="calendar-day-of-week">Wed</div>
          <div className="calendar-day-of-week">Thu</div>
          <div className="calendar-day-of-week">Fri</div>
          <div className="calendar-day-of-week">Sat</div>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
}

export default Calendar;