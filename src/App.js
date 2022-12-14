import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([
    {
      name: "John Doe",
      phoneNumber: "123-456-7890",
      email: "johndoe@email.com",
    },
  ]);
  const [appointments, setAppointments] = useState([]);
  // console.log(contacts, appointments);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, num, email) => {
    setContacts((prev) => {
      const contact = {
        name: name,
        phoneNumber: num,
        email: email,
      };
      return [...prev, contact];
    });
  };

  const addAppointment = (title, contactObj, date, time) => {
    setAppointments((prev) => {
      const appointment = {
        title: title,
        contact: contactObj,
        date: date,
        time: time,
      };
      return [...prev, appointment];
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointment={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
