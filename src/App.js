import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	const ROUTES = {
		CONTACTS: "/contacts",
		APPOINTMENTS: "/appointments",
	};

	const addContact = (name, phone, email) => {
		const newContact = { name, phone, email };
		setContacts((prevContacts) => [...prevContacts, newContact]);
	};

	const addAppointment = (title, contact, date, time) => {
		const newAppointment = { title, contact, date, time };
		setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
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
						<AppointmentsPage appointments={appointments} addAppointment={addAppointment} />
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
