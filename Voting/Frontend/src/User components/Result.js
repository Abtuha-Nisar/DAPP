// import React from 'react'
// import { Link } from 'react-router-dom'
// import bgImg from "../assests/img8.png";
// //import React, { useCallback, useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import img1 from "../assests/img1.png";


// const Result = () => {

//     const data = [
//         { name: "PTI", value: 900 },
//         { name: "PMLN", value: 300 },
//         { name: "PPP", value: 300 },
//         { name: "PMLQ", value: 200 }
//     ];

//     const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//     const RADIAN = Math.PI / 180;
//     const renderCustomizedLabel = ({
//         cx,
//         cy,
//         midAngle,
//         innerRadius,
//         outerRadius,
//         percent,
//         index
//     }: any) => {
//         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//         const x = cx + radius * Math.cos(-midAngle * RADIAN);
//         const y = cy + radius * Math.sin(-midAngle * RADIAN);

//         return (
//             <text
//                 x={x}
//                 y={y}
//                 fill="white"
//                 textAnchor={x > cx ? "start" : "end"}
//                 dominantBaseline="central"
//             >
//                 {`${(percent * 100).toFixed(0)}%`}
//             </text>
//         );
//     };

//     return (

//         <>
//             <div className="bg-green-100 md:w-full md:h-screen justify-around">

//                 <nav class="sm:bg-green-400 xl:bg-green-600 text-white md:flex justify-between   ">
//                     <img src={bgImg} class=" w-24 h-18 py-2 px-6 rounded-4xl" alt='logo' />
//                     <span class="text-2xl flex items-center font-bold">Decentralized Voting System Using Blockchain</span>
//                     <ul class=" flex py-4  justify- text-white ">

//                         <Link to="/Dashboard"><li class="mx-2 cursor-pointer font-bold hover:text-black ">Vote </li></Link>
//                         <li class="mx-2 cursor-pointer font-bold hover:text-black bg-green-900 "> Result</li>
//                         <Link to="/Aboutvoter"><li class="mx-2 cursor-pointer font-bold hover:text-black ">About voter</li></Link>
//                         <Link to="/Setting"> <li class="mx-2 cursor-pointer font-bold hover:text-black "> Setting</li></Link>
//                         <Link to="/"><li class="mx-2 cursor-pointer font-bold hover:text-black "> Sign out</li></Link>
//                     </ul>
//                 </nav>
//                 <main>
//                     <div class="main py-24  pl-4 ">
//                         <h1 class="text-black text-2xl font-bold" >Pakistan General Elections 2023</h1>
//                         {/* <h1 class="text-black text-2xl font-bold" >Election Result</h1> */}

//                         <div class="flex md:flex"  > <img class=" w-1/4 absolute inset-24 h-5/6 left-2 bottom-0 " src={img1} alt="" /></div>

//                         Processing...

//                         <div class=" justify-center flex  ">
//                             <PieChart width={400} height={400}>
//                                 <Pie
//                                     data={data}
//                                     cx={200}
//                                     cy={200}
//                                     labelLine={false}
//                                     label={renderCustomizedLabel}
//                                     outerRadius={80}
//                                     fill="#8884d8"
//                                     dataKey="value"

//                                 >
//                                     {data.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                 </Pie>

//                             </PieChart>

//                         </div>

//                         <div class="flex justify-center align-bottom">
//                             <h1 class="text-blue-600   text-2xl ">PTI</h1>
//                             <h1 class="text-green-600 text-2xl">PMLN</h1>
//                             <h1 class="text-yellow-600 text-2xl">PPP</h1>
//                             <h1 class="text-orange-600 text-2xl">PMLQ</h1>
//                         </div>

//                     </div>



//                 </main>


//             </div >


//         </>
//     );
// };
// export default Result;
import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from "../assests/img8.png";
import { PieChart, Pie, Cell } from "recharts";
import img2 from "../assests/img2.jpg";

const Result = () => {
    const data = [
        { name: "PTI", value: 900 },
        { name: "PMLN", value: 300 },
        { name: "PPP", value: 300 },
        { name: "PMLQ", value: 200 }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className="bg-green-100 md:w-full md:h-screen justify-around">
                <nav class="sm:bg-green-400 xl:bg-green-600 text-white md:flex justify-between">
                    <img src={bgImg} class="w-24 h-18 py-2 px-6 rounded-4xl" alt='logo' />
                    <span class="text-2xl flex items-center font-bold">Decentralized Voting System Using Blockchain</span>
                    <ul class="flex py-4 justify-text-white">
                        <Link to="/Dashboard"><li class="mx-2 cursor-pointer font-bold hover:text-black">Vote </li></Link>
                        <li class="mx-2 cursor-pointer font-bold hover:text-black bg-green-900"> Result</li>
                        <Link to="/Aboutvoter"><li class="mx-2 cursor-pointer font-bold hover:text-black">About voter</li></Link>
                        <Link to="/Setting"><li class="mx-2 cursor-pointer font-bold hover:text-black"> Setting</li></Link>
                        <Link to="/"><li class="mx-2 cursor-pointer font-bold hover:text-black"> Sign out</li></Link>
                    </ul>
                </nav>
                <main style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div class="main py-24  pl-4 ">
                        <h1 class="text-black text-4xl font-bold">Pakistan General Elections 2023</h1>
                        {/* <h1 class="text-black text-2xl font-bold" >Election Result</h1> */}

                        Processing...

                        <div class="justify-center flex">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    cx={200}
                                    cy={200}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>

                        <div class="flex justify-center align-bottom">
                            <h1 class="text-blue-600 text-2xl">PTI</h1>
                            <h1 class="text-green-600 text-2xl">PMLN</h1>
                            <h1 class="text-yellow-600 text-2xl">PPP</h1>
                            <h1 class="text-orange-600 text-2xl">PMLQ</h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Result;
