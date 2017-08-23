import {
  GET_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from '../actions/commentActions'

function comments(state={}, action) {
  const { comments, postId, commentId,
    parentId, option, voteScore, comment} = action
  switch(action.type) {
    case GET_COMMENTS:
      return Object.assign({}, state, {[postId]: comments})
    case VOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            if (option === "upVote") {
              comment.voteScore += 1
            } else {
              comment.voteScore -= 1
            }
          }
          return comment
        })
      }
    case CREATE_COMMENT:
      return Object.assign({}, state, {[postId]: comments})
    case DELETE_COMMENT:
      return state
    default:
    return state
  }
}

export default comments

export const getPostComments = (state, id) => state[id]