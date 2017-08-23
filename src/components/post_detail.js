import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { formatTimestamp }  from '../utils/helpers'
import { Link } from 'react-router-dom'
import { fetchCommentsById } from '../actions/commentActions'
import { fetchAllPosts, votePost, deletePost } from '../actions/postActions'
import Comments from './comments'

class PostDetail extends Component {
  componentDidMount() {
    const { match, fetchAllPosts, fetchCommentsById } = this.props
    fetchAllPosts()
    console.log("fetchCommentsById", fetchCommentsById(match.params.postId))
    fetchCommentsById(match.params.postId)
  }

  onDeleteClick = () => {
    const id = this.props.match.params.postId
    console.log("onDeleteClick, id:", id)
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const {post, comments, votePost, deletePost, fetchAllPosts} = this.props

    return(
      <div>
        {post && (
        <div className="post" key={post.id}>
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
            <div className="post-title"><h3>{post.title}</h3></div>
            <div className="post-body"><p>{post.body}</p></div>
          </div>
          <div className="post-detail">
            <div className="post-category"><p>Category: {post.category}</p></div>
            <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
            <div className="post-comment"><p>Number of Comments: {comments && comments ? comments.length : 0}</p></div>
          </div>
          <div className="button-action">

            <Link to={`/post/${post.id}/edit`}>
              <button>Edit Post</button>
            </Link>

            <button>Create Comment</button>
            <button onClick={(e) => this.onDeleteClick(e)}>Delete Post</button>
          </div>
        </div>
      )}
      {comments && <Comments comments={comments}/>}
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, {match}) {
  // console.log("ownProps", ownProps)
  return {
    post: _.find(posts, {id: match.params.postId }),
    comments: comments[match.params.postId]
  }
}

export default connect(mapStateToProps, {
                fetchAllPosts,
                fetchCommentsById,
                votePost,
                deletePost
                })(PostDetail)




