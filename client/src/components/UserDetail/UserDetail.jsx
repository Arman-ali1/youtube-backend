import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import { fff } from '../Login/Login.jsx';
// import { useLocation } from 'react-router-dom';



export default function UserDetail() {
    // const location = useLocation();
    // const userData = location.state?.userData || {};
    // console.log(userData);
    // console.log(userData.avatar);
    // let image="https://pixy.org/src/31/315160.png"
    const[fullName,setFullName]=useState("demo");
    const[email,setEmail]=useState("demo@gmail.com");
    const[username,setUsername]=useState("demo");
    const[avatar,setAvatar]=useState("https://pixy.org/src/31/315160.png")
    // image=userData.avatar;
    // if(!image){
    //     image="https://pixy.org/src/31/315160.png"
    // }


    async function getUserChannelProfile(){

        try {
            axios.get(
                "http://localhost:8000/api/v1/users/current-user",
            )
            .then(res => {  
                console.log(res);
                // setFullName(res.data.data.user.fullName),
                // setEmail(res.data.data.user.email),
                // setUsername(res.data.data.user.username),
                // setAvatar(res.data.data.user.avatar),

            })
            .catch((e)=>{
                console.log(e.response.data);
            })
        } catch (error) {
            console.log("error while getting information of getUserChannelProfile");
            
        }


    }

    getUserChannelProfile();

  return (
   
    <>
    <div className='flex justify-between flex-row '>
    <div className=' w-1/2 flex justify-between items-center border border-gray-300 rounded-lg ' >
    <img src={avatar} alt="User" className='rounded-full '/>
    </div>
    <div className="w-1/2  sm:p-0 border border-gray-300 flex  items-center flex-col">
    <h1 className=" w-full px-4 py-2.5 text-sm font-medium text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg flex justify-center items-center">User Detail</h1>
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {fullName}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {email}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Username
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {username}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br/>
                     Anytown, IND 12123
                </dd>
            </div>
        </dl>
    </div>
    </div>
    </>
  )
}


