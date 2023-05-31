import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import image from '../assests/img8.png';

const DisplayResult = () => {
    const [votedPerson, setVotedPerson] = useState([]);
    const [winnerParty, setWinnerParty] = useState('');
    const [candidateVotes, setCandidateVotes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/cast_vote');
                setVotedPerson(response.data);
            } catch (error) {
                console.error('Error fetching voted person data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchWinnerParty = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/display_result');
                const { winnerParty, candidateVotes } = response.data;
                setWinnerParty(winnerParty);
                setCandidateVotes(candidateVotes);
            } catch (error) {
                console.error('Error fetching winner party data:', error);
            }
        };

        fetchWinnerParty();
    }, []);

    const handleDisplayResult = () => {
        if (votedPerson.length === 0) {
            alert('No data available for voted persons');
            return;
        }

        if (!winnerParty) {
            alert('No winner party data available');
            return;
        }

        if (candidateVotes.length === 0) {
            alert('No candidate vote data available');
            return;
        }

        const resultData = {
            votedPerson,
            winnerParty,
            candidateVotes,
        };

        history.push('/Result', resultData);
    };

    return (
        <>
            <div className="bg-green-100 md:w-full md:h-screen md:justify-around">
                <nav className="bg-green-600 text-white md:text-center md:flex md:justify-between">
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
                                <Link to="/Candidatelist">Candidate List</Link>
                            </li>
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/Voterlist">Voter List</Link>
                            </li>
                            <li
                                className="mx-2 cursor-pointer font-bold hover:text-black bg-green-900"
                                onClick={handleDisplayResult}
                            >
                                Display Result
                            </li>
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">
                                <Link to="/Adminlogin">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="text-center flex-auto md:text-center sm:text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-semibold py-24 pl-22 text-black">
                            Result Management
                        </h1>
                        <div className="result-container bg-white rounded-lg shadow-md p-6 px-60 ">
                            <div className="result-data">
                                <h2 className="text-2xl font-semibold mb-4">Person who cast the vote:</h2>
                                {votedPerson.length > 0 ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="py-2">Name</th>
                                                <th className="py-2">Party</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {votedPerson.map((person) => (
                                                <tr key={person.id}>
                                                    <td className="py-2">{person.name}</td>
                                                    <td className="py-2">{person.party}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p className="text-gray-500">No data available</p>
                                )}
                                <h2 className="text-2xl font-semibold mt-8">Winner Party:</h2>
                                <div className="card-container">
                                    {winnerParty ? (
                                        <div className="card p-4 border border-black">
                                            <h3 className="text-xl font-semibold">{winnerParty}</h3>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">No winner party data available</p>
                                    )}
                                </div>
                                <h2 className="text-2xl font-semibold mt-8">Candidate Votes:</h2>
                                {candidateVotes.length > 0 ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="py-2">Name</th>
                                                <th className="py-2">Votes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {candidateVotes.map((candidate) => (
                                                <tr key={candidate.id}>
                                                    <td className="py-2">{candidate.name}</td>
                                                    <td className="py-2">{candidate.votes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p className="text-gray-500">No candidate vote data available</p>
                                )}
                            </div>
                            <button
                                className="mt-8 bg-green-500 text-white px-4 py-2 rounded-lg "
                                onClick={handleDisplayResult}
                            >
                                Display Result
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default DisplayResult;
