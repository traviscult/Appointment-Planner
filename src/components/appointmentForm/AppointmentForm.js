import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const handleTitleChange = ({ target }) => {
    const { name, value } = target;
    setTitle(value);
  };
  const handleDateChange = ({ target }) => {
    const { name, value } = target;
    setDate(value);
  };
  const handleTimeChange = ({ target }) => {
    const { name, value } = target;
    setTime(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      ></input>
      <ContactPicker contacts={contacts} setContact={setContact} />
      <input
        type="text"
        placeholder="Date"
        value={date}
        min={getTodayString}
        onChange={handleDateChange}
      ></input>
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={handleTimeChange}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
