import React from 'react'
//import { useState } from 'react';
import { Link } from 'react-router-dom'
//import bgImg from "../assests/img7.jpg";
import image from '../assests/img8.png';

import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const AdminDashboard = () => {
    // const [value, setvalue] = useState('');

    // const [updated, setUpdated] = useState(value);

    // const handleChange = (event) => {
    //     setvalue(event.target.value);

    // };

    // const handleClick = () => {

    //     setUpdated(value);



    // };
    const data = [
        {
            name: 'PMLN',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: 'PTI',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: 'PMLQ',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: 'PPP',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: 'MQM',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: 'ANP',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];

    return (
        <>

            <div className="bg-green-100  md:w-full md:h-screen md:justify-around ">

                <nav class=" bg-green-600 md:text-center md:flex md:justify-between text-white ">

                    <img src={image} class=" w-24 h-18 py-2 px-6 rounded-4xl " alt="" />

                    <span class="md:text-2xl flex md:items-center  font-bold">Decentralized Voting System Using Blockchain</span>
                    <ul class=" flex py-4 md:justify-end">

                        <Link to="/Candidatelist"><li class="mx-2 cursor-pointer  font-bold hover:text-black  ">Candidate List </li></Link>
                        <Link to="/Voterlist"><li class="mx-2 cursor-pointer font-bold hover:text-black "> Voter list </li></Link>
                        <Link to="/DisplayResult"><li class="mx-2 cursor-pointer font-bold hover:text-black ">Display Result </li></Link>
                        <div>
                            <Link to="/Adminlogin"><li class="mx-2 cursor-pointer font-bold hover:text-black "> Sign out</li></Link></div>

                    </ul>

                </nav>
                <main class="text-center flex-auto  md:text-center sm:text-center">
                    <div>
                        <h1 class=" text-4xl font-semibold py-24 pl-22  text-black text-align: center ">Admin </h1>

                    </div>
                    {/* <div class="flex" > <img class="ml-auto w-1/4 absolute inset-24 h-5/6 right-2 bottom-0" src="https://media.springernature.com/w580h326/nature-cms/uploads/collections/A104690_SREP_GE_BLOCKCHAINHERO_1200x675px-94dc5b2c5fa6dd9c7ec263ccd90c63d1.jpg" alt="" /></div> */}
                    {/* <div class="flex" > <img class=" w-1/4 absolute inset-24 h-5/6 left-2 bottom-0 " src={bgImg} alt="logo" /></div> */}
                    {/* <button onClick={handleClick} class="text-white rounded-2xl bg-green-600 mx-4 py-3 px-6  font-bold ">Add candidate</button> */}

                    <div style={{ width: '100%', height: 300 }} class="bg-green-300 px-2 ">
                        <h1 class="font-bold">Election Statistics</h1>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </main>


            </div >

        </>
    );
};
export default AdminDashboard;

