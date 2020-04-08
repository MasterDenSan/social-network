import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, massege: "Hi meeen", likeCounter: 55},
        {id: 2, massege: "My first post", likeCounter: 16}
    ],
};
//Tests
it('check the number of posts ', () => {
    //1.test data
    let action = addPostActionCreator("it-warior");

    //2.action data
    let newState = profileReducer(state, action);
//3.expectation
    expect(newState.posts.length).toBe(3);
});

it('check the posts ', () => {
    //1.test data
    let action = addPostActionCreator("it-warior");
    //2.action data
    let newState = profileReducer(state, action);
//3.expectation
    expect(newState.posts[2].massege).toBe("it-warior");
});

it('check delete the posts ', () => {
    //1.test data
    let action = deletePost(2);
    //2.action data
    let newState = profileReducer(state, action);
//3.expectation
    expect(newState.posts.length).toBe(1);
});