import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
	return (
		<select name='contact' onChange={onChange}>
			<option value="" key={-1} selected='selected'>
				No contact selected
			</option>
			{contacts.map((contact) => (
				<option value={contact.name} key={contact.name}>
					{contact.name}
				</option>
			))}
		</select>
	);
};
