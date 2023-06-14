import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bgImg from "../assests/img7.jpg";
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useHistory();

    const resetPassword = async () => {
        try {
            if (!token || !newPassword) {
                toast.error('Please fill in all fields');
                return;
            }

            const response = await axios.put("http://127.0.0.1:4000/user/reset-password", {
                token,
                newPassword
            });

            if (response.data.success) {
                toast.success('Password reset successfully');
                history.push('/Login');
            } else {
                toast.error('Invalid token');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword();
    };

    return (
        <div>
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2 className="text-2xl font-bold text-green-600">Decentralized Voting System Using Blockchain</h2>
                        <span><h2>Find Your Password via Email</h2></span>
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                            <h2 className="text-green-600">Change Your Password</h2>
                            <input
                                type="text"
                                placeholder="Token"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <div>
                                <button
                                    type="submit"
                                    className="rounded-2xl bg-green-600 text-white px-8 py-3"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="xl:col-2 md:col-2 sm:flex hidden">
                        <img src={bgImg} className="md:src" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResetPassword;
