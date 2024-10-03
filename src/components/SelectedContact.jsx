import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState();
  console.log("selectedcontact: ", contact);
  useEffect(() => {
    async function fetchSelectedContact() {
      if (!selectedContactId) return;
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  if (!contact) return <div>Retrieving Contact</div>;

  return (
    <div>
      <h1>Contact Details</h1>
      <h2>{contact.name}</h2>
      <p>Username: {contact.username}</p>
      <p>Email: <p id="email">{contact.email}</p></p>
      <p>Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>

      <button id="contact-button" onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}
