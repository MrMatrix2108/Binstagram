// Post.js

import React, { useState } from 'react';
import './Post.css';

const Post = ({postId, imageSrc, caption, likes}) => {

  const [likeCount, setLikeCount] = useState(likes);

  const processLike = async () => {
    try {
      const response = await fetch('api/posts/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: postId }),
      });

      if (response.ok) {
        const updatedPost = await response.json();
        setLikeCount(updatedPost.likes);
      } else {
        console.error('Error:', response.statusText);
        console.log('ID', postId);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="post">
      <img src={imageSrc} alt="Post"/>
      <div 
      className="caption">{caption}
      </div>
      <div className="actions">
      <button onClick={processLike}>
          <i className="far fa-heart"></i> {/* Heart icon */}
          <span>{likeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;


// <div className="post">  
  //   <div className="profile-info">
  //       <div className="profile-pic">
  //       <img src={profileImg} alt="Profile" />
  //       </div>
  //       <div className="username">{username}</div>
  //     </div>
  //     <img src={imageSrc} alt="Post" />
  //     <div className="actions">
  //       <button onClick={handleLike}>
  //         <i className="far fa-heart"></i> {/* Heart icon */}
  //         <span>{likeCount}</span>
  //       </button>
  //       <button onClick = {handleComment}>
  //         <i className="far fa-comment"></i> {/* Comment icon */}
  //         <span>{commentCount}</span>
  //       </button>
  //     </div>
  //   </div>

