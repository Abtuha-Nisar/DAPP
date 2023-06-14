import React from "react";

const ReadOnlyRow1 = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr class=" bg-green-200">
            <td>{contact.fullName}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.CNIC}</td>
            <td class="justify-content: space-evenly">
                <button class="text-green-600 "
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit/
                </button>
                <button class="text-green-500" type=" button" onClick={() => handleDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow1;
// import React from "react";

// const ReadOnlyRow1 = ({
//     contact,
//     handleEditClick,
//      handleDeleteClick }) => {
//     return (
//         <tr className="bg-green-200">
//             <td>{contact.name}</td>
//             <td>{contact.dob}</td>
//             <td>{contact.phonenumber}</td>
//             <td>{contact.cnic}</td>
//             <td>{contact.email}</td>
//             <td>{contact.password}</td>
//             <td>{contact.confirmpassword}</td>
//             <td>{contact.metamaskid}</td>
//             <td className="justify-content: space-evenly">
//                 <button
//                     className="text-green-600"
//                     type="button"
//                     onClick={(event) => handleEditClick(event, contact)}
//                 >
//                     Edit
//                 </button>
//                 <button
//                     className="text-green-500"
//                     type="button"
//                     onClick={() => handleDeleteClick(contact._id)}
//                 >
//                     Delete
//                 </button>
//             </td>
//         </tr>
//     );
// };

// export default ReadOnlyRow1;

