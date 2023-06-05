import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import image from '../assests/img8.png';

const DisplayResult = () => {
    const [resultData, setResultData] = useState(null);
    const history = useHistory();
    const [token, setToken] = useState('');

    useEffect(() => {
        fetchAdminToken();
        // eslint-disable-next-line
    }, []);

    const fetchAdminToken = async () => {
        try {
            const response = await axios.post('http://localhost:4000/admin/Login_Admin', {
                cnic: '4250151446569',
                password: 'Muneem.07',
                token
            });
            const adminToken = response.data.token;
            setToken(adminToken);
            fetchResultData(adminToken);
        } catch (error) {
            toast.error(`Error fetching admin login token: ${error.message}`);
        }
    };

    const fetchResultData = async (adminToken) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            };

            const response = await axios.get('http://localhost:4000/admin/display_result', config);
            const { winnerparty, winnerName } = response.data;
            setResultData({ winnerparty, winnerName });
        } catch (error) {
            toast.error(`Error fetching result data: ${error.message}`);
        }
    };

    // const handleDisplayResult = () => {
    //     if (!resultData || !resultData.winnerparty) {
    //         toast.error('No winner party data available');
    //         return;
    //     }

    //     history.push('/Result', resultData);
    // };
    const handleDisplayResult = () => {
        if (!resultData || !resultData.winnerparty) {
            toast.error('No winner party data available');
            return;
        }

        history.push('/Result', {
            winnerparty: resultData.winnerparty,
            winnerName: resultData.winnerName
        });
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-green-100 w-full">
                <nav className="bg-green-600 text-white md:text-center md:flex md:justify-between w-full">
                    <img src={image} className="w-24 h-18 py-2 px-6 rounded-4xl" alt="" />
                    <span className="md:text-2xl flex md:items-center font-bold">
                        Decentralized Voting System Using Blockchain
                    </span>
                    <div className="md:flex md:items-center">
                        <ul className="flex py-4 md:justify-end">
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/AdminDashboard">Dashboard</Link>
                            </li>
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/CandidateList">Candidate List</Link>
                            </li>
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/VoterList">Voter List</Link>
                            </li>
                            <li
                                className="mx-2 cursor-pointer font-bold hover:text-black bg-green-900"
                                onClick={handleDisplayResult}
                            >
                                Display Result
                            </li>
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/AdminLogin">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="text-center flex-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold mt-8 mb-4">Result Management</h1>
                        {resultData ? (
                            <div className="result-container bg-white rounded-lg shadow-md p-6 px-60">
                                <div className="result-data">
                                    <h2 className="text-2xl font-semibold mb-4">Winner Party:</h2>
                                    <div className="card-container">
                                        {resultData.winnerparty ? (
                                            <div className="card p-4 border border-black">
                                                <h3 className="text-xl font-semibold">{resultData.winnerparty}</h3>
                                            </div>
                                        ) : (
                                            <p className="text-gray-500">No winner party data available</p>
                                        )}
                                    </div>
                                    <h2 className="text-2xl font-semibold mt-8">Winner Name:</h2>
                                    {resultData.winnerName ? (
                                        <div className="card p-4 border border-black">
                                            <h3 className="text-xl font-semibold">{resultData.winnerName}</h3>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">No winner name data available</p>
                                    )}
                                </div>
                                <button
                                    className="bg-green-900 text-white py-2 px-4 mt-8 rounded hover:bg-green-700"
                                    onClick={handleDisplayResult}
                                >
                                    Display Result
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-500">Loading result data...</p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default DisplayResult;
