import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				name="contact_name"
				type="text"
				value={name}
				onChange={({ target }) => setName(target.value)}
			/>
			<input
				name="contact_phone"
				type="tel"
				value={phone}
				onChange={({ target }) => setPhone(target.value)}
				pattern="(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|([(^0)|(^\+61)][2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|([(^0)|(^\+61)]4\d{2,3}\d{6}$)"
			/>
			<input
				name="contact_email"
				type="email"
				value={email}
				onChange={({ target }) => setEmail(target.value)}
			/>
			<input type="submit" />
		</form>
	);
};
