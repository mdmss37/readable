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
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id}>{post.body}</li>
            ))}
        </ul>
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