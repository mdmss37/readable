import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import PostDetail from '../components/post_detail'
import { formatTimestamp }  from '../utils/helpers'
import { connect }  from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom'
import { fetchAllPosts, fetchPostsByCategory, createPost, votePost} from '../actions/postActions'


class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }
  componentDidMount() {
    console.log("componentDidMount from PostList", this.props)
    this.props.fetchAllPosts()
  }

  render() {
    console.log("From PostList", this.props.posts)
    const {posts, comments, votePost} = this.props
    if(!posts) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="post-votes">
              <FaCaretUp size={30} className="caret-up" onClick={() => {
                votePost(post.id, "upVote")
              }}/>
              <p>{post.voteScore}</p>
              <FaCaretDown size={30} className="caret-down" onClick={() => {
                votePost(post.id, "downVote")
              }}/>
            </div>
            <div className="post-description">
              <Link to={`/post/${post.id}`}>
                <div className="post-title"><h3>{post.title}</h3></div>
              </Link>
              <div className="post-body"><p>{post.body}</p></div>
            </div>
            <div className="post-detail">
              <div className="post-category"><p>Category: {post.category}</p></div>
              <div className="post-author"><p>{post.author} at {formatTimestamp(post.timestamp)}</p></div>
              <div className="post-comment"><p>Comment# {comments && comments[post.id] ? comments[post.id].length : 0}</p></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps({ posts, comments }) {
  console.log("state from PostList", this.state)
  return {
    posts: posts,
    comments: comments.comments
  }
}

export default connect(mapStateToProps, {fetchAllPosts, votePost})(PostList)
