import React from 'react'
import bgImg from "../assests/img7.jpg";
//import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SigninOTP = () => {
    const [otp, setOTP] = useState("");
    const collectData = async () => {
        console.log(otp);
        let result = await fetch(" ", {
            method: 'post',
            body: JSON.stringify({ otp }),
            headers: {
                'content-Type': 'application/json'
            }

        });

        result = await result.JSON();
        console.warn(result);
    }


    // const { register, handleSubmit, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

    return (

        <section >

            <div className="register">

                {/* <div className="col-1 sm:col-1 " onSubmit={handleSubmit(onSubmit)}> */}
                <div class="col-1 sm:col-1 " >
                    <h2 class="text-2xl font-bold text-green-600 sm:text-2xl sm:font-bold ">Decentralized Voting System Using Blockchain</h2>
                    <span>Enter 4-Digit OTP sent via SMS to Email
                    </span>
                    <form id='form' class="flex flex-col sm:flex sm:flex-col">
                        <div className='otp-field'>
                            <input
                                type="text"
                                value={otp}
                                placeholder='OTP code'
                                onChange={(e) => setOTP(e.target.value)}


                            />

                            {/* {...register("OTP", { required: true, minLength: 4, maxLength: 4 })}
                            {errors.OTP?.type === "required" && "OTP is Required"}
                            {errors.OTP?.type === "minLength" && "invalid OTP"}
                            {errors.OTP?.type === "maxLength" && "invalid OTP"} */}


                        </div>
                        <div className='links'>
                            <Link to="/Dashboard"><button onClick={collectData} className=" rounded-3xl bg-green-600 px-8 py-3 sm:px-8 sm:py-3 text-white" >Sign in</button></Link>
                            <Link to="/Signin"><button className=" rounded-3xl bg-green-600 px-8 py-3 text-white">Previous</button></Link>
                        </div>
                    </form>

                </div>

                <div className="col-2 sm:col-2  ">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>

    );
};
export default SigninOTP;
