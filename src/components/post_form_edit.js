import _ from 'lodash'
import React, { Component } from 'react';
import { connect }  from 'react-redux'
import { Link } from 'react-router-dom'
import * as postActions from '../actions/post_actions'

// TODO: http://redux-form.com/6.7.0/docs/faq/HowToConnect.md/
class PostEditForm extends Component {
  // componentDidMount() {
  //   this.props.fetchAllPosts()
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    this.props.updatePost(postId, title, body,
      () => this.props.history.push('/') )
  }

  render() {
    const {post} = this.props
    if(!post) {
      return <div>No post to Edit</div>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-post-form">
          <h1>Edit Your Post</h1>
          <ul className="form-style-1">
            <li>
              <label>Title <span className="required">*</span></label>
              <input defaultValue={post.title} type="text" name="title" className="field-long" />
            </li>

            <li>
              <label>Your Post here <span className="required">*</span></label>
              <textarea defaultValue={post.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update Post</button>
          </ul>
        </form>
        <Link to={`/post/${post.id}`}>
          <button>Cancel</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ posts }, {match}) {
  console.log("state", this.state)
  return {
    post: _.find(posts, {id: match.params.postId })
  }
}

// https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4
export default connect(mapStateToProps, { postActions })(PostEditForm)

