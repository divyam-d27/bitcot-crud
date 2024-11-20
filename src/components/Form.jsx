import { useState, useContext, useEffect } from "react";
import ContactContext from "../providers/ContactProvider";
export const Form = ({ onCloseForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const { dispatch, editContact } = useContext(ContactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editContact.isEditing) {
      const newContact = { id: crypto.randomUUID(), name, email, mobile };
      dispatch({ type: "ADD_CONTACT", payload: newContact });
    } else {
      dispatch({
        type: "UPDATE_CONTACT",
        payload: { id: editContact.contact.id, name, email, mobile },
      });
    }
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    if (editContact.isEditing) {
      setName(editContact.contact?.name || "");
      setEmail(editContact.contact?.email || "");
      setMobile(editContact.contact?.mobile || "");
    }
  }, [editContact.isEditing, editContact.contact.id]);

  return (
    <div className="w-50 card p-4">
      <div className="card-header my-4 d-flex justify-content-between">
        <span>Form Name</span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "TOGGLE_FORM" })}
        >
          Close
        </button>
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Mobile No.
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
