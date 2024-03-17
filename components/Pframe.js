'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md"
import Deletepost from './Deletepost';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';



const Pframe = ({ _id, title, post, field, img, username, email }) => {
    const [localname, setlocalname] = useState("");
    const [localemail, setlocalemail] = useState("");

    useEffect(() => {
        setlocalemail((localStorage.getItem("email")))

    }, []);

    
    let path = usePathname();
    let { push } = useRouter()
    let menuref = useRef();
    
    let displaymenu = () => {
        if(path !== "/"){
            if (localemail !== "birajlamichhane57@gmail.com" && localemail !== email ) {
                menuref.current.style.color = "rgb(169, 169, 169)"
            }
    
            if (menuref.current.classList.contains("hidden")) {
                menuref.current.classList.remove("hidden");
                menuref.current.classList.add("flex");
            } else {
                menuref.current.classList.remove("flex");
                menuref.current.classList.add("hidden");
            }
        }
        else{
            alert("You have to sign in to access this option!")
        }


    };

    let gotoEditpage = () => {
        if (localemail == 'birajlamichhane57@gmail.com' || localemail == email ) {
            push(`/${_id}`)
        }
        else {
            alert("Only Owner of this page can access this property")
        }
    }

    return (
        <>
            <div className='flex flex-col gap-3 mb-3 border-b-2 py-4'>
                <div className="w-full flex items-center justify-between relative">
                    <div className='flex gap-1'><p>Posted by:</p><h5 className='font-bold'>
                        {
                            username ? username : "User_name"
                        }
                    </h5></div>

                    <BsThreeDots
                        onClick={displaymenu}
                        className='font-bold text-2xl cursor-pointer' />

                    <div ref={menuref} className='bg-white flex-col gap-3 px-4 py-3 shadow-xl rounded-md absolute z-10 top-full right-0 hidden'>
                        <div onClick={gotoEditpage} className='flex justify-between items-start gap-3 cursor-pointer'>
                            <p>Edit</p>
                            <MdEdit />
                        </div>
                        <Deletepost uid={_id} email = {email}/>


                    </div>
                </div>

                {img ?
                    <div className='w-full md:min-h-80 h-52 relative'>
                        <Image src={`/${img}`} alt={title}

                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                            className='rounded-md object-cover object-top ' />
                    </div> :
                    <></>
                }

                <div className="">
                    <p>{post}
                    </p>
                </div>
                <h2>{title}</h2>

                <div className='bg-slate-600 text-white font-bold w-fit px-3 py-1 rounded-md shadow-md'>{field == "None" ? "Tech" : field}</div>
            </div>
        </>
    );
}

export default Pframe;