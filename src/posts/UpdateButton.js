import React, { Component } from 'react';

class UpdateButton extends Component {

  render() {
    const user = JSON.parse(sessionStorage.user);
    console.log("UID: " + user.uid);
    console.log("UB PROPS:" + JSON.stringify(this.props));
    if(user.uid === this.props.email) {
      return (
        <div>
          <button className="btn btn-outline-primary">Update</button>
        </div>
      )
    } else {
      return (null);
    }
  }
}

export default UpdateButton;