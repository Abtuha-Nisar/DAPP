import React from 'react';
import { Link } from 'react-router-dom';
//import image from '../assests/img7.jpg';
import bgImg from "../assests/img8.png";
import img2 from "../assests/img2.jpg";

const HomePage = () => {
    return (
        <>
            <div
                className="xl:bg-emerald-400 bg-green-400 sm:bg-green-300 xl:w-full w-full xl:h-screen h-auto flex flex-col items-center"
                style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <nav className="bg-green-600 text-white w-full py-0">
                    <div className="flex justify-between items-center container mx-auto">
                        <span className="w-24 h-18 py-2 px-6">
                            <img src={bgImg} className="w-full h-full" alt='logo' />
                        </span>
                        <span className="xl:text-2xl sm:text-xl flex items-center text-green-900 font-bold">
                            Decentralized Voting System Using Blockchain
                        </span>
                        <ul className="flex">
                            <Link to="/register">
                                <li className="cursor-pointer font-bold text-green-900 hover:text-black">
                                    <button className="bg-white rounded-full py-2 px-2">Sign Up</button>
                                </li>
                            </Link>
                            <Link to="/Adminlogin">
                                <li className="mx-2 cursor-pointer font-bold hover:text-black text-green-900">
                                    <button className="bg-white rounded-full py-2 px-2">Admin</button>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <main className="flex-grow">
                    <section>
                        <div className="container grid grid-two-coloumn">
                            <div className="hero-section-image xl:justify-around justify-center">
                                <div className="hidden xl:h-48 xl:w-64 xl:flex"></div>
                            </div>
                            <div className="hero-section-data xl:justify-center xl:justify-content flex flex-col items-center text-center">
                                <h1 className="xl:text-5xl text-black xl:flex py-6 px-32 font-bold sm:text-2xl">
                                    WELCOME TO OUR WEBSITE
                                </h1>
                                <h1 className="xl:text-3xl sm:text:2xl text-black xl:flex px-56 font-bold sm:flex-row hidden">
                                    ITS YOUR RIGHT TO CAST VOTE
                                </h1>
                                <div className="xl:px-96 xl:py-4 sm:px-5 sm:py-2">
                                    <Link to="/Login">
                                        <button
                                            className="bg-green-600 hover:text-black rounded-full py-2 px-2 xl:flex font-bold text-white xl:text-2xl sm:text-xl"
                                        >
                                            Get Started
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default HomePage;

