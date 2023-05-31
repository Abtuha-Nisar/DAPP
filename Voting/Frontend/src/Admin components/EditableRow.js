import React from "react";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr class="bg-green-400">
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="candidate_name"
                    value={editFormData.candidate_name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an PartyName"
                    name="partyname"
                    value={editFormData.partyname}
                    onChange={handleEditFormChange}
                ></input>

            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="phonenumber"
                    value={editFormData.phonenumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a CNIC..."
                    name="cnic"
                    value={editFormData.cnic}
                    onChange={handleEditFormChange}
                ></input>

            </td>
            <td>
                <button type="submit">Save/</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;