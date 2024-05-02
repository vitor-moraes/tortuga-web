import React, { useState, useEffect } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [nature, setNature] = useState("");
  const [daysInWeek, setDaysInWeek] = useState<string[]>([]);
  const [timesInDay, setTimesInDay] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(name, nature, daysInWeek, timesInDay);
  };

  return (
    <div className="App">
      <h1>Create New Habit</h1>
      <fieldset>
        <form action="#" method="post" >
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
          <label htmlFor="nature"> Enter nature*</label>
          <select onChange={(e) => setNature(e.target.value)}>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
          <label htmlFor="days_in_week"> Enter days in week*</label>
          <input
            type="text"
            name="days_in_week"
            id="days_in_week"
            value={daysInWeek}
            onChange={(e) => setDaysInWeek([e.target.value])}
            placeholder="Enter days in week"
            required
          />
          <label htmlFor="times_in_day"> Enter times in day*</label>
          <input
            type="text"
            name="times_in_day"
            id="times_in_day"
            value={timesInDay}
            onChange={(e) => setTimesInDay([e.target.value])}
            placeholder="Enter times in day"
            required
          />
        </form>
      </fieldset>
    </div>
  );
}
