import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import { Link } from 'react-router-dom'
import { updateComment, fetchCommentsById } from '../actions/commentActions'

// TODO: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/
class CommentEditForm extends Component {
  componentDidMount() {
    this.props.fetchCommentsById(this.props.match.params.postId)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const commentId = this.props.comment.id
    const postId = this.props.comment.parentId
    const timestamp = Date.now()
    const body = e.target.body.value

    this.props.updateComment(commentId, postId, timestamp, body,
      () => this.props.history.push(`/post/${postId}`) )
  }

  render() {
    const {comment} = this.props

    if(!comment) {
      return <div>No comment there</div>
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-post-form">
          <h1>Edit Your Comment</h1>
          <ul className="form-style-1">
            <li>
              <label>Your Comment here <span className="required">*</span></label>
              <textarea defaultValue={comment.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update Comment</button>
          </ul>
        </form>
        <Link to={`/post/${comment.parentId}`}>
          <button>Cancel</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, {match}) {
  const {postId, commentId} = match.params
  return {
    comment: _.find(comments[postId], {id: commentId})
  }
}

// https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4
export default connect(mapStateToProps, {
                updateComment, fetchCommentsById})(CommentEditForm)
