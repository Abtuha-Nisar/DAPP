import React from 'react'
import bgImg from "../assests/img8.png";
import { Link } from 'react-router-dom'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const ViewElection = () => {

    const data = [
        {
            name: "PMLN",
            NA: 4000,
            PA: 7400,
            amt: 2400
        },
        {
            name: "PTI",
            NA: 3000,
            PA: 9800,
            amt: 6210
        },
        {
            name: "PMLQ",
            NA: 2000,
            PA: 900,
            amt: 2290
        },
        {
            name: "MQM",
            NA: 2780,
            PA: 5908,
            amt: 2000
        },
        {
            name: "PPP",
            NA: 1890,
            PA: 4800,
            amt: 2181
        },

    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];


    return (

        <>

            <div className="bg-green-100 w-full h-screen justify-around md:w-full md:h-screen md:justify-around  ">

                <nav class="bg-green-600 text-white md:flex md:justify-between ">

                    <img src={bgImg} class=" w-24 h-18 py-2 px-6 " alt='logo' />
                    <span class="text-2xl flex  items-center  font-bold px-24">Decentralized Voting System Using Blockchain</span>

                    <ul class=" md:flex md:py-4  md:justify-end">
                        <Link to="/ViewElection"><li class="mx-2 cursor-pointer font-bold hover:text-black bg-green-900 ">View Election </li></Link>
                        <Link to="/Dashboard"><li class="mx-2 cursor-pointer font-bold hover:text-black  ">Vote </li></Link>
                        <Link to="/Result"> <li class="mx-2 cursor-pointer font-bold hover:text-black "> Result</li></Link>
                        <Link to="/Aboutvoter"> <li class="mx-2 cursor-pointer font-bold hover:text-black ">About Voter</li></Link>
                        <Link to="/Setting"> <li class="mx-2 cursor-pointer font-bold hover:text-black "> Setting</li></Link>
                        <Link to="/"><li class="mx-2 cursor-pointer font-bold hover:text-black "> Sign out</li></Link>

                    </ul>

                </nav>



                <main class="text-center  flex-auto  md:text-center sm:text-center">

                    <div class="text-center  text-black text-4xl font-semibold py-24 pl-22 ">

                        <div class="px-2">
                            <h1>Voting Trend</h1>
                        </div>
                        <div class="px-96  py-6 object-center">
                            <BarChart
                                width={800}
                                height={400}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 50,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="NA" fill="#0BDA51" />
                                <Bar dataKey="PA" fill="#00FF7F" />
                            </BarChart>

                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400} >
                                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                    </div>

                </main>


            </div >


        </>
    );
};
export default ViewElection;

