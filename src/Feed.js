import React, { useState, useEffect } from 'react';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => {
        // Update the 'posts' state with the fetched data
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          postId={post._id}
          imageSrc={post.imageSrc}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Feed;
