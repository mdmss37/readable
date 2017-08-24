import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { formatTimestamp, guid }  from '../utils/helpers'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchCommentsById } from '../actions/commentActions'
import { fetchAllPosts, votePost, deletePost } from '../actions/postActions'
import Comments from './comments'

class PostItem extends Component {
  componentDidMount() {
    const { post, fetchCommentsById } = this.props
    fetchCommentsById(post.id)
  }

  render() {
    const {post, comments, votePost, deletePost, fetchAllPosts} = this.props

    return(
      <div>
        {post && (
        <div className="post">
          <div className="post-votes">
            <FaCaretUp size={30} className="caret-up" onClick={() => {
              votePost(post.id, "upVote")
              fetchAllPosts()
            }}/>
            <p>{post.voteScore}</p>
            <FaCaretDown size={30} className="caret-down" onClick={() => {
              votePost(post.id, "downVote")
              fetchAllPosts()
            }}/>
          </div>
          <div className="post-description">
            <Link to={`/${post.category}/${post.id}`}>
              <div className="post-title"><h3>{post.title}</h3></div>
            </Link>
            <div className="post-body"><p>{post.body}</p></div>
          </div>
          <div className="post-detail">
            <div className="post-category"><p>Category: {post.category}</p></div>
            <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
            <div className="post-comment"><p>Number of Comments: {comments && comments ? comments.length : 0}</p></div>
          </div>
        </div>
      )}
      </div>
    )
  }
}

function mapStateToProps({ comments }, {post}) {
  // console.log("ownProps", ownProps)
  return {
    comments: comments[post.id]
  }
}

export default connect(mapStateToProps, {
                fetchAllPosts,
                fetchCommentsById,
                votePost,
                deletePost
                })(PostItem)




