import React, {FC} from 'react';
import s from './Post.module.css';

type PostT = {
  massege: string
  likeCounter: number
}

const Post: FC<PostT> = (props) => {
  return (
      <div className ={s.item}>
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuJ1_ed4wE8cGxLfOcW-SaUVG5F8AaETC3CpOHf6HSbPLzY9Xs"
        alt=""
    />
  <div>{props.massege}</div>
  <span>Like {props.likeCounter}</span>
  </div>
  )
}



export default Post;