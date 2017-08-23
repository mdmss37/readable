import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

const api = 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// export function receiveComments(comments, post_id) {
//   return {
//     type: RECEIVE_COMMENTS,
//     comments: comments,
//     post_id: post_id
//   }
// }

export const fetchCommentsById = (postId) => {
  return (dispatch) => {
    fetch(`${api}/posts/${postId}/comments`, { headers })
      .then(res => res.json())
      .then(comments => {
        dispatch({type: GET_COMMENTS, postId, comments })
      })
  }
}

// import { createRequestHeaders, hostOrigin } from '../utils/helpers'
// import * as actionTypes from './actionTypes'

// export const fetchPostComments = (postId) => {
//   return (dispatch) => {
//     const headers = createRequestHeaders()

//     fetch(`${hostOrigin}/posts/${postId}/comments`, { headers })
//       .then(response => response.json())
//       .then(comments => {
//         dispatch({ type: actionTypes.GET_COMMENTS, postId, comments })
//       })
//   }
// }