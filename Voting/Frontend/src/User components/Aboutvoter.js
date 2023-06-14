import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from "../assests/img8.png";
import img2 from '../assests/img2.jpg';
export default function Aboutvoter() {
    return (
        <div div className="bg-green-100  w-full h-screen justify-around  " >
            <div className="bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${img2})`,

                    height: 'calc(109vh - 64px)',
                }}
            >
                <nav class="bg-green-600 text-white xl:flex xl:justify-between sm:block sm:justify-center ">
                    <img src={bgImg} class=" w-24 h-18 py-2 px-6 rounded-4xl" alt={'logo'} />
                    <span class="text-2xl flex items-center  font-bold">Decentralized Voting System Using Blockchain</span>
                    <ul class=" flex py-4  justify-end">

                        <Link to="/Dashboard"> <li class="mx-2 cursor-pointer font-bold hover:text-black">Vote </li></Link>
                        <Link to="/Result"> <li class="mx-2 cursor-pointer font-bold hover:text-black"> Result</li></Link>
                        <Link to="/Aboutvoter"> <li class="mx-2 cursor-pointer font-bold hover:text-black bg-green-900">About voter</li></Link>
                        <Link to="/Setting"> <li class="mx-2 cursor-pointer font-bold hover:text-black"> Setting</li></Link>
                        <Link to="/"><li class="mx-2 cursor-pointer font-bold hover:text-black"> Sign out</li></Link>

                    </ul>
                </nav>
                <main>
                    <div class="px-2 py-6 text-justify sm:px-2 sm:py-6  sm:text-justify font-bold text-white">

                        <p>You can submit your application along with a copy of CNIC to the District Election Commissioner (DEC)/ Registration Officer/Assistant Registration Officer of the district where you want to get your name enrolled. The prescribed Form (Enrolment / Transfer of Vote) is available online at the ECP website or they can be obtained free of cost from the office of the District Election Commissioner / Registration Officer OR Assistant Registration Officer/Display Centre Incharge.




                            <h1 class="font-semibold text-3xl">VOTER FORMS:</h1>
                            <p>Form 21: For Registration / Transfer of Vote</p>
                            <p>Form 22: For Objection / Deletion of Vote</p>
                            <p>Form 23: For Correction of Particulars</p>


                            <h1 className='text-3xl py-3 sm:py-3'> ELIGIBILITY TO BE A VOTER</h1>

                            A person shall be entitled to be enrolled as a voter in an electoral area if he—

                            <p> (a) is a citizen of Pakistan;</p>

                            <p> (b) is not less than eighteen years of age;</p>

                            <p>(c) possesses a National Identity Card issued by the National Database and Registration Authority at any time till the last day fixed for inviting claims, objections and applications for
                                preparation, revision or correction of electoral rolls;</p>

                            <p>(d) is not declared by a competent court to be of unsound mind; and</p>

                            <p>(e) is or is deemed under section 27 to be resident in the electoral area.</p>

                            <h1 class="font-bold"> Explanation.—</h1>
                            The National Identity Card issued by the National Database and Registration Authority shall be deemed to be valid for the purpose of registration as a voter or for casting vote in an election, notwithstanding the expiry of its validity period. </p>
                    </div >
                </main>
            </div >
        </div>
    )

}
