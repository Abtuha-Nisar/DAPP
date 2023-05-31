import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bgImg from "../assests/img7.jpg";
import axios from 'axios';

const ForgetPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');

    const resetPassword = async () => {
        const resetPasswordUrl = 'http://localhost:4000/user/forget-password';
        const newPassword = 'newpassword123';

        const data = {
            email: email,
            newPassword: newPassword
        };

        try {
            const response = await axios.post(resetPasswordUrl, data);
            console.log('Password reset successful', response.data);

            window.alert('Reset link sent to your email!');
            history.push('/Login');
        } catch (error) {
            console.error('Password reset failed:', error.response.data);
            window.alert('Failed to send reset link to your email.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            window.alert('Please enter your email address.');
            return;
        }

        resetPassword();
    };

    return (
        <>
            <section>
                <div className="register">
                    <div className="col-1 sm:col-1 ">
                        <h2 className="text-2xl font-bold text-green-600 sm:text-green-600 sm:font-bold sm:text-2xl">Decentralized Voting System Using Blockchain</h2>
                        <span><h2>Find Your Password</h2></span>
                        <form id='form' className="flex flex-col sm:flex-col sm:flex" onSubmit={handleSubmit}>
                            <h2 className="text-green-600 sm:text-green-600">Reset Password</h2>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div>
                                <button className="rounded-3xl bg-green-600 text-white px-8 py-3 sm:py-3 sm:px-8 sm:bg-green-600" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-2 sm:col-2 ">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgetPassword;
