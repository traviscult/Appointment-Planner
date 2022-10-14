import React from "react";

export const ContactPicker = (props) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    props.setContact(value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">Please Select</option>
      {props.contacts.map((e, index) => {
        return (
          <option value={e.name} key={index}>
            {e.name}
          </option>
        );
      })}
    </select>
  );
};
