import {addDialogMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {RootState} from "../../redux/redux-store";


const mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage,
        friends: state.navigation.friends,
    }
}

export default compose<any>(
    connect(mapStateToProps, {addDialogMessageActionCreator}),
    withAuthRedirect
)(Dialogs)

