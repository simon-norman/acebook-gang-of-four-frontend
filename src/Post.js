import React from 'react';

function Post(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div>{props.post.userId}</div>
        <div>{props.post.createdAt}</div>
      </div>
      <div className="card-body">
        <div>{props.post.message}</div>
      </div>
    </div>
  );
}

export default Post;