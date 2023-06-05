import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImg from "../assests/img8.png";
import { ethers } from 'ethers'
import { Voting } from '../utils/VotingSystem';



const Dashboard = () => {
    const [isVoteCasted, setIsVoteCasted] = useState(false);
    const [isVoteLocked, setIsVoteLocked] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        Voting,
        signer
    );
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/admin/display_candidates");
            setCandidates(response.data);

        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch candidate data. Please try again later.");
        }
    };
    const SignVote = async (name) => {
        try {
            const transaction = await contract.mintVote(
                name
            );

            await toast.promise(
                transaction.wait().then((res) => {
                    console.log("Minting call response", res);
                    toast.info(res);
                }),
                {
                    pending: "Minting in Process...",
                    success: "Mint Successfully 👌",
                    error: "Promise rejected 🤯",
                }
            );

            await toast.promise(
                Promise.resolve(),
                {
                    pending: "Waiting to Sign Transaction...",
                    success: "Transaction Signed... 👌",
                    error: "Transaction Rejected 🤯",
                }
            );
        } catch (err) {
            console.log("Minting call response", err);
            toast.error("Error in Minting Token:", err);
        }
    }
    const handleVote = (candidateId, name) => {
        if (isVoteLocked) {
            toast.warn("You have already cast your vote. Voting is locked.");
            return;
        }

        const token = localStorage.getItem('token');
        console.log(token);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };



        const data = {
            candidate_id: candidateId,
        };

        axios
            .post("http://localhost:4000/user/cast_vote", data, config)
            .then((response) => {
                console.error(response.data);
                setIsVoteCasted(true);
                setIsVoteLocked(true);
                SignVote(name);
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.msg === 'Invalid token') {
                    toast.error("Invalid token. Please try again.");
                } else {
                    toast.error("An error occurred while casting your vote. Please try again later.");
                    toast.warn("You have already cast your vote. Voting is locked.");

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

            <main className="container mx-auto py-8">
                <h1 className="text-4xl font-semibold text-center text-black mb-8">
                    Cast Your Vote
                </h1>

                {isVoteCasted && (
                    <div className="text-center text-green-600 font-bold mb-4">
                        Vote successfully casted!
                    </div>
                )}

                <div className="w-full flex justify-center">
                    <ul className="flex flex-wrap justify-center gap-8 max-w-4xl">
                        {candidates.map((candidate) => (
                            <li className="party-card" key={candidate._id}>
                                <img
                                    src={candidate.image}
                                    className="w-40 h-40 rounded-full cursor-pointer"
                                    alt={candidate._name}
                                    onClick={() => handleVote(candidate._id, candidate.candidate_name)}
                                />
                                <button
                                    className="w-full bg-green-600 py-2 text-white font-bold mt-2 hover:bg-green-700 transition-colors duration-300"
                                    onClick={() => handleVote(candidate._id, candidate.candidate_name)}
                                >
                                    {candidate.candidate_name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;



