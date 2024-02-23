import React from 'react';
import Pframe from '../../../../components/Pframe';
import { toast } from 'react-toastify';
import Navbar from '../../../../components/Navbar';
import Link from 'next/link';
import { BASE_API_URL } from '../../../../lib/constant';

const Dashboard = async ({params}) => {
    let res = await fetch(`${BASE_API_URL}/api/post/`,{cache:"no-cache"});
    res = await res.json();
    let result = res.data;

    return (
        <>
            <div className=''><Navbar name = {(params.userid).toLowerCase()}/></div>
            {
                result.length != 0?
                result.map((e, i) => {
                    return <div key={i}>
                        <Pframe _id={e._id} title={e.title} post={e.post} field={e.field} img = {e.img} />
                    </div>
                }):
                <div className='p-10'>
                    <h3>No post yet!<br /><span><Link className ='text-blue-600 underline' href="/createpost">Create Post</Link></span> and upload</h3>
                </div>

            }


        </>
    );
}

export default Dashboard;