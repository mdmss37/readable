import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostDetail from '../components/post_detail'
import { connect }  from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchAllPosts, fetchPostsByCategory, createPost, upvotePost, downvotePost } from '../actions/postActions'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }
  componentDidMount() {
    console.log("componentDidMount from PostList", this.props)
    this.props.fetchAllPosts()
  }

  render() {
    console.log("From PostList", this.props.posts)
    if(!this.props.posts) {
      return <div>Loading...</div>
    }

    return (
      <div className="post-list">
        {this.props.posts.map(post => (
          <div>{post.id}</div>
          ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  console.log("state from PostList", this.state)
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, {fetchAllPosts})(PostList)
