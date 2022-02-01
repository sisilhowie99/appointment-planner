import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
	return (
		<select onChange={onChange}>
			<option value="no contact selected" key="no contact selected" selected='selected'>
				No contact selected
			</option>
      {/* {console.log(contacts)} */}
			{contacts.map((contact) => (
				<option value={contact.name} key={contact.name}>
					{contact.name}
				</option>
			))}
		</select>
	);
};
