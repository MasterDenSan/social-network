import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Store-context";


const MyPostsContainer = (props) => {



    return( <StoreContext.Consumer>
        {
        (store) => {
        let state = store.getState()

        let addPost = () => {
        let action = addPostActionCreator()
        store.dispatch(action)
    }

        let onChangeText = (text) => {
        store.dispatch(updateNewPostActionCreator(text))
    }
    return <MyPosts addPost={addPost}
                    updateNewPost={onChangeText}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>}}
    </StoreContext.Consumer>)
}


export default MyPostsContainer;