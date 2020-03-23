import React from "react";


class ProfileStatus extends React.Component {
    state = {
        edidMode: false
    }
    activeteEditMode(){
        this.setState({
            edidMode: true
        })
    }
    deactiveteEditMode(){
        this.setState({
            edidMode: false
        })
    }

    render() {
        return (<div>
                {!this.state.edidMode &&
                <div>
                    <span onDoubleClick={this.activeteEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.edidMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactiveteEditMode.bind(this)}  value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;