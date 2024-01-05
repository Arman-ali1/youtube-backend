import React from 'react'
import axios from 'axios'


function UserData() {

   async function getdata () {
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

  return (
    <div>
      <button onClick={getdata} className='w-full px-4 py-2.5 text-sm font-medium text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg flex justify-center items-center'>get User</button>
    </div>
  )
}

export default UserData
