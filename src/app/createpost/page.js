"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../../../components/Navbar';
import { BASE_API_URL } from '../../../lib/constant';



const Createposst = () => {
    let router = useRouter();



    const [title, settitle] = useState("");
    const [post, setPost] = useState("");
    const [field, setfield] = useState("");
    const [image, setimage] = useState("");
    const [img, setimg] = useState("");



    let uploadimage = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.set('file', image)

        let result = await fetch("api/upload", {
            method: 'POST',
            body: data
        })
        if (result.ok) {
            alert("Image Uploaded")
        }
    }

    let submithandler = async () => {
        if (!title || !post || !field) {
            toast.error('You must fill every field', {
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
        else {
            try {
                let res = await fetch(`${BASE_API_URL}/api/post/`, {
                    method: "POST",
                    body: JSON.stringify({ title, post, field, img })
                })
                res = await res.json();
                if (res.success) {
                    toast.success('Post Uploaded Successfully', {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                    setTimeout(() => {
                        router.push("/dashboard/biraj")
                        router.refresh();

                    }, 1500);

                }
            } catch (error) {
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
                console.log(error);
            }
        }
    }
    return (
        <>
            {
                <div>
                    <Navbar />
                </div>
            }
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


                <div className='flex flex-col gap-3'>
                    <label>Select a image</label>
                    <div className='flex items-center justify-between'>
                        <input
                            onChange={(e) => {
                                setimage(e.target.files[0])
                                setimg(e.target.files[0].name)
                            }}
                            className='w-[90%]'
                            type="file" name='file' />

                        <input
                            value="Save"
                            type='submit'
                            onClick={uploadimage}
                            className='btn cursor-pointer' />

                    </div>
                </div>

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
                    onClick={submithandler}
                    type='submit' className="px-3 py-2 text-xl font-semibold text-white rounded-md shadow-md w-[50%] mx-auto bg-blue-400">
                    Post
                </button>

            </div>
        </>
    );
}

export default Createposst;