import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    let onChangeText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }


    return <MyPosts addPost={addPost}
                    updateNewPost={onChangeText}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}


export default MyPostsContainer;