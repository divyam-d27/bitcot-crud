import { useContext, useState } from "react";
import ContactContext from "../providers/ContactProvider";
import ContactItem from "./ContactItem";
export const ContactList = () => {
  const [query, setQuery] = useState("");
  const { contacts } = useContext(ContactContext);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.email.toLowerCase().includes(query.toLowerCase()) ||
      contact.mobile.toString().includes(query.toString())
  );

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-describedby="basic-addon2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="input-group-text" id="basic-addon2">
          Search
        </span>
      </div>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
      {filteredContacts.length === 0 && (
        <p className="text-center">No contacts found.</p>
      )}
    </div>
  );
};
