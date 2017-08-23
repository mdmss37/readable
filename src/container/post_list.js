import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FaCaretUp from 'react-icons/lib/fa/caret-up'
// import FaCaretDown from 'react-icons/lib/fa/caret-down'
import PostItem from '../components/post_item'
// import { formatTimestamp }  from '../utils/helpers'
import { connect }  from 'react-redux'
// import { Link, Route, withRouter } from 'react-router-dom'
import { fetchAllPosts, votePost} from '../actions/postActions'
import { fetchCommentsById } from '../actions/commentActions'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    console.log("componentDidMount from PostList", this.props)
    this.props.fetchAllPosts()
    for (const post of this.props.posts) {
        this.props.fetchCommentsById(post.id)
    }
  }

  render() {
    console.log("From PostList, posts:", this.props.posts)
    const {posts} = this.props
    if(!posts) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {posts.map(post => (
          <PostItem key={post.id} post={post}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  console.log("state from PostList", this.state)
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, {
                fetchAllPosts,
                fetchCommentsById,
                votePost})(PostList)
