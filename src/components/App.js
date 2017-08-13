import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect }  from 'react-redux'
import { fetchAllPosts } from '../actions/postActions'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAllPosts())
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="app-container">
          {this.props.posts.map((post) => (
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

// map Redux state to this.props
function mapStateToProps(state) {
  console.log(state)
  return {
    posts: Object.keys(state).map((posts_id) => state[posts_id])
  }
}

export default connect(mapStateToProps)(App)
// export default App