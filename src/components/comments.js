import React, {Component} from 'react'
import { formatTimestamp}  from '../utils/helpers'
import { fetchAllPosts, votePost} from '../actions/postActions'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'

class Comments extends Component {


  render() {
    const {comments} = this.props
    if(!comments) {
      return <div>No Comments</div>
    }

    return (
      <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div>
          {comment && (
          <div className="post" key={comment.id}>
            <div className="post-votes">
              <FaCaretUp size={30} className="caret-up" onClick={() => {
                votePost(comment.id, "upVote")
              }}/>
              <p>{comment.voteScore}</p>
              <FaCaretDown size={30} className="caret-down" onClick={() => {
                votePost(comment.id, "downVote")
              }}/>
            </div>
            <div className="post-description">
              <div className="post-body"><p>{comment.body}</p></div>
            </div>
            <div className="post-detail">
              <div className="post-category"><p>Category: {comment.category}</p></div>
              <div className="post-author"><p>{comment.author} at {formatTimestamp(comment.timestamp)}</p></div>
            </div>
          </div>
        )}
        </div>
        ))}
      </div>
    )}
}

export default Comments