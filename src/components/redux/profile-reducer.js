const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
    posts: [
        {id: 1, massege: "Hi meeen", likeCounter: 55},
        {id: 2, massege: "My first post", likeCounter: 16}
    ],
    newPostText: "It-kamasutra.com"
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                massege: state.newPostText,
                likeCounter: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () =>
    ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST, newText: text});

export default profileReducer;