import React from 'react';
import Post from './Post'

let posts = [
  { message: 'stuff' },
  { message: 'stuff' },
  { message: 'stuff' },
  { message: 'stuff' },
]

function Timeline() {
  return (
    <div>
       { posts.map(post => {
        return <Post message={post.message} />
      }) }
    </div>
  )
}

export default Timeline;
