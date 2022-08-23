import React from "react";


type ProfileStatusT = {
    userStatus: string
    updateUserStatus?: (status: string) => void
}
type stateT = {
    edidMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusT> {
    state: stateT = {
        edidMode: false,
        status: this.props.userStatus,
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
        // @ts-ignore
        this.props.updateUserStatus(this.state.status)
    }
    onCangeUserStatus = (e:any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
componentDidUpdate(prevProps: ProfileStatusT, prevState: stateT) {
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
                    <input autoFocus={true}
                           onBlur={this.deactiveteEditMode}
                           value={this.state.status}
                           onChange={this.onCangeUserStatus}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;