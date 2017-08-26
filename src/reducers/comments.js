import {
  GET_COMMENTS,
  VOTE_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions'

function comments(state={}, action) {
  const { comments, commentId, parentId, updatedComment} = action
  switch(action.type) {
    case GET_COMMENTS:
      return Object.assign({}, state, {[parentId]: comments})
    case VOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }
    case CREATE_COMMENT:
      return Object.assign({}, state, {[parentId]: comments})
    case DELETE_COMMENT:
      return state
    default:
    return state
  }
}

export default comments
