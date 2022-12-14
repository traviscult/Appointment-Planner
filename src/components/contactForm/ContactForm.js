import React from "react";

export const ContactForm = (props) => {
  const handleNameChange = ({ target }) => {
    const { value } = target;
    props.setName(value);
  };
  const handlePhoneChange = ({ target }) => {
    const { value } = target;
    props.setPhone(value);
  };
  const handleEmailChange = ({ target }) => {
    const { value } = target;
    props.setEmail(value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={props.name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={props.phone}
        onChange={handlePhoneChange}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
      />
      <input
        type="text"
        placeholder="Enter e-mail"
        value={props.email}
        onChange={handleEmailChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
