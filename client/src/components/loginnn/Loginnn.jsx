import React, { useState } from 'react'
import axios from 'axios'


function Login() {

  const[email,setemail]=useState("")
  const [password, setPassword] = useState("")
  const submit=async()=>{
    console.log(email+" "+ password)
    try {

      axios.post(
      "https://youtube-backend-yci0.onrender.com/v1/users/login",
      {email,password}
      )
      .then(res => {
         console.log(res);
         console.log(res.data);
         console.log(res.data.data.user._id);
         console.log(res.data.data.user.fullName);
         console.log(res.data.data.user.email);
         console.log(res.data.data.user.username);
      })
      .catch(e => {
        console.log(e.response.data);
        
      })
      
    } catch (error) {

        console.log("Error to call axios post login api");
      
    }

  }

  return (
    <>   
         <div className = "bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute ">
        <div id="myDIV" >
            <div className = "w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                <div className = "w-full sm:w-1/2 lg:2/3 px-6 bg-gray-900 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                    <div className = "w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                        Sign In
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-xs font-medium text-white">Your email</label>
                        <input type="email" id="email" onChange={(e)=>{setemail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@neurolink.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-xs font-medium text-white">Your password</label>
                        <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className = "flex flex-row justify-between">
                        <button className = "text-white text-sm md:text-md ">Forgot Password</button>
                        <button className = "text-[#00FF00] text-sm md:text-md">Signup</button>
                    </div>
                    <button onClick={submit} className = "mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#00FF00] py-2 rounded-md">
                        Login
                    </button>
        
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
