import React, { useState } from 'react';
import axios from 'axios';
import bgImg from "../assests/img7.jpg";
import { useHistory } from 'react-router-dom';

// Import Font Awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Adminlogin = () => {
    const history = useHistory();
    const [cnic, setCnic] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!cnic || !password) {
            alert("Please enter CNIC and password.");
            return;
        }

        // Validate CNIC number
        if (cnic !== "4250151446569" && cnic !== "611045723418767") {
            alert("Invalid CNIC. Please enter a valid CNIC number.");
            return;
        }

        const data = {
            cnic: cnic,
            password: password
        };

        axios.post('http://localhost:4000/admin/Login_Admin', data)
            .then(response => {
                if (response.data.success) {
                    alert("Login successful!");
                    // Redirect to the admin page
                    history.push('/AdminDashboard');
                } else {
                    alert("Invalid CNIC or password. Please enter correct data.");
                }
            })
            .catch(error => {
                console.log(error);
                alert("An error occurred during login.");
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section>
                <div className="register" class="flex bg-white">
                    <div className="col-1">
                        <h2 className="text-xl md:font-bold sm:text-1xl md:text-1xl text-green-600 px-4 xl:py-6">
                            Decentralized Voting System Using Blockchain
                        </h2>
                        <form id='form' className="flex flex-col md:flex sm:flex md:flex-col sm:flex-col" onSubmit={handleLogin}>
                            <h2 class="text-green-600">Enter Admin CNIC and Password</h2>
                            <input
                                className="w-full h-10 border border-gray-300 px-2"
                                style={{ width: '100%', paddingLeft: '8px' }}
                                type="text"
                                placeholder="CNIC ***"
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                            />
                            <div className="relative">
                                <input
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password ***"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="absolute right-2 top-3 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                            <div>
                                <button type="submit" class="text-white rounded-3xl bg-green-600 sm:bg-green-600 px-8 py-3 sm:px-8 sm:py-3">
                                    Open Admin panel
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="xl:col-2 md:col-2 sm:flex hidden">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Adminlogin;
