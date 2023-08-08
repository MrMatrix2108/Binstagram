// Post.js

import React, { useState } from 'react';
import './Post.css';

const Post = ({ username, profileImg ,imageSrc, likes, comments }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <div className="post">  
    <div className="profile-info">
        <div className="profile-pic">
        <img src={profileImg} alt="Profile" />
        </div>
        <div className="username">{username}</div>
      </div>
      <img src={imageSrc} alt="Post" />
      <div className="actions">
        <button onClick={handleLike}>
          <i className="far fa-heart"></i> {/* Heart icon */}
          <span>{likeCount}</span>
        </button>
        <button onClick = {handleComment}>
          <i className="far fa-comment"></i> {/* Comment icon */}
          <span>{commentCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
