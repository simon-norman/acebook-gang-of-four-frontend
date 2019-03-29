import React from 'react';

function Post(props) {
  return (
    <div className="card" style={{backgroundColor: '#20C997', marginBottom: '20px'}}>
      <div className="card-header" style={{color: 'white'}}>
        <div>{props.post.userId}</div>
        <div>{props.post.createdAt}</div>
      </div>
      <div className="card-body" style={{backgroundColor: 'white'}}>
        <div>{props.post.message}</div>
      </div>
    </div>
  );
}

export default Post;