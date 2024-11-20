import { useEffect, useContext } from "react";
import { ContactList } from "./components/ContactList";
import { Form } from "./components/Form";
import { ViewContact } from "./components/ViewContact";
import ContactContext from "./providers/ContactProvider";
import { fetchContacts } from "./utils/fetchContacts";

export const App = () => {
  const { dispatch, selectedContact, editContact, showForm } =
    useContext(ContactContext);

  const getContacts = async () => {
    const data = await fetchContacts();
    dispatch({ type: "GET_CONTACT", payload: data });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="container bg-primary-subtle text-center p-4 d-flex justify-content-start align-items-start gap-4">
        <div className="w-50">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "TOGGLE_FORM" })}
            disabled={showForm}
          >
            All Contacts (click to Add)
          </button>
          <ContactList />
        </div>
        {showForm && <Form />}
        {editContact.isEditing && <Form />}
        {selectedContact !== null && <ViewContact contact={selectedContact} />}
      </div>
    </>
  );
};
