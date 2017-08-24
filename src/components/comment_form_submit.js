import React, { Component } from 'react';
import { connect }  from 'react-redux'
import { createComment } from '../actions/commentActions'
import { guid }  from '../utils/helpers'

// TODO: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/
class CommentSubmitForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const postId = this.props.match.params.postId
    const submitComment = {
      id: guid(),
      parentId: postId,
      timestamp: Date.now(),
      body: e.target.body.value,
      author: e.target.author.value
    }
    console.log(submitComment)
    this.props.createComment(submitComment, postId,
     () => this.props.history.push(`/post/${postId}`) )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-post-form">
        <h1>Create New Comment</h1>
        <ul className="form-style-1">
          <li>
            <label>Name <span className="required">*</span></label>
            <input type="text" name="author" className="field-long" />
          </li>
          <li>
            <label>Your Comment here <span className="required">*</span></label>
            <textarea name="body" id="field5" className="field-long field-textarea"></textarea>
          </li>
          <button>Submit Comment</button>
        </ul>
      </form>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  console.log("state", this.state)
  return {
    posts: posts,
  }
}

// https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4
export default connect(mapStateToProps, {createComment})(CommentSubmitForm)
