import React from 'react';
// import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, massege: "Hi meeen", likeCounter: 55},
    {id: 2, massege: "My first post", likeCounter: 16}
  ]

  let postsElements = postsData.map(p => <Post massege={p.massege} likeCounter={p.likeCounter} />)

  return (<div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button>Add Post</button>
    </div>
    <div>
      <button>Remove</button>
    </div>
      { postsElements }
  </div>
  );
}



export default MyPosts;