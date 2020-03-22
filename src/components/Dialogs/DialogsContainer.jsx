import {addDialogMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

