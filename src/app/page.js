import React from 'react';
import Pframe from '../../components/Pframe';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const Home = async () => {
    let res = await fetch("http://localhost:3000/api/post", { cache: "no-cache" });
    res = await res.json();
    let result = res.data;


    return (
        <>
            <div>
                <Navbar />
            </div>
            {
                result.length != 0?
                result.map((e, i) => {
                    return <div key={i}>
                        <Pframe _id={e._id} title={e.title} post={e.post} field={e.field} img = {e.img} />
                    </div>
                }):
                <div className='p-10'>
                    <h3>No post yet!<br /><span><Link className ='text-blue-600 underline' href="/signin">SignIn</Link></span> and upload post</h3>
                </div>

            }


        </>
    );
}

export default Home;