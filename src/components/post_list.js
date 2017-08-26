import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../components/post_item'
import { connect }  from 'react-redux'
import { fetchAllPosts } from '../actions/post_actions'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchAllPosts()
  }

  render() {
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

export default connect(mapStateToProps, { fetchAllPosts })(PostList)
