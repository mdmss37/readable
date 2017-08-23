import {
  RECEIVE_COMMENTS,
  GET_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/commentActions'

function commentsReducer(state={}, action) {
  const { comments, postId } = action
  switch(action.type) {
    case GET_COMMENTS:
      return Object.assign({}, state, {[postId]: comments})
    default:
    return state
  }
}

export default commentsReducer

export const getPostComments = (state, id) => state[id]