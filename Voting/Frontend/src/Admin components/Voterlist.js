import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data1.json";
import ReadOnlyRow1 from "../Admin components/ReadOnlyRow1";
import EditableRow1 from "../Admin components/EditableRow1";
import { Link } from 'react-router-dom'
import image from '../assests/img8.png';


function Voterlist() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        phoneNumber: "",
        CNIC: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        phoneNumber: "",
        CNIC: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            phoneNumber: addFormData.phoneNumber,
            CNIC: addFormData.CNIC,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            //PartyName: editFormData.PartyName,
            phoneNumber: editFormData.phoneNumber,
            CNIC: editFormData.CNIC,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            fullName: contact.fullName,
            //PartyName: contact.PartyName,
            phoneNumber: contact.phoneNumber,
            CNIC: contact.CNIC,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };
    return (
        <div className="bg-green-100  md:w-full md:h-screen md:justify-around ">
            <nav class=" bg-green-600 md:text-center md:flex md:justify-between text-white ">

                <img src={image} class=" w-24 h-18 py-2 px-6 rounded-4xl " alt="" />

                <span class="md:text-2xl flex md:items-center  font-bold">Decentralized Voting System Using Blockchain</span>
                <ul class=" flex py-4 md:justify-end">
                    <Link to="/AdminDashboard"><li class="mx-2 cursor-pointer  font-bold hover:text-black  ">Dashboard </li></Link>
                    <Link to="/Candidatelist"><li class="mx-2 cursor-pointer  font-bold hover:text-black  ">Candidate List </li></Link>
                    <Link to="/Voterlist"><li class="mx-2 cursor-pointer font-bold hover:text-black bg-green-900 "> Voter list </li></Link>
                    <Link to="/DisplayResult"><li class="mx-2 cursor-pointer font-bold hover:text-black ">Display Result </li></Link>
                    <Link to="/Adminlogin"><li class="mx-2 cursor-pointer font-bold hover:text-black "> Sign out</li></Link>

                </ul>

            </nav>
            <main>
                <div className="app-container" class="flex flex-col gap: 10px py-3">
                    <h2 class=" px-96 font-bold py-2 text-2xl">Voter List</h2>
                    <form class="flex gap: 5px px-3" onSubmit={handleEditFormSubmit}>
                        <table class="border-4 border-black  py-8 font-bold w-full border-collapse:collapse">
                            <thead class=" bg-green-400">
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>CNIC</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Fragment>
                                        {editContactId === contact.id ? (
                                            <EditableRow1
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow1
                                                contact={contact}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>

                    <h2 class=" px-96 font-bold py-2 text-2xl">Add a Voter Data</h2>
                    <form class="py-1 px-4 flex justify-center " onSubmit={handleAddFormSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            required="required"
                            placeholder="Enter a name..."
                            onChange={handleAddFormChange}
                        />
                        {/* <input
                            type="text"
                            name="PartyName"
                            required="required"
                            placeholder="Enter PartyName"
                            onChange={handleAddFormChange}
                        /> */}
                        <input
                            type="text"
                            name="phoneNumber"
                            required="required"
                            placeholder="Enter a phone number..."
                            onChange={handleAddFormChange}
                        />
                        <input
                            type="CNIC"
                            name="CNIC"
                            required="required"
                            placeholder="Enter an CNIC..."
                            onChange={handleAddFormChange}
                        />
                        <button class="bg-green-600 rounded-2xl text-black font-bold px-2 " type="submit">Add</button>
                    </form>
                </div>
            </main>
        </div >
    );
};

export default Voterlist;