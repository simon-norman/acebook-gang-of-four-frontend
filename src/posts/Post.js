import React, { Component } from 'react';
import UpdateButton from './UpdateButton'
import DeleteButton from './DeleteButton'
class Post extends Component {

  render() {
    return (
      <div className="card" id={this.props.post.id}>
        <div className="card-header">
          <div>{this.props.post.user.email}</div>
          <div>{this.props.post.created_at}</div>
        </div>
        <div className="card-body">
          <div>{this.props.post.message}</div>
        </div>
        <div>
          <UpdateButton email={this.props.post.user.email} created_at={this.props.post.created_at} />
          <DeleteButton email={this.props.post.user.email} />
        </div>
      </div>
    );
  }
}

export default Post;