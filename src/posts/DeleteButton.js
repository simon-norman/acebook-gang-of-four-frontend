import React, { Component } from 'react';
import postApi from './postApi';

class DeleteButton extends Component {
  render() {
    if(this.canDelete()) {
      return (
        <form onSubmit={this.deletePost}>
          <button className="btn btn-outline-primary">Delete</button>
        </form>
      )
    } else {
      return ('');
    }
  }

  deletePost = (event) => {
    event.preventDefault()
    const that = this

    postApi.deletePost({ id: this.props.postId }, this.props.getPosts)
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