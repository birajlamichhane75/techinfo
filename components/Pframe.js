'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { MdEdit } from "react-icons/md"
import Deletepost from './Deletepost';
import Image from 'next/image';



const Pframe = ({ _id, title, post, field, img }) => {

    let menuref = useRef();

    let displaymenu = () => {
        if (menuref.current.classList.contains("hidden")) {
            menuref.current.classList.remove("hidden");
            menuref.current.classList.add("flex");
        } else {
            menuref.current.classList.remove("flex");
            menuref.current.classList.add("hidden");
        }
    };

    return (
        <>
            <div className='flex flex-col gap-3 mb-3 border-b-2 py-4'>
                <div className="w-full flex items-center justify-between relative">
                    <h5 className='font-bold'>User_name</h5>

                    <BsThreeDots
                        onClick={displaymenu}
                        className='font-bold text-2xl cursor-pointer' />

                    <div ref={menuref} className='bg-white flex-col gap-3 px-4 py-3 shadow-xl rounded-md absolute z-10 top-full right-0 hidden'>
                        <Link href={`/${_id}`} className='flex justify-between items-start gap-3'>
                            <p>Edit</p>
                            <MdEdit />
                        </Link>
                        <Deletepost uid={_id} />


                    </div>
                </div>

                    {img ? 
                <div className='w-full min-h-80 relative'>
                    <Image src={`/${img}`} alt={title}
                     fill 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
                     className='rounded-md object-cover object-top ' />
                </div>:
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