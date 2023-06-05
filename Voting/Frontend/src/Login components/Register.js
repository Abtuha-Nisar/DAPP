import React, { useState } from 'react';
import bgImg from "../assests/img7.jpg";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

const Register = () => {
    const [cnic, setCnic] = useState('');
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validateCNIC = (cnic) => {
        return cnic.length === 13 && /^\d+$/.test(cnic);
    };

    const validateName = (name) => {
        return name.toUpperCase() === name;
    };

    const validatePhoneNumber = (phoneNumber) => {
        // Apply any specific validation logic for phone number
        return true;
    };

    const validateDOB = (dob) => {
        // Apply any specific validation logic for date of birth
        return true;
    };

    const validateEmail = (email) => {
        // Apply any specific validation logic for email
        return true;
    };

    const validatePassword = (password) => {
        // Apply any specific validation logic for password
        return true;
    };

    const validateConfirmPassword = (confirmPassword) => {
        return password === confirmPassword;
    };

    const getMetamaskAccount = async () => {
        // Replace this with the appropriate method or library call to get the Metamask account
        // For example, using web3 library:
        if (window.ethereum) {
            await window.ethereum.enable();
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            return accounts[0];
        }
        return null;
    };

    const registerUser = async (e) => {
        e.preventDefault();

        if (!validateCNIC(cnic)) {
            toast.error("Please enter a valid CNIC (13 digits and only numbers).");
            return;
        }

        if (!validateName(name)) {
            toast.error("Please enter a name in capital letters.");
            return;
        }

        if (!validatePhoneNumber(phonenumber)) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        if (!validateDOB(dob)) {
            toast.error("Please enter a valid date of birth.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            toast.error("Please enter a valid password.");
            return;
        }

        if (!validateConfirmPassword(confirmPassword)) {
            toast.error("Password and confirm password do not match.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:4000/user/check?cnic=${cnic}&email=${email}`);
            if (response.data.exists) {
                toast.error("This data is already registered.");
                return;
            }
        } catch (error) {
            console.log("error", error);
        }

        const metamaskAccount = await getMetamaskAccount();

        try {
            const metamaskIdResponse = await axios.get(`http://localhost:4000/user/checkMetamaskId?metamaskid=${metamaskAccount}`);
            if (metamaskIdResponse.data.exists) {
                toast.error("This Metamask ID is already registered.");
                return;
            }
        } catch (error) {
            console.log("error", error);
        }

        try {
            const result = await axios.post("http://localhost:4000/user/register", {
                cnic: cnic,
                name: name,
                dob: dob,
                phonenumber: phonenumber,
                password: password,
                confirmpassword: confirmPassword,
                email: email,
                metamaskid: metamaskAccount
            });

            console.log("result:", result);
            alert(result.data.msg);
        } catch (error) {
            console.log("error", error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section>
                <div className="register flex bg-white">
                    <div className="col-1 flex px-14">
                        <form id="form" className="flex flex-col md:flex sm:flex md:flex-col sm:flex-col">
                            <h2 className="text-green-600">Enter your Credentials</h2>

                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="CNIC"
                                    value={cnic}
                                    onChange={(e) => setCnic(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    type="date"
                                    className="text-slate-400 hover:text-black"
                                    placeholder="Date"
                                    value={dob}
                                    onChange={(e) => setDOB(e.target.value)}
                                    class="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    type="tel"
                                    placeholder="Phone No"
                                    value={phonenumber}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="form-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="password-input relative form-field">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                                <span
                                    className="password-toggle absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                    />
                                </span>
                            </div>

                            <div className="form-field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full h-10 border border-gray-300 px-2"
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                            </div>

                            <div className="button-group flex space-x-6 justify-evenly">
                                <div>
                                    <button
                                        className="text-white rounded-3xl bg-green-600 px-6 py-3"
                                        onClick={registerUser}
                                    >
                                        Register
                                    </button>
                                </div>

                                <div>
                                    <Link to="/RegisterOTP">
                                        <button
                                            className="text-white rounded-3xl bg-green-600 px-8 py-3"
                                        >
                                            Next
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="links text-green-600">
                                <Link to="/Login">Already have an account?</Link>
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

export default Register;
