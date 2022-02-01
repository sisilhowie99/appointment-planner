import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [isDuplicate, setIsDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isDuplicate) {
			addContact(name, phone, email);
			setName("");
			setPhone("");
			setEmail("");
		}
	};

	useEffect(() => {
		contacts.forEach((contact) => {
			if (contact.name === name) {
				setIsDuplicate(true);
			}
		});
	}, [name]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					onSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList contacts={contacts} />
			</section>
		</div>
	);
};
