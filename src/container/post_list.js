import React, { Component } from 'react';
import Post from '../components/post'
import { connect }  from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchAllPosts, fetchPostsByCategory, createPost, upvotePost, downvotePost } from '../actions/postActions'

class PostList extends Component {
  componentDidMount() {
    fetchAllPosts()(this.props.dispatch)
  }

  render() {
    console.log("From PostList",this.props.posts)
    if(!this.props.posts) {
      return <div>Loading...</div>
    }

    return (
      <div className="post-list">
        {this.props.posts.map((post) => (
          <Post post={post}/>
      ))}
      </div>
    )
  }
}

function mapStateToProps({ postsReducer }) {
  console.log("state from PostList", this.state)
  return {
    posts: postsReducer.posts,
  }
}

export default withRouter(connect(mapStateToProps)(PostList))
