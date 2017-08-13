import React, { Component } from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import '../App.css';
import { connect }  from 'react-redux'
import { fetchAllPosts, createPost } from '../actions/postActions'
import { fetchAllcategories } from '../actions/categoryActions'
import { formatTimestamp, guid }  from '../utils/helpers'
import serializeForm from "form-serialize"

class App extends Component {
  componentWillMount() {
    // this.props.dispatch(fetchAllPosts())
    fetchAllPosts()(this.props.dispatch)
    fetchAllcategories()(this.props.dispatch)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const submitPost = {
      id: guid(),
      timestamp: Date.now(),
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
      voteScore: 1,
      deleted: false,
    }
    console.log(submitPost.id)
    // createPost(submitPost)
    fetchAllPosts()(this.props.dispatch)
  }

  render() {
    console.log("this.props:", this.props.categories)
    return (
      <div className="App">

        <div className="category-changer">
          <select name="" id="">
            {this.props.categories && this.props.categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
              ))}
          </select>
        </div>

          {this.props.posts && this.props.posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-votes"><p>{post.voteScore}</p></div>
              <div className="post-title"><h3>{post.title}</h3></div>
              <div className="post-body"><p>{post.body}</p></div>
              <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
              <div className="post-category"><p>{post.category}</p></div>
            </div>
            ))}

        <form onSubmit={this.handleSubmit} className="create-post-form">
          <ul className="form-style-1">
            <li>
                <label>Title <span className="required">*</span></label>
                <input type="text" name="title" className="field-long" />
            </li>
            <li>
                <label>Name <span className="required">*</span></label>
                <input type="text" name="author" className="field-long" />
            </li>
            <li>
                <label>Category</label>
                <select name="category" className="field-select">
                {this.props.categories && this.props.categories.map((category) => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
                </select>
            </li>
            <li>
                <label>Your Post here <span className="required">*</span></label>
                <textarea name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Submit Post</button>
          </ul>
        </form>

      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array,
  fetchAllPosts: PropTypes.func.isRequired
};

// map Redux state to this.props
function mapStateToProps({ postsReducer, categoryReducer }) {
  console.log("state", this.state)
  return {
    posts: postsReducer.posts,
    categories: categoryReducer.categories
  }
}

export default connect(mapStateToProps)(App)
// export default App