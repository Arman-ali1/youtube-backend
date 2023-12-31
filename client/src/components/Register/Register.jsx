import React  from 'react';

import axios from 'axios';
import { useState } from 'react';

export default function Register (){

    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [fullName,setFullName]=useState('');
    // const [lastName,setLastName]=useState('');
    const [avatar, setAvatar] = useState("");
    const [coverImage1, setCoverImage] = useState(null);

    const sEmail=(event)=>{
        setEmail(event.target.value);
    };
    const Username=(event)=>{
        setUsername(event.target.value);
    };
    const Pass=(event)=>{
        setPassword(event.target.value);
    };
    const FName=(event)=>{
        setFullName(event.target.value);
    };
    const handleFileChange1 =async (event) => {
        // Get the selected file from the input
        try {
            // console.log("asssssssssss",event.target.files);
            const imageur=event.target.files[0];
            // console.log("asssssssssssooooooooooooo",event.target.files[0]);
            if (event.target.files && event.target.files[0]) {
               console.log("asdfghjklasdfghjklasdfghjkl");
                setAvatar(imageur);
                
            }
        } catch (error) {
            console.log(error);
        }
        console.log("sdfghjkljhgfdsdfghjkjhgfdsfghjhgfdsdfghjlllllllllllllllllllllllll",avatar);
      };
      const handleFileChange2 = async (event) => {
        // Get the selected file from the input
        try {
            const file =event.target.files[0];
            setCoverImage(file);
            // console.log(coverImage);
        } catch (error) {
            console.log("error in handleFileChange2 catch");
        }
        console.log("filllllllllllllllllllllllllllllllll",coverImage1);
      };
    
    async function submit(e){
        console.log("Start submitting ");
        e.preventDefault();
        // console.log("arrrrrrrrmammmmmmmmmannnnnn",e.target);
        console.log("avatarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+avatar);
        console.log("coverImage"+ coverImage1);
        try{
            const formData = new FormData();
            formData.append('avatar', avatar);
            formData.append('coverImage', coverImage1);
            formData.append('username', username);
            formData.append('email', email);
            formData.append('fullName', fullName);
            formData.append('password', password);

            console.log("Start submitting22 ");
            console.log("image pattttttttttthhhh",avatar);
            console.log(formData);
            await axios.post("http://localhost:8000/api/v1/users/register",formData,{
                username,email,fullName,password
            }).then(res=>{
                console.log("responce  "+res.data);
            }).catch(e=>{
                console.log(e);
            })
        }
        catch{
            console.log("error occurs in try section");
        }
       
    console.log("end Submitting");
    }
// console.log(email);
// console.log(password);
// console.log(repeatPassword);
// console.log(firstName);
// console.log(lastName);
// console.log(phone);
// console.log(company);

    return (
        <>
    <div className="max-w-md mx-auto">
        <div className="text-center text-2xl mb-4 font-bold">
            Sign In
            <div className="border-b-2 border-gray-300"></div>
        </div>
    <form onSubmit={submit} className="space-y-6">
        <div className="relative">
            <input type="text" onChange={sEmail} className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
            <label className="input-label">Email address</label>
        </div>
        <div className="relative">
            <input type="text" onChange={Username} className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
            <label className="input-label">username</label>
        </div>
        <div className="relative">
            <input type="text" onChange={Pass} className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
            <label className="input-label">password</label>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div className="relative">
                <input type="text" onChange={FName} className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
                <label className="input-label">Full name</label>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div className="relative">
                <input type="file" onChange={handleFileChange1} accept="image/*" className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
                <label className="input-label">Avatar image</label>
            </div>
            <div className="relative">
                <input type="file" onChange={handleFileChange2} accept="image/*" className="input-field block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" />
                {/* <img alt="preview image" src={coverImage}/>//to check image */}
                <label className="input-label">Cover Image </label>
            </div>
        </div>
        <button type="submit" className="submit-button block w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg">Submit</button>
    </form>
</div>


        </>
    );
}
