import React, { Component } from 'react';

class UpdateButton extends Component {

  render() {
    const user = JSON.parse(sessionStorage.user);
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