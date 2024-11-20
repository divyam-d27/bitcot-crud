export const contactReducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "VIEW_CONTACT":
      return {
        ...state,
        selectedContact: action.payload,
      };

    case "CLOSE_VIEW":
      return {
        ...state,
        selectedContact: null,
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        editContact: { contact: action.payload, isEditing: true },
        showForm: false,
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "TOGGLE_FORM":
      return {
        ...state,
        showForm: !state.showForm,
        editContact: { contact: {}, isEditing: false },
      };

    case "RESET":
      return {
        ...state,
        editContact: { contact: {}, isEditing: false },
        showForm: false,
      };
    default:
      return state;
  }
};
