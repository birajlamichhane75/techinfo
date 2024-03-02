"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';



const Signin = () => {
    let { push } = useRouter();
    const [name, setname] = useState("");
    const [email, setemail] = useState("")

    let userpage = () => {
        if (name != "" && email != "") {
            let fullname = name.split(" ")
            localStorage.setItem("name",fullname[0])
            localStorage.setItem("email",email)
            push(`/dashboard/${fullname[0].toLowerCase()}`)
        }
        else {
            alert("You Must fill")
        }
    }


    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='h-[83vh] flex flex-col items-center justify-center gap-5'>
                <h1>Sign In</h1>
                <div className='flex flex-col gap-3 w-[70%]'>
                    <input
                        onChange={(e) => {
                            setname(e.target.value)
                        }}

                        value={name} type="text" placeholder='Your Name' required/>
                    <input
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}

                        value={email} type="email" placeholder='Your Email' />
                    <button
                        onClick={userpage}
                        className='px-3 py-2 text-xl font-semibold text-white rounded-md shadow-md w-[50%] mx-auto bg-blue-400' type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Signin;