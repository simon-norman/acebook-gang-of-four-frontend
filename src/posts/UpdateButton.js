import React, { Component } from 'react';
import UpdatePost from './UpdatePost'
class UpdateButton extends Component {
  constructor(props){
    super(props);
    this.state = { showUpdate: false,
    }
    this.toggleUpdate = this.toggleUpdate.bind(this)
  }

  render() {
   
    if(this.can_update()) {
      return (
        <div>
          <button onClick={this.toggleUpdate} className="btn btn-outline-primary">Update</button>
        {this.state.showUpdate ? 
          <UpdatePost postid={this.props.postid} updateMessage={this.props.updateMessage} toggleUpdate={this.toggleUpdate}/>
        : null  }
        </div>
        
      )
    } else {
      return (null);
    }
  }

  toggleUpdate() {
   this.setState({showUpdate: !this.state.showUpdate})
  }

  can_update(){
   return (this.belongsTo() && this.created_within_last())
  }

  belongsTo(){
    const user = JSON.parse(sessionStorage.user);
      return (user.uid === this.props.email)
  }

  created_within_last(){
    const elapsed_time = ((new Date() - (new Date(this.props.created_at)))/ (60000))
    return (elapsed_time < (10))
  }
};

export default UpdateButton;