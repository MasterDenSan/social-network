import React, {FC} from 'react';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../Utilits/Validators";
import {TextArea} from "../../ItemsControl/FormControl/FormControls";

declare global {
    interface Window {
        props?: any
    }
}

window.props=[];

type Post = {
    id: number
    massege: string
    likeCounter: number
}

type MyPostsT = {
    posts: Post[]
    addPost: (post: string) => void
}

const MyPosts: FC<MyPostsT> = React.memo(props => {
    console.log("RENDER");
    window.props.push(props);

    let postsElements = [...props.posts].reverse().map(p => <Post key={p.id} massege={p.massege} likeCounter={p.likeCounter}/>)

    let addPost = (values: any) => {
        props.addPost(values.postBody)
    }
    return (
        <div>
            <PostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    )
});

//обьявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)


//Создание формы с помощью redux-form
const PostForm:FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"add new post"} component={TextArea} name={"postBody"}
                       validate={[required, maxLength50, minLength8]}></Field>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: "postForm"})(PostForm)

export default MyPosts;