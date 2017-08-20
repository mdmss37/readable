import React, { Component } from 'react';

class Post extends Component {
  render() {
    const {post} = this.props
    return(
      <div>{post.id}</div>
    )
  }
}

export default Post