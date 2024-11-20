import { useContext } from "react";
import ContactContext from "../providers/ContactProvider";
import { ViewContact } from "./ViewContact";
const ContactItem = ({ contact }) => {
  const { name, mobile, email } = contact;
  const { dispatch } = useContext(ContactContext);

  const handleViewContact = () => {
    dispatch({ type: "VIEW_CONTACT", payload: contact });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CONTACT", payload: contact.id });
    dispatch({ type: "RESET" });
  };

  const handleEdit = () => {
    dispatch({ type: "EDIT_CONTACT", payload: contact });
  };

  return (
    <>
      <div className="card my-4 text-left">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <p className="card-text">Number: {mobile}</p>
          <p className="card-text">Email: {email}</p>
          <button
            href="#"
            className="btn mx-2 btn-success"
            onClick={handleViewContact}
          >
            View
          </button>
          <button
            href="#"
            className="btn mx-2 btn-warning"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            href="#"
            className="btn mx-2 btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default ContactItem;
