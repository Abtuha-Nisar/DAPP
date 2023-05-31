// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import bgImg from "../assests/img8.png";
// import logo from "../assests/logo.png";
// import logo1 from "../assests/logo1.png";
// import logo2 from "../assests/logo2.png";
// import logo3 from "../assests/logo3.png";
// import logo4 from "../assests/logo4.png";
// import { toast } from 'react-toastify';

// const Dashboard = () => {
//     // State variables
//     //const [token, setToken] = useState('');
//     const [isVoteCasted, setIsVoteCasted] = useState(false);
//     const [isVoteLocked, setIsVoteLocked] = useState(false);
//     //const [candidates, setCandidates] = useState([]);

//     // Fetch the login token
//     // useEffect(() => {
//     //     axios
//     //         .post('http://localhost:4000/user/login', {})
//     //         .then((response) => {
//     //             const { token } = response.data;
//     //             setToken(token);
//     //             localStorage.setItem('token', token); // Store token in local storage
//     //         })
//     //         .catch((error) => {
//     //             console.error(error);
//     //             alert("Failed to fetch token. Please try again.");
//     //         });
//     // }, []);

//     // Fetch the list of candidates
//     // useEffect(() => {
//     //     const storedToken = localStorage.getItem('token'); // Retrieve token from local storage

//     //     if (storedToken) {
//     //         const config = {
//     //             headers: {
//     //                 // Authorization: `Bearer ${storedToken}`,    
//     //                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//     //             },
//     //         };

//     //         axios
//     //             .get('http://localhost:4000/admin/register_candidate', config)
//     //             .then((response) => {
//     //                 setCandidates(response.data);
//     //             })
//     //             .catch((error) => {
//     //                 console.error(error);
//     //                 alert("Failed to fetch candidates. Please try again.");
//     //             });
//     //     }
//     // }, []);

//     // Handle the vote for a candidate
//     const handleVote = (candidateId) => {
//         if (isVoteLocked) {
//             toast.warn("You have already cast your vote. Voting is locked.");
//             return;
//         }




//         const config = {
//             headers: {
//                 // Authorization: `Bearer ${storedToken}`,
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//         };

//         const data = {
//             candidate_id: '646f88188dfb3e2ec5cdb2e7',
//         };

//         axios
//             .post('http://localhost:4000/user/cast_vote', data, config)
//             .then((response) => {
//                 console.log(response.data);
//                 setIsVoteCasted(true);
//                 setIsVoteLocked(true);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 if (error.response && error.response.data && error.response.data.msg === 'Invalid token') {
//                     toast.error("Invalid token. Please try again.");
//                 } else {
//                     toast.error("An error occurred while casting your vote. Please try again later.");
//                 }
//             });

//     };

//     return (
//         <div className="bg-green-100 h-screen w-full">
//             <nav className="bg-green-600 text-white py-2 px-4 flex items-center justify-between">
//                 <img src={bgImg} className="w-12 h-12" alt='logo' />
//                 <span className="text-xl font-bold px-4">Decentralized Voting System Using Blockchain</span>
//                 <ul className="flex items-center space-x-4">
//                     <li>
//                         <Link to="/ViewElection" className="font-bold hover:text-black">
//                             View Election
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/Dashboard" className="font-bold hover:text-black bg-green-900">
//                             Vote
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/Result" className="font-bold hover:text-black">
//                             Result
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/Aboutvoter" className="font-bold hover:text-black">
//                             About Voter
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/Setting" className="font-bold hover:text-black">
//                             Setting
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/" className="font-bold hover:text-black">
//                             Sign out
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>

//             <main className="container mx-auto py-8" >

//                 <h1 className="text-4xl font-semibold text-center text-black mb-8">
//                     Cast Your Vote
//                 </h1>

//                 {isVoteCasted ? (
//                     <div className="text-center text-green-600 font-bold mb-4">
//                         Vote successfully casted!
//                     </div>
//                 ) : null}

//                 <div className="w-full flex justify-center" >
//                     <ul className="flex flex-wrap justify-center gap-8 max-w-4xl">
//                         <li className="party-card">
//                             <img
//                                 src={logo}
//                                 className="w-40 h-40 rounded-full cursor-pointer"
//                                 alt="Nawaz Sharif"
//                                 onMouseEnter={() => handleVote('Nawaz Sharif')}
//                             />
//                             <button
//                                 className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
//                                 onClick={() => handleVote('PML')}
//                             >
//                                 Nawaz Sharif
//                             </button>
//                         </li>
//                         <li className="party-card">
//                             <img
//                                 src={logo1}
//                                 className="w-40 h-40 rounded-full cursor-pointer"
//                                 alt="Shujaat Hussain"
//                                 onMouseEnter={() => handleVote('Shujaat Hussain')}
//                             />
//                             <button
//                                 className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
//                                 onClick={() => handleVote('PMLQ')}
//                             >
//                                 Shujaat Hussain
//                             </button>
//                         </li>
//                         <li className="party-card">
//                             <img
//                                 src={logo2}
//                                 className="w-40 h-40 rounded-full cursor-pointer"
//                                 alt="Imran Khan"
//                                 onMouseEnter={() => handleVote('Imran Khan')}
//                             />
//                             <button
//                                 className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
//                                 onClick={() => handleVote('PTI')}
//                             >
//                                 Imran Khan
//                             </button>
//                         </li>
//                         <li className="party-card">
//                             <img
//                                 src={logo3}
//                                 className="w-40 h-40 rounded-full cursor-pointer"
//                                 alt="Khalid Maqbool"
//                                 onMouseEnter={() => handleVote('Khalid Maqbool')}
//                             />
//                             <button
//                                 className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
//                                 onClick={() => handleVote('MQM')}
//                             >
//                                 Khalid Maqbool
//                             </button>
//                         </li>
//                         <li className="party-card">
//                             <img
//                                 src={logo4}
//                                 className="w-40 h-40 rounded-full cursor-pointer"
//                                 alt="Bilawal Bhutto"
//                                 onMouseEnter={() => handleVote('Bilawal Bhutto')}
//                             />
//                             <button
//                                 className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
//                                 onClick={() => handleVote('PPP')}
//                             >
//                                 Bilawal Bhutto
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Dashboard;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bgImg from "../assests/img8.png";
import logo from "../assests/logo.png";
import logo1 from "../assests/logo1.png";
import logo2 from "../assests/logo2.png";
import logo3 from "../assests/logo3.png";
import logo4 from "../assests/logo4.png";
import { toast } from 'react-toastify';

