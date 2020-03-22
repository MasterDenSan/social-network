import {addDialogMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        friends: state.navigation.friends,
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

let redirectAuthComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(redirectAuthComponent);

export default DialogsContainer;