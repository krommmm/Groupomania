import React from "react";
import { useState, useEffect } from "react";
import CommentsForm from "./CommentsForm";
import CommentsCard from "./CommentsCard";

export default function Comments(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState([]);


  useEffect(() => {
    props.updatePost(post);
  
  }, [post]);

  //const [Commentaires, setCommentaires] = useState([props.CommentaireDuPost]);

  return isOpen ? (
    <>

      <div className="inline" >
      <i className="fa-solid fa-message" style={{color:"#b98484"}} onClick={() => setIsOpen(false)}/>
     
      </div>
      <br />
      <br/>
      <div className="ligne-séparation"></div>
      <div className="comment-mega-container">
      <CommentsCard
        postData={props.postData}
        postUsers={props.postUsers}
        updateState={(post) => setPost(post)} 
      />
  
        <CommentsForm
        postData={props.postData}
        updateState={(post) => setPost(post)}
      />
 
      </div>
    </>
  ) : (
    <>
    <div  className="inline" >
    <i className="fa-solid fa-message" style={{color:"#fd2d01"}} onClick={() => setIsOpen(true)} /> 

    </div>
    <br/>
    <br/>
    <div className="ligne-séparation"></div>
    </>
  );
}
