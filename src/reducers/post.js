
// Reducer is pure function
// Return one and the same result if the same arguments are passed in
// Depend solely on the arguments passed into them
// Do not produce side effects

import {
  RECEIVE_POSTS,
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_POST
} from '../actions/postActions'

function posts(state=[], action) {
  const { posts, post } = action
  switch(action.type) {
    case GET_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case CREATE_POST:
      return {
        ...state, posts: state.posts.concat([post])
      }
    case UPDATE_POST:
      return state
    case DELETE_POST:
      return state
    case VOTE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === "upVote") {
            post.voteScore += 1
          }
          if (action.option === "downVote") {
            post.voteScore -= 1
          }
        }
        return post
      })
    default:
      return state
  }
}

export default posts
