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
		const nameDuplicates = () => {
			const alreadyExists = contacts.find((contact) => contact.name === name);
			return alreadyExists ? true : false;
		};

		nameDuplicates() ? setIsDuplicate(true) : setIsDuplicate(false);
	}, [name, contacts, isDuplicate]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				{ isDuplicate ? 'Contact with that name already exists!' : '' }
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList data={contacts} />
			</section>
		</div>
	);
};
