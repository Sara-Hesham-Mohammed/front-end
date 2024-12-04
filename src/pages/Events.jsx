import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <Calendar />
      <div className="mt-4">
        <h2 className="text-xl font-bold">This Weekend</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="border-b py-2">
              {event.title} - {event.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
