import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, color: '#010101'}}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  )
}
