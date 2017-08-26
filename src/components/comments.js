import React, {Component} from 'react'
import { connect }  from 'react-redux'
import { formatTimestamp}  from '../utils/helpers'
import { Link } from 'react-router-dom'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import * as commentActions from '../actions/comment_actions'

class Comments extends Component {

  // How to use history? does not work well
  onDeleteClick = (comment) => {
    const commentId = comment.id
    const postId = comment.parentId
    this.props.deleteComment(commentId)
    this.props.fetchCommentsById(postId)
  }

  render() {
    const { comments, category } = this.props
    if(!comments) {
      return <div>No Comments</div>
    }

    return (
      <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          {comment && (
          <div className="post" key={comment.id}>
            <div className="post-votes">
              <FaCaretUp size={30} className="caret-up" onClick={() => {
                this.props.voteComment(comment.id, comment.parentId, "upVote")
              }}/>
              <p>{ comment.voteScore }</p>
              <FaCaretDown size={30} className="caret-down" onClick={() => {
                this.props.voteComment(comment.id, comment.parentId, "downVote")
              }}/>
            </div>
            <div className="post-description">
              <div className="post-body"><p>{comment.body}</p></div>
            </div>
            <div className="post-detail">
              <div className="post-author"><p>{comment.author} at {formatTimestamp(comment.timestamp)}</p></div>
            </div>

            <div className="button-action">
              <Link to={`/${category}/${comment.parentId}/${comment.id}/edit`}>
                <button>Edit Comment</button>
              </Link>

              <button onClick={() => this.onDeleteClick(comment)}>Delete Comment</button>
            </div>
          </div>

        )}
        </div>
        ))}
      </div>
    )}
}

// [Review]Passing the state, and any other argument is optional,
// as you can pass individual reducers into your state using the following practices:
//  function mapStateToProps({ reducer1, reducer2 }){
//     return { reducer1, reducer2 };
// }
function mapStateToProps({ posts }) {
  return { posts }
}

// [Review]If you want to pass multiple action creators into your container,
// you can do so by first importing your actions utilizing the following import method:
// Import * as actions from ‘../actions/action1’;
// The above selects ALL your actions within a specific action creator module, and adds them to this.props
// To connect this with your container, you just write the following:
// export default connect(mapStateToProps, actions)(Component);
// This adds all the action creators within the actions module, to your container :smile:
export default connect(mapStateToProps, commentActions)(Comments)