const Dashboard = () => {
    // State variables
    //const [token, setToken] = useState('');
    const [isVoteCasted, setIsVoteCasted] = useState(false);
    const [isVoteLocked, setIsVoteLocked] = useState(false);
    //const [candidates, setCandidates] = useState([]);



    // Handle the vote for a candidate
    const handleVote = (candidateId) => {
        if (isVoteLocked) {
            toast.warn("You have already cast your vote. Voting is locked.");
            return;
        }




        const config = {
            headers: {
                // Authorization: `Bearer ${storedToken}`,
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        };

        const data = {
            candidate_id: '646f88188dfb3e2ec5cdb2e7',
        };

        axios
            .post('http://localhost:4000/user/cast_vote', data, config)
            .then((response) => {
                console.log(response.data);
                setIsVoteCasted(true);
                setIsVoteLocked(true);
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.msg === 'Invalid token') {
                    toast.error("Invalid token. Please try again.");
                } else {
                    toast.error("An error occurred while casting your vote. Please try again later.");
                }
            });

    };

    return (
        <div className="bg-green-100 h-screen w-full">
            <nav className="bg-green-600 text-white py-2 px-4 flex items-center justify-between">
                <img src={bgImg} className="w-12 h-12" alt='logo' />
                <span className="text-xl font-bold px-4">Decentralized Voting System Using Blockchain</span>
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link to="/ViewElection" className="font-bold hover:text-black">
                            View Election
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard" className="font-bold hover:text-black bg-green-900">
                            Vote
                        </Link>
                    </li>
                    <li>
                        <Link to="/Result" className="font-bold hover:text-black">
                            Result
                        </Link>
                    </li>
                    <li>
                        <Link to="/Aboutvoter" className="font-bold hover:text-black">
                            About Voter
                        </Link>
                    </li>
                    <li>
                        <Link to="/Setting" className="font-bold hover:text-black">
                            Setting
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="font-bold hover:text-black">
                            Sign out
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="container mx-auto py-8" >

                <h1 className="text-4xl font-semibold text-center text-black mb-8">
                    Cast Your Vote
                </h1>

                {isVoteCasted ? (
                    <div className="text-center text-green-600 font-bold mb-4">
                        Vote successfully casted!
                    </div>
                ) : null}

                <div className="w-full flex justify-center" >
                    <ul className="flex flex-wrap justify-center gap-8 max-w-4xl">
                        <li className="party-card">
                            <img
                                src={logo}
                                className="w-40 h-40 rounded-full cursor-pointer"
                                alt="Nawaz Sharif"
                                onMouseEnter={() => handleVote('Nawaz Sharif')}
                            />
                            <button
                                className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                onClick={() => handleVote('PML')}
                            >
                                Nawaz Sharif
                            </button>
                        </li>
                        <li className="party-card">
                            <img
                                src={logo1}
                                className="w-40 h-40 rounded-full cursor-pointer"
                                alt="Shujaat Hussain"
                                onMouseEnter={() => handleVote('Shujaat Hussain')}
                            />
                            <button
                                className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                onClick={() => handleVote('PMLQ')}
                            >
                                Shujaat Hussain
                            </button>
                        </li>
                        <li className="party-card">
                            <img
                                src={logo2}
                                className="w-40 h-40 rounded-full cursor-pointer"
                                alt="Imran Khan"
                                onMouseEnter={() => handleVote('Imran Khan')}
                            />
                            <button
                                className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                onClick={() => handleVote('PTI')}
                            >
                                Imran Khan
                            </button>
                        </li>
                        <li className="party-card">
                            <img
                                src={logo3}
                                className="w-40 h-40 rounded-full cursor-pointer"
                                alt="Khalid Maqbool"
                                onMouseEnter={() => handleVote('Khalid Maqbool')}
                            />
                            <button
                                className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                onClick={() => handleVote('MQM')}
                            >
                                Khalid Maqbool
                            </button>
                        </li>
                        <li className="party-card">
                            <img
                                src={logo4}
                                className="w-40 h-40 rounded-full cursor-pointer"
                                alt="Bilawal Bhutto"
                                onMouseEnter={() => handleVote('Bilawal Bhutto')}
                            />
                            <button
                                className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                onClick={() => handleVote('PPP')}
                            >
                                Bilawal Bhutto
                            </button>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;