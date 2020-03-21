const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Victor"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Jon"},
        {id: 4, name: "Tony"},
    ],
    masseges: [
        {id: 1, massege: "Yo"},
        {id: 2, massege: "My first massage Yo."},
        {id: 3, massege: "Yo Yo Yo"},
        {id: 4, massege: "Hi mannnnn"}
    ],
    newDilogText: ""
};


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newDilogText: action.newText
            }
        case ADD_DIALOG_MESSAGE:
            return {
                ...state,
                masseges: [...state.masseges, {id: state.masseges.length + 1, massege: state.newDilogText,}],
                newDilogText: ""
            }
        default:
            return state
    }
}


export const addDialogMessageActionCreator = () =>
    ({type: ADD_DIALOG_MESSAGE});
export const updateNewMessageActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE, newText: body});

export default dialogReducer;