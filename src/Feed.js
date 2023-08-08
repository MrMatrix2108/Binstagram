import React from 'react';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  const posts = [
    {
      id: 1,
      username: "evan_teague",
      pImg: 'https://g2.img-dpreview.com/81C81CB44922409EA3C99FA3E42369CD.jpg',
      imageSrc: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      likes: 15,
      comments: 7,
    },
    {
        id: 2,
        username: "jishen_harilal",
        pImg: 'https://g1.img-dpreview.com/FF9CE2684532407EA326F7E9562EB91A.jpg',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        likes: 10,
        comments: 5,
      },
    {
        id: 3,
        username: "sancho.reels",
        pImg: 'https://anettemossbacher.com/wp-content/media/lioness-staring-intensely-into-camera-print-305x305.jpg',
        imageSrc: 'https://images.unsplash.com/photo-1573160059602-81357cdd480f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        likes: 8,
        comments: 2,
      },
      {
        id: 4,
        username: "jishen_harilal",
        pImg: 'https://g1.img-dpreview.com/FF9CE2684532407EA326F7E9562EB91A.jpg',
        imageSrc: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/107/posts/26488/final_image/41-space-scrolling-background850-2.jpg',
        likes: 4,
        comments: 3,
      },
      {
        id: 5,
        username: "jishen_harilal",
        pImg: 'https://g1.img-dpreview.com/FF9CE2684532407EA326F7E9562EB91A.jpg',
        imageSrc: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
        likes: 4,
        comments: 3,
      },
  ];

  return (
    <div className="feed">
      
      {posts.map((post) => (  
        <Post
          key={post.id}
          username={post.username}
          profileImg={post.pImg}
          imageSrc={post.imageSrc}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Feed;
