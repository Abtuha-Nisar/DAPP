import React from "react";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,

}) => {
    return (
        <tr className="bg-green-400">
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter a name..."
                    name="candidate_name"
                    value={editFormData.candidate_name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter a Party Name..."
                    name="partyname"
                    value={editFormData.partyname}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter a phone number..."
                    name="phonenumber"
                    value={editFormData.phonenumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter a CNIC..."
                    name="cnic"
                    value={editFormData.cnic}
                    onChange={handleEditFormChange}
                />
            </td>
            <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                <label htmlFor="image">Image</label>
                <br />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleEditFormChange}
                />

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
