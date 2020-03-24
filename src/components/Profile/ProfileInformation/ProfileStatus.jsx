import React from "react";


class ProfileStatus extends React.Component {
    state = {
        edidMode: false,
        status: this.props.userStatus
    }
    activeteEditMode = () => {
        this.setState({
            edidMode: true
        })
    }
    deactiveteEditMode = () => {
        this.setState({
            edidMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onCangeUserStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
componentDidUpdate(prevProps, prevState) {
        if(prevProps.userStatus !== this.props.userStatus){
        this.setState({
            status: this.props.userStatus
        })}
}

    render() {
        return (<div>
                {!this.state.edidMode &&
                <div>
                    <span onDoubleClick={this.activeteEditMode}>{this.props.userStatus || "Введите свой статус!"}</span>
                </div>
                }
                {this.state.edidMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status}
                           onChange={this.onCangeUserStatus}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;