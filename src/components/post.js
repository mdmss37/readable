import React, { Component } from 'react';
import { connect }  from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { formatTimestamp, guid }  from '../utils/helpers'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchCommentsById } from '../actions/commentActions'
import { fetchAllPosts, fetchPostsByCategory, createPost, upvotePost, downvotePost } from '../actions/postActions'

class Post extends Component {
  componentDidMount() {
    fetchCommentsById(this.props.post)(this.props.dispatch)
  }

  render() {
    const {post, comments} = this.props
    return(
      <div className="post" key={post.id}>
        <div className="post-votes">
          <FaCaretUp size={30} className="caret-up" onClick={() => {
            upvotePost(post)
            fetchAllPosts()(this.props.dispatch)
          }}/>
          <p>{post.voteScore}</p>
          <FaCaretDown size={30} className="caret-down" onClick={() => {
            downvotePost(post)
            fetchAllPosts()(this.props.dispatch)
          }}/>
        </div>
        <div className="post-description">
          <div className="post-title"><h3>{post.title}</h3></div>
          <div className="post-body"><p>{post.body}</p></div>
        </div>
        <div className="post-detail">
          <div className="post-category"><p>Category: {post.category}</p></div>
          <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
          <div className="post-comment"><p>Comment# {comments && comments[post.id] ? comments[post.id].length : 0}</p></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ postsReducer, categoryReducer, commentsReducer }) {
  console.log("state", this.state)
  return {
    comments: commentsReducer.comments
  }
}

export default withRouter(connect(mapStateToProps)(Post))
