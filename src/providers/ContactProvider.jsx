import { createContext, useReducer } from "react";
import { contactReducer } from "./ContactReducer";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    selectedContact: null,
    editContact: { contact: {}, isEditing: false },
    showForm: false,
    // isFetching: false,
    // error: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
