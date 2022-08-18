import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {ThunkDispatch} from "redux-thunk";


const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, any>) => {
    return {
        addPost: (postBody: any) => dispatch(addPostActionCreator(postBody))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
