"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { Russo_One } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { TbLogout2 } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const russo = Russo_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})
const Navbar = ({ name }) => {
    const dropref = useRef()
    let pathname = usePathname()


    let dropdown = () => {
        if (dropref.current.style.display === "flex") {
            dropref.current.style.display = "none";
           
        } else {
            dropref.current.style.display = "flex";
        }
    }


    return (
        <>
            <div className="flex items-center justify-between py-5 border-b border-slate-700">
                <div className=''>
                    {
                        pathname != '/' && pathname != `/dashboard/${name}` ?
                            <Link href={`../dashboard/biraj`}><IoArrowBackCircle className='text-4xl' /></Link> :
                            <></>
                    }
                    <h1 className={`${russo.className} text-blue-950`}>TechInfo</h1>
                    <p>Latest news about <br></br>
                        technology</p>
                </div>

                <div className='flex items-center md:gap-4 md:flex-row flex-col relative'>
                    <Link href='/createpost'>
                        {
                            pathname != "/" && pathname != "/signin" ?
                                <div className='md:flex items-center gap-2 cursor-pointer hidden'>
                                    <IoIosAddCircle className='text-2xl' />
                                    <p>Create Post</p>
                                </div> :
                                <></>
                        }
                    </Link>
                    {
                        name ? <><h1 className={`${russo.className} text-black capitalize`}>{name}</h1>
                            <Link href='/signin' className='md:block hidden'><TbLogout2 className='text-2xl' /></Link>
                        </> :
                            <Link href='/signin'>
                                <button className='btn'>Sign In</button>
                            </Link>
                    }
                    {pathname != "/" && pathname != "/signin" && pathname != "/createpost"  ? 
                    <IoMdArrowDropdown className='text-2xl block md:hidden mt-3' onClick={dropdown} /> : <></>}

                    <div ref={dropref} className="py-4 px-4 w-44 border-2 shadow-md absolute top-[100%] right-0 bg-white z-10 flex-col gap-5 hidden">

                        <Link href = '/createpost'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <IoIosAddCircle className='text-2xl' />
                            <p className='text-lg'>Create Post</p>
                        </div>
                        </Link>

                        <Link href='/signin' className='flex items-center gap-2 cursor-pointer'><TbLogout2 className='text-lg' /><p className='text-xl'>Sign Out</p></Link>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Navbar;