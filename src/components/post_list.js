import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FaCaretUp from 'react-icons/lib/fa/caret-up'
// import FaCaretDown from 'react-icons/lib/fa/caret-down'
import PostItem from '../components/post_item'
// import { formatTimestamp }  from '../utils/helpers'
import { connect }  from 'react-redux'
// import { Link, Route, withRouter } from 'react-router-dom'
import { fetchAllPosts, fetchPostsByCategory, votePost} from '../actions/postActions'
import { fetchCommentsById } from '../actions/commentActions'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
    // const path = this.props.match.params.category
    // console.log("Path from Post List", path)
    // if(path !== undefined) {
    //   this.props.fetchPostsByCategory(path)
    // } else {
    //   this.props.fetchAllPosts()
    // }
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

function mapStateToProps({ posts }, {match}) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps, {
                fetchAllPosts,
                fetchPostsByCategory,
                fetchCommentsById,
                votePost})(PostList)
