const ADD_DIALOG_MESSAGE = "social-Network/dialogs-reduser/ADD-DIALOG-MESSAGE";

type dialogsType = {
    id: number
    name: string
}
type massegeType = {
    id: number
    massege: string
}

type initialStateType = {
    dialogs: dialogsType[],
    masseges: massegeType[],
}

type addDialogMessageActionCreatorType = {
    type: typeof ADD_DIALOG_MESSAGE
    messageBody: string
}

let initialState: initialStateType = {
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
    ]
};


const dialogReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return {
                ...state,
                masseges: [...state.masseges, {id: state.masseges.length + 1, massege: action.messageBody,}]
            }
        default:
            return state
    }
}


export const addDialogMessageActionCreator = (messageBody: string): addDialogMessageActionCreatorType =>
    ({type: ADD_DIALOG_MESSAGE, messageBody});

export default dialogReducer;