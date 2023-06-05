import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../assests/img8.png";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function Candidatelist() {
    const [contacts, setContacts] = useState([]);
    const [adminToken] = useState([]);
    const [addFormData, setAddFormData] = useState({
        candidate_name: "",
        partyname: "",
        phonenumber: "",
        cnic: ""
    });

    const [editFormData, setEditFormData] = useState({
        candidate_name: "",
        partyname: "",
        phonenumber: "",
        cnic: ""
    });

    const [editContactId, setEditContactId] = useState(null);

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get("http://localhost:4000/admin/display_candidates");
            setContacts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddFormChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setAddFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: fieldValue
        }));
    };

    const handleEditFormChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setEditFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: fieldValue
        }));
    };

    const handleAddFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:4000/admin/register_candidate",
                addFormData,
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`
                    }
                }
            );

            const newContact = {
                id: response.data.id,
                candidate_name: response.data.candidate_name,
                partyname: response.data.partyname,
                phonenumber: response.data.phonenumber,
                cnic: response.data.cnic
            };

            setContacts((prevContacts) => [...prevContacts, newContact]);
            setAddFormData({
                candidate_name: "",
                partyname: "",
                phonenumber: "",
                cnic: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:4000/admin/update_candidate/${editContactId}`,
                editFormData
            );

            const updatedContact = {
                id: response.data.id,
                candidate_name: response.data.candidate_name,
                partyname: response.data.partyname,
                phonenumber: response.data.phonenumber,
                cnic: response.data.cnic
            };

            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact.id === editContactId ? updatedContact : contact
                )
            );

            setEditContactId(null);
            setEditFormData({
                candidate_name: "",
                partyname: "",
                phonenumber: "",
                cnic: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        setEditFormData({
            candidate_name: contact.candidate_name,
            partyname: contact.partyname,
            phonenumber: contact.phonenumber,
            cnic: contact.cnic
        });
    };

    const handleCancelClick = () => {
        setEditContactId(null);
        setEditFormData({
            candidate_name: "",
            partyname: "",
            phonenumber: "",
            cnic: ""
        });
    };

    const handleDeleteClick = async (contactId) => {
        try {
            await axios.delete(`http://localhost:4000/admin/delete_candidate/${contactId}`);
            setContacts((prevContacts) =>
                prevContacts.filter((contact) => contact.id !== contactId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-green-100 md:w-full md:h-screen md:justify-around">
            <nav className="bg-green-600 md:text-center md:flex md:justify-between text-white">
                <img src={image} className="w-24 h-18 py-2 px-6 rounded-4xl" alt="" />
                <span className="md:text-2xl flex md:items-center font-bold">
                    Decentralized Voting System Using Blockchain
                </span>
                <ul className="flex py-4 md:justify-end">
                    <Link to="/AdminDashboard">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">Dashboard</li>
                    </Link>
                    <Link to="/Candidatelist">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black bg-green-900">
                            Candidate List
                        </li>
                    </Link>
                    <Link to="/Voterlist">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">Voter List</li>
                    </Link>
                    <Link to="/DisplayResult">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">Display Result</li>
                    </Link>
                    <Link to="/Adminlogin">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">Sign out</li>
                    </Link>
                </ul>
            </nav>
            <main>
                <div className="app-container">
                    <h2 className="px-96 font-bold py-2 text-2xl">Candidates List</h2>
                    <form className="flex gap-5 px-3" onSubmit={handleEditFormSubmit}>
                        <table className="border-4 border-black py-8 font-bold w-full border-collapse">
                            <thead className="bg-green-400">
                                <tr>
                                    <th>Name</th>
                                    <th>Party Name</th>
                                    <th>Phone Number</th>
                                    <th>CNIC</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Fragment key={contact.id}>
                                        {editContactId === contact.id ? (
                                            <EditableRow
                                                contact={contact}
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow
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
                    <h2 className="px-96 font-bold py-2 text-2xl">Add a Candidate</h2>
                    <form className="py-1 px-4 flex justify-center" onSubmit={handleAddFormSubmit}>
                        <input
                            type="text"
                            name="candidate_name"
                            required
                            placeholder="Enter a name..."
                            value={addFormData.candidate_name}
                            onChange={handleAddFormChange}
                            className="border-2 border-black rounded py-1 px-2 mr-2"
                        />
                        <input
                            type="text"
                            name="partyname"
                            required
                            placeholder="Enter a party name..."
                            value={addFormData.partyname}
                            onChange={handleAddFormChange}
                            className="border-2 border-black rounded py-1 px-2 mr-2"
                        />
                        <input
                            type="text"
                            name="phonenumber"
                            required
                            placeholder="Enter a phone number..."
                            value={addFormData.phonenumber}
                            onChange={handleAddFormChange}
                            className="border-2 border-black rounded py-1 px-2 mr-2"
                        />
                        <input
                            type="text"
                            name="cnic"
                            required
                            placeholder="Enter a CNIC..."
                            value={addFormData.cnic}
                            onChange={handleAddFormChange}
                            className="border-2 border-black rounded py-1 px-2 mr-2"
                        />
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                            Add
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Candidatelist;
