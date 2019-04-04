import React, { Component } from 'react';

class DeleteButton extends Component {
  render() {
    if(this.canDelete()) {
      return (
        <div>
          <button className="btn btn-outline-primary">Delete</button>
        </div>
      )
    } else {
      return ('');
    }
  }

  canDelete() {
    return (this.belongsTo())
  }

  belongsTo() {
    const user = JSON.parse(sessionStorage.user);
    return (user.uid === this.props.email)
  }
};

export default DeleteButton;