"use client"
import React, { useEffect, useState } from 'react';
import Pframe from '../../../../components/Pframe';
import { toast } from 'react-toastify';
import Navbar from '../../../../components/Navbar';
import Link from 'next/link';
import { BASE_API_URL } from '../../../../lib/constant';

const Dashboard = () => {
    const [result, setresult] = useState("");
    const [username, setusername] = useState("");
    useEffect(() => {
        let fetchdata = async () => {
            if (!BASE_API_URL) {
                return null
            }
            let res = await fetch(`${BASE_API_URL}/api/post`, { cache: "no-cache" });
            res = await res.json();
            setresult(res.data)
        }
        fetchdata();
        setusername(localStorage.getItem("name"))
        
    }, []);

    return (
        <>
            <div className=''><Navbar name = {username}/></div>
            {
                result.length != 0 ?
                    result.map((e, i) => {
                        return <div key={i}>
                            <Pframe _id={e._id} title={e.title} post={e.post} field={e.field} img={e.img} username = {e.username} email = {e.useremail}/>
                        </div>
                    }) :
                    <div className='p-10'>
                        <h3>Loading...<br />
                            No post yet!<br />
                            <span>
                                <Link className='text-blue-600 underline' href="/createpost">Create Post</Link>
                            </span> and upload</h3>
                    </div>

            }


        </>
    );
}

export default Dashboard;