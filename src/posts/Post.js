import React from 'react';

function Post(props) {
  return (
    <div className="card" id={props.post.id}>
      <div className="card-header">
        <div>{props.post.user.email}</div>
        <div>{props.post.created_at}</div>
      </div>
      <div className="card-body">
        <div>{props.post.message}</div>
      </div>
    </div>
  );
}

export default Post;