
// Reducer is pure function
// Return one and the same result if the same arguments are passed in
// Depend solely on the arguments passed into them
// Do not produce side effects

import {
  RECEIVE_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from '../actions/postActions'

function postsReducer(state={}, action) {
  const { posts } = action
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_POST:
      return state
    case UPDATE_POST:
      return state
    case DELETE_POST:
      return state
    case UPVOTE_POST:
      return state
    case DOWNVOTE_POST:
      return state
    default:
      return state
  }
}

export default postsReducer
