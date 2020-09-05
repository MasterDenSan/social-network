import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../Utilits/Validators";
import {TextArea} from "../../ItemsControl/FormControl/FormControls";

window.props=[];

const MyPosts = React.memo(props => {
    console.log("RENDER");
    window.props.push(props);

    let postsElements = [...props.posts].reverse().map(p => <Post key={p.id} massege={p.massege} likeCounter={p.likeCounter}/>)

    let addPost = (values) => {
        props.addPost(values.postBody)
    }
    return (<div>
            <PostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    )
});

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
<<<<<<< HEAD
               {/* <button>Remove</button>*/}
=======
                {/*<button>Remove</button>*/}
>>>>>>> 11ffb00bac714e46502ec2377d1dd5e237c7114b
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: "postForm"})(PostForm)

export default MyPosts;