import {
  RECEIVE_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/commentActions'

function commentsReducer(state={}, action) {
  const { comments, post_id } = action
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
          comments: {
            ...state[comments],
            [action.post_id]: action.comments
          }
      }
    case CREATE_COMMENT:
      return state
    case UPDATE_COMMENT:
      return state
    case DELETE_COMMENT:
      return state
    case UPVOTE_COMMENT:
      return state
    case DOWNVOTE_COMMENT:
      return state
    default:
      return state
  }
}

export default commentsReducer