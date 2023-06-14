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
// import React from "react";

// const EditableRow1 = ({
//      editFormData,
//      handleEditFormChange,
//      handleCancelClick
//      }) => {
//     return (
//         <tr className="bg-green-400">
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter a name..."
//                     name="name"
//                     value={editFormData.name}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter a date of birth..."
//                     name="dob"
//                     value={editFormData.dob}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter a phone number..."
//                     name="phonenumber"
//                     value={editFormData.phonenumber}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter a CNIC..."
//                     name="cnic"
//                     value={editFormData.cnic}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter an email..."
//                     name="email"
//                     value={editFormData.email}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="password"
//                     required
//                     placeholder="Enter a password..."
//                     name="password"
//                     value={editFormData.password}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="password"
//                     required
//                     placeholder="Confirm password..."
//                     name="confirmpassword"
//                     value={editFormData.confirmpassword}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="text"
//                     required
//                     placeholder="Enter a MetaMask ID..."
//                     name="metamaskid"
//                     value={editFormData.metamaskid}
//                     onChange={handleEditFormChange}
//                 />
//             </td>
//             <td>
//                 <button type="submit">Save</button>
//                 <button type="button" onClick={handleCancelClick}>
//                     Cancel
//                 </button>
//             </td>
//         </tr>
//     );
// };

// export default EditableRow1;
