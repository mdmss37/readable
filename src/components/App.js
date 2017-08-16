import React, { Component } from 'react';
// import logo from '../logo.svg';
import PropTypes from 'prop-types';
import '../App.css';
import { connect }  from 'react-redux'
import { fetchAllPosts, fetchPostsByCategory, createPost, upvotePost, downvotePost } from '../actions/postActions'
import { fetchAllcategories } from '../actions/categoryActions'
import { formatTimestamp, guid }  from '../utils/helpers'
// import serializeForm from "form-serialize"
// https://gorangajic.github.io/react-icons/index.html
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import SubmitForm from './form'


class App extends Component {
  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array
  }

  componentWillMount() {
    // this.props.dispatch(fetchAllPosts())
    fetchAllPosts()(this.props.dispatch)
    fetchAllcategories()(this.props.dispatch)
  }

  handleChange = (e) => {
    const selectedCategory = e.target.value
    if (selectedCategory === "none") {
      fetchAllPosts()(this.props.dispatch)
    } else {
      console.log(selectedCategory)
      fetchPostsByCategory(selectedCategory)(this.props.dispatch)
    }
  }

  render() {
    console.log("this.props:", this.props.posts)
    return (
      <div className="App">

        <div className="category-changer">
          <select onChange={this.handleChange}>
              <option key="none" value="none">none</option>
            {this.props.categories && this.props.categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
              ))}
          </select>
        </div>

          {this.props.posts && this.props.posts.map((post) => (
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
              <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
              <div className="post-category"><p>Category: {post.category}</p></div>
            </div>
            ))}

        <SubmitForm />
      </div>
    );
  }
}

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