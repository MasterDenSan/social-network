import {addDialogMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        friends: state.navigation.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDialogMessage: () => {
            dispatch(addDialogMessageActionCreator())
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;