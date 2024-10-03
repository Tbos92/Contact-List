import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    class="row">
      <td>{contact.name}</td>
      <td id="email">{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
