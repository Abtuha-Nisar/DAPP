import React from "react";

const EditableRow1 = ({
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
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            {/* <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an  PartyName"
                    name=" PartyName"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                ></input>
            </td> */}
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a phone number..."
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="CNIC"
                    required="required"
                    placeholder="Enter an CNIC..."
                    name="email"
                    value={editFormData.CNIC}
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

export default EditableRow1;