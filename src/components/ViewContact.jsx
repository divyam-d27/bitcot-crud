import { useContext } from "react";
import ContactContext from "../providers/ContactProvider";
export const ViewContact = ({ contact }) => {
  const { name, email, mobile } = contact;
  const { dispatch } = useContext(ContactContext);
  return (
    <div className="card w-50">
      <div className="card-header my-4 d-flex justify-content-between">
        <span>Form Name</span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "CLOSE_VIEW" })}
        >
          Close
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">Contact Details</h5>
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Mobile: {mobile}</p>
      </div>
    </div>
  );
};
