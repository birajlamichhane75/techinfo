"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { Russo_One } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { TbLogout2 } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";

const russo = Russo_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})
const Navbar = ({ name }) => {
    let pathname = usePathname()
    return (
        <>
            <div className="flex items-center justify-between py-5 border-b border-slate-700">
                <div className=''>
                    {
                        pathname != '/' && pathname !=`/dashboard/${name}`?
                        <Link href={`../dashboard/biraj`}><IoArrowBackCircle className='text-4xl'/></Link>:
                        <></>
                    }
                    <h1 className={`${russo.className} text-blue-950`}>TechInfo</h1>
                    <p>Latest news about <br></br>
                        technology</p>
                </div>

                <div className='flex items-center gap-4'>
                    <Link href='/createpost'>
                        {
                            pathname != "/" && pathname != "/signin" ?
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <IoIosAddCircle className='text-2xl' />
                                    <p>Create Post</p>
                                </div>:
                                <></>
                        }
                    </Link>
                    {
                        name ? <><h1 className={`${russo.className} text-black capitalize`}>{name}</h1> 
                        <Link href='/signin'><TbLogout2 className='text-2xl'/></Link>
                        </>:
                            <Link href='/signin'>
                                <button className='btn'>Sign In</button>
                            </Link>
                    }



                </div>
            </div>
        </>
    );
}

export default Navbar;