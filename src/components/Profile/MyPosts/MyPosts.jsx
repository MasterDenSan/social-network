import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../Utilits/Validators";
import {TextArea} from "../../ItemsControl/FormControl/FormControl";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post massege={p.massege} likeCounter={p.likeCounter}/>)

    let addPost = (values) => {
        props.addPost(values.postBody)
    }
    return (<div>
            <PostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    )
}
//обьявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)


//Создание формы с помощью redux-form
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"add new post"} component={TextArea} name={"postBody"}
                       validate={[required, maxLength50, minLength8]}></Field>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: "postForm"})(PostForm)

export default MyPosts;