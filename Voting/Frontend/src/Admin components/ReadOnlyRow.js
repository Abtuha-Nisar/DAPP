import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr className="bg-green-200">
            <td>{contact.candidate_name}</td>
            <td>{contact.partyname}</td>
            <td>{contact.phonenumber}</td>
            <td>{contact.cnic}</td>
            <td className="border-2 border-black">
                <img
                    src={contact.image}
                    alt=""
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "50px",
                    }}
                />
            </td>
            <td className="justify-content: space-evenly">
                <button
                    className="text-green-600"
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit/
                </button>
                <button
                    className="text-green-500"
                    type="button"
                    onClick={() => handleDeleteClick(contact._id)}

                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
