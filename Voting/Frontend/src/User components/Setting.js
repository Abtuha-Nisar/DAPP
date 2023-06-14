import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImg from "../assests/img8.png";
import img2 from '../assests/img2.jpg';
const Setting = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [query, setQuery] = useState('');
    const [showData, setShowData] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const [showPageInfo, setShowPageInfo] = useState(false);
    const [showPageSupport, setShowPageSupport] = useState(false);

    const togglePageInfo = () => {
        setShowPageInfo(!showPageInfo);
    };

    const togglePageSupport = () => {
        setShowPageSupport(!showPageSupport);
    };
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Query:', query);
    };



    const toggleData = () => {
        setShowData(!showData);
    };

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };




    return (
        <div className="bg-green-100 min-h-screen  w-full">
            <div className="bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${img2})`,

                    minHeight: 'calc(109vh - 64px)',
                }}
            >
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
                            <Link to="/Dashboard" className="font-bold hover:text-black ">
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
                            <Link to="/Setting" className="font-bold hover:text-black bg-green-900">
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
                <main className="h-auto  flex flex-col">
                    <div className="flex items-start justify-center h-full">
                        <div className="w-64 bg-green-200 px-4 py-14 mx-2 ">
                            <div className="mb-4">
                                <button className="text-green-600" onClick={toggleProfile}>
                                    Profile
                                </button>
                            </div>

                            <div className="mb-4">
                                <button className="text-green-600" onClick={toggleAbout}>
                                    About
                                </button>

                            </div>
                            <div className="mb-4">
                                <button className="text-green-600" onClick={toggleData}>
                                    Query
                                </button>
                            </div>

                            <div className="mb-4 flex flex-col items-center">
                                <button className="text-green-600" onClick={togglePageInfo}>
                                    Info
                                </button>

                            </div>
                            <div className="mb-4 flex flex-col items-center">
                                <button className="text-green-600" onClick={togglePageSupport}>
                                    Support
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="bg-white shadow-lg p-4">
                                {showProfile && (
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="profileName" className="text-green-600">
                                                Profile Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="profileName"
                                                className="rounded-2xl bg-green-100 text-green-600 px-4 py-2 mt-2 w-full"
                                            />
                                        </div>
                                        {/* Add other profile fields here */}
                                    </form>
                                )}

                                {showAbout && (
                                    <div className="text-justify font-bold">

                                        <p>We are proposing a system which has greater accessibility as it is a Web application and possess
                                            greater security as authentication and verification. In this system the voter/user has to first register
                                            themselves using a registration form available within the Web application and once the registration
                                            form is being submitted, an entry is being made in the centralized database. After the registration
                                            the user can log into the application and be a part of the polling process. The user with its valid
                                            credentials can log into the system and verify them by entering the one-time-password which is
                                            valid for a limited period of time. Once the user is logged into their respective account the
                                            dashboard contains all the information which is retrieved from the centralized database. After the
                                            user logs into the account the user is being authenticated using OTP. Each account is provided
                                            with a single token which he will use to cast a vote, casting of votes will take place by transferring
                                            the token from the respective user account to the candidate’s wallet. A web application is being
                                            developed to measure the majority of votes which has the details about the total number of voters,
                                            the number of votes cast and the percentage of votes cast. Only one vote can be casted from one
                                            account and once a vote is being casted from an account the account is disabled from current voting
                                            process</p>

                                    </div>
                                )}
                                <div className="mb-4">

                                    {showData && (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="language" className="text-green-600">
                                                    Select Language:
                                                </label>
                                                <select
                                                    id="language"
                                                    value={selectedLanguage}
                                                    onChange={handleLanguageChange}
                                                    className="rounded-2xl bg-green-100 text-green-600 px-4 py-2 mt-2 w-full"
                                                >
                                                    <option value="en">English</option>
                                                    <option value="fr">French</option>
                                                    <option value="es">Spanish</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="color" className="text-green-600">
                                                    Select Color:
                                                </label>
                                                <input
                                                    type="color"
                                                    id="color"
                                                    value={selectedColor}
                                                    onChange={handleColorChange}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="query" className="text-green-600">
                                                    Query:
                                                </label>
                                                <textarea
                                                    id="query"
                                                    value={query}
                                                    onChange={handleQueryChange}
                                                    className="rounded-2xl bg-green-100 text-green-600 px-4 py-2 mt-2 w-full"
                                                ></textarea>
                                            </div>
                                            <div className="flex justify-center">
                                                <button
                                                    type="submit"
                                                    className="rounded-2xl bg-green-600 text-white px-8 py-3 mr-4"
                                                >
                                                    Send Query
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                                {showPageInfo && (
                                    <div className="text-center mt-2 font-bold">
                                        <p>This Page is  Static the setting options in this page will Static the info of this page to click the sidebar button and form will open in the center with the given information.</p>
                                    </div>
                                )}
                                {showPageSupport && (
                                    <div className=" mt-2 text-justify font-bold">

                                        <p>   Operating environment for Decentralized Voting System using Blockchain the is as listed below:
                                            <p>1.Operating System: Window 8, 10</p>
                                            <p>2.Technology: Blockchain</p>
                                            <p>3.Platform: Visual Studio Code in which Web application will be developed using React js. Front
                                                end will be designed in React js and backend will be designed in Node js.</p></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Setting;
