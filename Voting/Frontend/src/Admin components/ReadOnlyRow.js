import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr class=" bg-green-200">
            <td>{contact.candidate_name}</td>
            <td> {contact.partyname}</td>
            <td>{contact.phonenumber}</td>
            <td>{contact.cnic}</td>
            <td class="justify-content: space-evenly">
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
                    onClick={() => handleDeleteClick(contact.id)}
                >
                    Delete
                </button>

            </td>
        </tr>
    );
};

export default ReadOnlyRow;