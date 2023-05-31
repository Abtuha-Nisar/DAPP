// import React from 'react'
// import { Link } from 'react-router-dom';
// import bgImg from "../assests/img7.jpg";
// //import { useForm } from "react-hook-form"
// import { useState, useEffect } from "react";
// import axios from 'axios';


// const Setting = () => {


//     const [email, setEmail] = useState();
//     const forgetData = async () => {
//         try {
//             const res = await axios.get("http://localhost:4000/user/forget-password");
//             setEmail(res.data);

//         } catch (error) {
//             //setIsError(error.message);
//         }
//     };

//     // NOTE:  calling the function
//     useEffect(() => {
//         forgetData();
//     }, []);






//     //const { register, handleSubmit } = useForm()
//     //const onSubmit = data => console.log(data);
//     //const [NewPassword, setNewPassword] = useState("");
//     //const [Email, setEmail] = useState("");
//     // const collectData = async () => {
//     //     console.log(NewPassword);
//     //     let result = await fetch(" ", {
//     //         method: 'post',
//     //         body: JSON.stringify({ NewPassword }),
//     //         headers: {
//     //             'content-Type': 'application/json'
//     //         }

//     //     });

//     //     result = await result.JSON();
//     //     console.warn(result);
//     // }
//     // const collectData = async () => {
//     //     console.log(Email);
//     //     let result = await fetch("http://localhost:3000/api/forget-password", {
//     //         method: 'post',
//     //         body: JSON.stringify({ Email }),
//     //         headers: {
//     //             'content-Type': 'application/json'
//     //         }

//     //     });

//     //     result = await result.JSON();
//     //     console.warn(result);
//     // }


//     return (
//         <div>
//             <section>

//                 <div className="register">

//                     {/* <div className="col-1" onSubmit={handleSubmit(onSubmit)}> */}
//                     <div className="col-1" >
//                         <h2 className="text-2xl font-bold text-green-600">Decentralized Voting System Using Blockchain</h2>
//                         <span><h2 >Find Your Password via Email </h2></span>
//                         <form id='form' className="flex flex-col">
//                             <h2 className='text-green-600'> Change Your Password</h2>
//                             <input type="Email"
//                                 // {...register("Email", { required: true })}
//                                 placeholder='Email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />

//                             {/* <input type="password"
//                                 {...register("Password", { required: true, minLength: 8, pattern: /^[A-Za-z@$.0-infinte]/ })}
//                                 placeholder='New Password'
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                             />

//                             <input type="password"
//                                 {...register("Password", { required: true, minLength: 8, pattern: /^[A-Za-z@$.0-infinte]/ })}
//                                 placeholder='Confirm Password'
//                                 onChange={(e) => setNewPassword(e.target.value)}

//                             /> */}
//                             <div>
//                                 <Link to="/Dashboard" >
//                                     <button
//                                         onClick={forgetData} className=" rounded-2xl   bg-green-600 text-white  px-8 py-3">
//                                         Submit
//                                     </button>
//                                 </Link>
//                             </div>


//                         </form>

//                     </div>
//                     <div className="xl:col-2  md:col-2 sm:flex hidden">
//                         <img src={bgImg} class="md:src" alt="" /></div>
//                 </div>
//             </section>

//         </div>
//     );
// };
// export default Setting;
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import bgImg from "../assests/img7.jpg";
// import axios from 'axios';

// const Setting = () => {
//     const [email, setEmail] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const history = useHistory();

//     const forgetData = async () => {
//         try {
//             const res = await axios.get("http://localhost:4000/user/forget-password");
//             setEmail(res.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         forgetData();
//     }, []);

//     const resetPassword = async () => {
//         try {
//             await axios.post("http://127.0.0.1:4000/user/reset-password", {
//                 email,
//                 newPassword
//             });

//             // Redirect to the dashboard page
//             history.push('/dashboard');
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         resetPassword();
//     };

//     return (
//         <div>
//             <section>
//                 <div className="register">
//                     <div className="col-1">
//                         <h2 className="text-2xl font-bold text-green-600">Decentralized Voting System Using Blockchain</h2>
//                         <span><h2>Find Your Password via Email</h2></span>
//                         <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
//                             <h2 className="text-green-600">Change Your Password</h2>
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="New Password"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                             />
//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="rounded-2xl bg-green-600 text-white px-8 py-3"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="xl:col-2 md:col-2 sm:flex hidden">
//                         <img src={bgImg} className="md:src" alt="" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Setting;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bgImg from "../assests/img7.jpg";
import axios from 'axios';

const Setting = () => {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useHistory();

    const resetPassword = async () => {
        try {
            await axios.put("http://127.0.0.1:4000/user/reset-password", {
                token,
                newPassword
            });

            // Redirect to the dashboard page
            history.push('/dashboard');
        } catch (error) {
            console.error(error);
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

export default Setting;
