import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bgImg from '../assests/img8.png';
import img2 from '../assests/img2.jpg';

const Result = () => {
    const location = useLocation();
    const { winnerparty, winnerName } = location.state || {};

    const [displayResult, setDisplayResult] = useState(false);

    useEffect(() => {
        if (winnerparty && winnerName) {
            setDisplayResult(true);
        }
    }, [winnerparty, winnerName]);

    return (
        <>
            <div className="bg-green-100 md:w-full md:h-screen justify-around">
                <nav className="sm:bg-green-400 xl:bg-green-600 text-white md:flex justify-between">
                    <img src={bgImg} className="w-24 h-18 py-2 px-6 rounded-4xl" alt="logo" />
                    <span className="text-2xl flex items-center font-bold">
                        Decentralized Voting System Using Blockchain
                    </span>
                    <ul className="flex py-4 justify-text-white">
                        <Link to="/Dashboard">
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">Vote</li>
                        </Link>
                        <li className="mx-2 cursor-pointer font-bold hover:text-black bg-green-900">Result</li>
                        <Link to="/Aboutvoter">
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">About voter</li>
                        </Link>
                        <Link to="/Setting">
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">Setting</li>
                        </Link>
                        <Link to="/">
                            <li className="mx-2 cursor-pointer font-bold hover:text-black">Sign out</li>
                        </Link>
                    </ul>
                </nav>
                <main
                    style={{
                        backgroundImage: `url(${img2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 'calc(100vh - 64px)',
                    }}
                    className="flex justify-center items-center"
                >
                    <div className="main py-24 pl-4">
                        <h1 className="text-black text-4xl font-bold">Pakistan General Elections 2023</h1>

                        <div className="card-container">
                            <div className="card p-6 border border-black">
                                <h2 className="text-2xl font-semibold">Winner Party:</h2>
                                {displayResult && (
                                    <h3 className="text-xl font-semibold">{winnerparty}</h3>
                                )}
                            </div>
                            <div className="card p-6 border border-black">
                                <h2 className="text-2xl font-semibold">Winner Name:</h2>
                                {displayResult && (
                                    <h3 className="text-xl font-semibold">{winnerName}</h3>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center align-bottom">
                            <h1 className="text-blue-600 text-2xl">PTI</h1>
                            <h1 className="text-green-600 text-2xl">PMLN</h1>
                            <h1 className="text-yellow-600 text-2xl">PPP</h1>
                            <h1 className="text-orange-600 text-2xl">PMLQ</h1>
                            <h1 className="text-red-600 text-2xl">MQM</h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Result;
