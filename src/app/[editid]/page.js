/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';
import { BASE_API_URL } from '../../../lib/constant';


const Editpost = ({ params }) => {
    const router = useRouter();
    const [title, settitle] = useState("");
    const [post, setPost] = useState("");
    const [field, setfield] = useState("");
    
    let getdata = async () => {
        let uid = params.editid;

        let res = await fetch(`${BASE_API_URL}/api/post/` + uid);
        res = await res.json();

        let dets = await res.data;
        settitle(dets.title)
        setPost(dets.post)
        setfield(dets.field)
    }

    useEffect(() => {
        getdata();
    }, []);

    let updatehandler = async () => {
        let uid = params.editid;

        try {
            let res = await fetch(`${BASE_API_URL}/api/post/` + uid, {
                method: "PUT",
                body: JSON.stringify({ title, post, field })
            })

            res = await res.json();
            if (res.success) {
                toast.success('Post updated Successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                setTimeout(() => {
                    router.push(`/dashboard/biraj`)
                    router.refresh()
                }, 2000);
            }
        } catch (error) {

            console.log("Please check", error)
            toast.error('Something error, Please check again', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }



    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <label>Title</label>
                <input
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value)
                    }}
                    type="text" placeholder='Title' />

                <label>Description</label>
                <input
                    value={post}
                    onChange={(e) => {
                        setPost(e.target.value)
                    }}
                    type="text" placeholder='Write a Description' />



                <label>Select the field</label>
                <select
                    value={field}
                    onChange={(e) => {
                        setfield(e.target.value)
                    }}
                    className='px-3 py-3 border'>
                    <option>None</option>
                    <option>Artificial intelligence</option>
                    <option>Machine Learning</option>
                    <option>Block Chain</option>
                    <option>Software Development</option>
                    <option>Web Development</option>
                    <option>Cyber Security</option>
                    <option>Robotics</option>
                    <option> Data science</option>
                    <option>Full stack</option>
                    <option>Virtual reality</option>
                    <option>Edge computing</option>
                    <option>Quantum computing</option>
                    <option>DevSecOps</option>
                    <option>Augmented reality</option>

                </select>

                <button
                    onClick={updatehandler}
                    type='submit' className="px-3 py-2 text-xl font-semibold text-white rounded-md shadow-md w-[50%] mx-auto bg-blue-400">Update</button>

            </div>
        </>
    );
}

export default Editpost;