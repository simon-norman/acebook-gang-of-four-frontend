import React from 'react';

function Post(props) {
  return (
    <div className="card">
      <div>{props.post.userId}</div>
      <div>{props.post.createdAt}</div>
      <div>{props.post.message}</div>
    </div>
  );
}

export default Post;