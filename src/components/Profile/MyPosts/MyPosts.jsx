import React from 'react';
// import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post massege={p.massege} likeCounter={p.likeCounter}/>)


    let newPostElement = React.createRef()
    let addPost = () => props.addPost()


    let onChangeText = () => {
        let text = newPostElement.current.value
        props.updateNewPost(text)
    }


    return (<div>
            <div>
                <textarea onChange={onChangeText} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
            {postsElements}
        </div>
    );
}


export default MyPosts;