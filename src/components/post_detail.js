import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { formatTimestamp, guid }  from '../utils/helpers'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchCommentsById } from '../actions/commentActions'
import { fetchAllPosts, fetchPostsByCategory, createPost, votePost, downvotePost } from '../actions/postActions'

class PostDetail extends Component {
  componentDidMount() {
    const {post, match, fetchAllPosts, fetchPostComments } = this.props
    if(!post) {
      fetchAllPosts()
    }
    fetchCommentsById(match.params.postId)
  }

  render() {
    const {post, comments} = this.props

    return(
      <div>
        {post && (
        <div className="post" key={post.id}>
          <div className="post-votes">
            <FaCaretUp size={30} className="caret-up" onClick={() => {
              votePost(post, "upVote")
              this.props.fetchAllPosts()
            }}/>
            <p>{post.voteScore}</p>
            <FaCaretDown size={30} className="caret-down" onClick={() => {
              votePost(post, "downVote")
              this.props.fetchAllPosts()
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
      )}
      </div>

    )
  }
}

function mapStateToProps({ posts, categoryReducer, commentsReducer }, ownProps) {
  console.log("ownProps", ownProps)
  return {
    post: _.find(posts, {id: /*ownProps.match.params.postId ? ownProps.match.params.postId :*/ ownProps.postId }),
    comments: commentsReducer.comments
  }
}

export default connect(mapStateToProps, {fetchAllPosts, fetchCommentsById})(PostDetail)




