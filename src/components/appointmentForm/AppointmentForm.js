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
		const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="appointment_title"
				type="text"
				value={title}
				onChange={({ target }) => setTitle(target.value)}
				placeholder="Appointment title"
			/>
			<input
				name="appointment_date"
				type="date"
				value={date}
				min={getTodayString()}
				onChange={({ target }) => setDate(target.value)}
				placeholder="Appointment date"
			/>
			<input
				name="appointment_time"
				type="time"
				value={time}
				onChange={({ target }) => setTime(target.value)}
			/>
			<ContactPicker
				value={contact}
				contacts={contacts}
				onChange={({ target }) => setContact(target.value)}
			/>
			<input type="submit" />
		</form>
	);
};
