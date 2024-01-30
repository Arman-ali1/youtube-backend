import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

  // const userData = {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  //   // Additional user details
  // };

  const navigate = useNavigate();
  const[email,setemail]=useState("")
  const [password, setPassword] = useState("")
  // axios.defaults.withCredentials=true;
  const submit=async()=>{
    console.log(email+" "+ password)
    try {

      axios.post(
      "/api/v1/users/login",
      {email,password}
      )
      .then(res => {
         console.log(res);
        //  console.log(res.data);
        //  console.log(res.data.data.user._id);
        //  console.log(res.data.data.user.fullName);
        //  console.log(res.data.data.user.email);
        //  console.log(res.data.data.user.username);
        //   console.log(res.data.data.user.avatar);
        //  const userData={
        //     id:res.data.data.user._id,
        //     fullName:res.data.data.user.fullName,
        //     email:res.data.data.user.email,
        //     username:res.data.data.user.username,
        //     avatar:res.data.data.user.avatar
        //  }
        //  navigate('/UserDetail',{ state: { userData } });
        alert("User Login Successfully");
        const UserStatus={
          lgn:"Log Out"
        }
          navigate('/UserData',{ state: { UserStatus } });

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
         <div className="max-w-md mx-auto">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center text-2xl mb-4 font-bold">
            Sign In
            <div className="border-b-2 border-gray-300"></div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Your email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={(e) => { setemail(e.target.value) }} />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Your password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className="flex flex-row justify-between mb-4">
            <button className="text-blue-500 text-sm md:text-md focus:outline-none">Forgot Password</button>
            <button className="text-green-500 text-sm md:text-md focus:outline-none">Signup</button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={submit}>
            Login
        </button>
    </div>
</div>

    </>
  )
}

export default Login
