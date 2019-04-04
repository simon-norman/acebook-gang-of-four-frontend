import React, { Component } from 'react';
import UpdatePost from './UpdatePost'
class UpdateButton extends Component {

  render() {
   
    if(this.can_update()) {
      return (
        <div>
          <button onClick={this.updatePost} className="btn btn-outline-primary">Update</button>
        </div>
      )
    } else {
      return (null);
    }
  }

  updatePost() {
    return UpdatePost(this.props.updateMessage)
  }

  can_update(){
    console.log("BELONG: " + this.belongsTo() + "CREATED: " + this.created_within_last());
   return (this.belongsTo() && this.created_within_last())
  }

  belongsTo(){
    const user = JSON.parse(sessionStorage.user);
      return (user.uid === this.props.email)
  }

  created_within_last(){
    const elapsed_time = ((new Date() - (new Date(this.props.created_at)))/ (60000))
    console.log("TIME: " + elapsed_time);
    return (elapsed_time < (10))
  }
};

export default UpdateButton;