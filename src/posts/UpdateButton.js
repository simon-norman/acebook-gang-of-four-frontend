import React, { Component } from 'react';
class UpdateButton extends Component {
  render() {
   
    if(this.can_update()) {
      return (
        <div>
          <button onClick={this.props.toggleUpdatePostForm} className="btn btn-outline-primary">Update</button>
        </div>
        
      )
    } else {
      return (null);
    }
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