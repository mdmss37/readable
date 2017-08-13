import React, { Component } from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import '../App.css';
import { connect }  from 'react-redux'
import { fetchAllPosts } from '../actions/postActions'
import { fetchAllcategories } from '../actions/categoryActions'

class App extends Component {
  componentWillMount() {
    // this.props.dispatch(fetchAllPosts())
    fetchAllPosts()(this.props.dispatch)
    fetchAllcategories()(this.props.dispatch)
  }
  render() {
    console.log("this.props:", this.props)
    return (
      <div className="App">
        <div className="app-container">
          {this.props.posts && this.props.posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-votes"><p>{post.voteScore}</p></div>
              <div className="post-body"><p>{post.body}</p></div>
              <div className="post-author"><p>{post.author}</p></div>
              <div className="post-category"><p>{post.category}</p></div>
            </div>
            ))}
        </div>
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