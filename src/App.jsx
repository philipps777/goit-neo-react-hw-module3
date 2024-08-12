import { useState, useEffect } from "react";

import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

const lsContacts = "contacts";
// const data = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
const App = () => {
  const [contacts, setContacts] = useState((data) => {
    const toLocalStorage = localStorage.getItem(lsContacts) ?? [];
    return toLocalStorage.length ? JSON.parse(toLocalStorage) : toLocalStorage;
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const componentData = JSON.stringify(contacts);
    localStorage.setItem(lsContacts, componentData);
  }, [contacts]);

  const createContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };
  const onDeleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const searchResults = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <SearchBox value={query} handleChange={setQuery} />
      <ContactList contacts={searchResults} onDeleteContact={onDeleteContact} />
    </div>
  );
};
export default App;

