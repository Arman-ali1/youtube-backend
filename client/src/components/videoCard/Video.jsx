import React, { useState } from "react";
import PropTypes from "prop-types";

const notecss = {
  "boxSizing": " border-box",
  "minWidth": "300px",
  "minHeight": "300px",
  background: "rgba(217, 217, 217, 0.58)",
  border: "2px solid white",
  "boxShadow": "12px 17px 51px #00000",
  "backdropFilter": " blur(6px)",
  "borderRadius": "17px",
  "textAlign": "center",
  "cursor": "pointer",
  "transition": " all 0.5s",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  " userSelect": "none",
  " fontWeight": "bolder",
  "color": "black",
  "margin": "10px",
};

const txtarea={
  "border": "2px solid #0077ff",
  "borderRadius": "6px",
  "readOnly" :"true"
}
const editTxtarea={
  "border": "2px solid red",
  "borderRadius": "6px",
}

function Video({_id,title ,content,featuredImage}) {
 
  const noteId = _id;
  const [id,setId] = useState(noteId);
  const [noteAuthor,setNoteAuthor] = useState();
  const [noteTitle,setNoteTitle] = useState(title);
  const [contentText,setContentText] = useState(content);
  const [update,setUpdate] = useState(true);

  return (
    <>
      <div>
        <div style={notecss}>
          <div >
            <h3 style={{color:"blue", "fontSize":"30px"}} className="title">{title}</h3>
            
          </div>
        </div>
          <div style={{"display" :"flex","justifyContent": "space-between","minWidth": "300px","cursor":"pointer", "padding":"3px 10px"}}>
            <img src={featuredImage}   alt="delete" />
            
          </div>
      </div>
    </>
  );
}

export default Video;