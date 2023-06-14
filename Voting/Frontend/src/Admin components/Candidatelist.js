import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../assests/img8.png";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function Candidatelist() {
    const [contacts, setContacts] = useState([]);

    const [addFormData, setAddFormData] = useState({
        candidate_name: "",
        partyname: "",
        phonenumber: "",
        cnic: "",
        image: null,
    });

    const token = localStorage.getItem('token');
    console.log(token);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const [editFormData, setEditFormData] = useState({
        candidate_name: "",
        partyname: "",
        phonenumber: "",
        cnic: "",
        image: null,
    });

    const [editContactId, setEditContactId] = useState(null);

    useEffect(() => {

        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4000/admin/display_candidates"
            );
            setContacts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddFormChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue =
            event.target.type === "file" ? event.target.files[0] : event.target.value;

        setAddFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: fieldValue,
        }));
    };

    const handleEditFormChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue =
            event.target.type === "file" ? event.target.files[0] : event.target.value;

        setEditFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: fieldValue,
        }));
    };

    const handleAddFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append("candidate_name", addFormData.candidate_name);
            formData.append("partyname", addFormData.partyname);
            formData.append("phonenumber", addFormData.phonenumber);
            formData.append("cnic", addFormData.cnic);
            formData.append("image", addFormData.image);

            const response = await axios.post(
                "http://localhost:4000/admin/register_candidate",
                formData, config

            );

            const newContact = {
                _id: response.data._id,
                candidate_name: response.data.candidate_name,
                partyname: response.data.partyname,
                phonenumber: response.data.phonenumber,
                cnic: response.data.cnic,
                image: response.data.image,
            };

            setContacts((prevContacts) => [...prevContacts, newContact]);
            setAddFormData({
                candidate_name: "",
                partyname: "",
                phonenumber: "",
                cnic: "",
                image: null,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditFormSubmit = async (event) => {
        event.preventDefault();
        console.log('editContactId:', editContactId);

        try {
            const formData = new FormData();
            formData.append("candidate_name", editFormData.candidate_name);
            formData.append("partyname", editFormData.partyname);
            formData.append("phonenumber", editFormData.phonenumber);
            formData.append("cnic", editFormData.cnic);
            formData.append("image", editFormData.image);

            const response = await axios.put(
                `http://localhost:4000/admin/update_candidate/${editContactId}`, formData, config

            );

            const updatedContact = {
                _id: response.data._id,
                candidate_name: response.data.candidate_name,
                partyname: response.data.partyname,
                phonenumber: response.data.phonenumber,
                cnic: response.data.cnic,
                image: response.data.image,
            };

            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact._id === editContactId ? updatedContact : contact
                )
            );

            setEditContactId(null);
            setEditFormData({
                candidate_name: "",
                partyname: "",
                phonenumber: "",
                cnic: "",
                image: null,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact._id);

        setEditFormData({
            candidate_name: contact.candidate_name,
            partyname: contact.partyname,
            phonenumber: contact.phonenumber,
            cnic: contact.cnic,
            image: null,
        });
    };

    const handleCancelClick = () => {
        setEditContactId(null);
        setEditFormData({
            candidate_name: "",
            partyname: "",
            phonenumber: "",
            cnic: "",
            image: null,
        });
    };

    const handleDeleteClick = async (contactId) => {
        console.log("Delete button clicked", contactId);
        try {
            await axios.delete(
                `http://localhost:4000/admin/delete_candidate/${contactId}`, config

            );
            setContacts((prevContacts) =>
                prevContacts.filter((contact) => contact._id !== contactId)

            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-green-100 md:w-full md:h-screen md:justify-around">
            <nav className="bg-green-600 md:text-center md:flex md:justify-between text-white">
                <img
                    src={image}
                    className="w-24 h-18 py-2 px-6 rounded-4xl"
                    alt=""
                />
                <span className="md:text-2xl flex md:items-center font-bold">
                    Decentralized Voting System Using Blockchain
                </span>
                <ul className="flex py-4 md:justify-end">
                    <Link to="/AdminDashboard">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/Candidatelist">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black bg-green-900">
                            Candidate List
                        </li>
                    </Link>
                    <Link to="/Voterlist">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">
                            Voter List
                        </li>
                    </Link>
                    <Link to="/DisplayResult">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">
                            Display Result
                        </li>
                    </Link>
                    <Link to="/Adminlogin">
                        <li className="mx-2 cursor-pointer font-bold hover:text-black">
                            Sign out
                        </li>
                    </Link>
                </ul>
            </nav>
            <main>
                <div className="app-container">
                    <h2 className="px-96 font-bold py-2 text-2xl">Candidates List</h2>
                    <form className="flex gap-5 px-3 items-center" onSubmit={handleEditFormSubmit} >
                        <table className="border-4 border-black py-8 font-bold w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-2 border-black">Candidate Name</th>
                                    <th className="border-2 border-black">Party Name</th>
                                    <th className="border-2 border-black">Phone Number</th>
                                    <th className="border-2 border-black">CNIC</th>
                                    <th className="border-2 border-black">Image</th>
                                    <th className="border-2 border-black">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Fragment key={contact._id}>
                                        {editContactId === contact._id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}

                                            />
                                        ) : (
                                            <ReadOnlyRow
                                                key={contact._id}
                                                contact={contact}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        {editContactId && (
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Save
                            </button>
                        )}
                    </form>
                    <h2 className="px-96 font-bold py-2 text-2xl">Add Candidate</h2>
                    <form
                        className="flex gap-5 px-3"
                        onSubmit={handleAddFormSubmit}
                        encType="multipart/form-data"
                    >
                        <input
                            type="text"
                            name="candidate_name"
                            required="required"
                            placeholder="Enter candidate name"
                            onChange={handleAddFormChange}
                            value={addFormData.candidate_name}
                            className="border-2 border-black"
                        />
                        <input
                            type="text"
                            name="partyname"
                            required="required"
                            placeholder="Enter party name"
                            onChange={handleAddFormChange}
                            value={addFormData.partyname}
                            className="border-2 border-black"
                        />
                        <input
                            type="text"
                            name="phonenumber"
                            required="required"
                            placeholder="Enter phone number"
                            onChange={handleAddFormChange}
                            value={addFormData.phonenumber}
                            className="border-2 border-black"
                        />
                        <input
                            type="text"
                            name="cnic"
                            required="required"
                            placeholder="Enter CNIC"
                            onChange={handleAddFormChange}
                            value={addFormData.cnic}
                            className="border-2 border-black"
                        />
                        <input
                            type="file"
                            name="image"
                            required="required"
                            onChange={handleAddFormChange}
                            className="border-2 border-black"

                        />
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Candidatelist;
