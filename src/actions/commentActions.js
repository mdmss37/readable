import {apiUrl} from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

export const fetchCommentsById = (postId) => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts/${postId}/comments`, { headers })
      .then(res => res.json())
      .then(comments => {
        dispatch({type: GET_COMMENTS, postId, comments })
      })
  }
}

export const voteComment = (commentId, parentId, voteScore, option) => {
  return (dispatch) => {
    fetch(`${apiUrl}/comments/${commentId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({option})})
    .then(res => res.json())
    .then(comment => {
      dispatch({type: VOTE_COMMENT, commentId, parentId, voteScore, option})
    })
  }
}
