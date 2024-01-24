import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'
import Video from './Video.jsx';
function VideoCard() {
    const notearr = [
        {_id:"1", title: "Shivam", content: "note taking app" ,featuredImage:"https://tse2.mm.bing.net/th?id=OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK&pid=Api&P=0&h=220"},
        {_id:"2", title: "Arman", content: "Book taking app",featuredImage:"http://thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg" },
        {_id:"3", title: "Anurag", content: "Book taking app",featuredImage:"https://tse1.mm.bing.net/th?id=OIP.NN9tEJUlbKgXErEMpMF5qQHaE8&pid=Api&P=0&h=220" },
        {_id:"4", title: "Raja", content: "Book taking app",featuredImage:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Download-Wildlife-Image.jpg" },
        {_id:"5", title: "Nelesh", content: "Book taking app",featuredImage:"https://tse3.mm.bing.net/th?id=OIP.MITpGupL_zlu92PU8lACygHaE8&pid=Api&P=0&h=220" },
        {_id:"6", title: "Hash", content: "Book taking app",featuredImage:"https://tse3.mm.bing.net/th?id=OIP.KaSkvQ96AOBNAUdfVgWtcAHaE8&pid=Api&P=0&h=220" },
        {_id:"7", title: "Prabhakar", content: "Book taking app",featuredImage:"https://tse1.mm.bing.net/th?id=OIP.vNpR-4DYMRCXEEpfrAzLXwHaE8&pid=Api&P=0&h=220" },
      ];
    // let featuredImage=''
    // const title="asdf"
    
  return (
    // <Link >
        <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div >
        {notearr.map((note) => (
          <div key={note._id}>
            <Video  {...note} />
            
          </div>
        ))}
      </div>
        </div>
    //{/* </Link> */}
  )
}


export default VideoCard