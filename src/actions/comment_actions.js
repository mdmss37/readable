import {apiUrl, headers} from '../utils/ReadableAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export const fetchCommentsById = (parentId) => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts/${parentId}/comments`, { headers })
      .then(res => res.json())
      .then(comments => {
        dispatch({type: GET_COMMENTS, parentId, comments })
      })
  }
}

export const createComment = (comment, parentId, callback) => {
  return (dispatch) => {
    fetch(`${apiUrl}/comments`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(comment)})
    .then(res => res.json())
    .then(comment => {
      dispatch({type: CREATE_COMMENT, parentId, comment})
    })
    .then(() => callback())
  }
}

export const deleteComment = (commentId) => {
  return (dispatch) => {
    fetch(`${apiUrl}/comments/${commentId}`, {
      method: 'DELETE',
      headers: headers})
    .then(res => res.json())
    dispatch({type: DELETE_COMMENT, commentId})
  }
}

export const voteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    fetch(`${apiUrl}/comments/${commentId}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({option})})
    .then(res => res.json())
    .then(updatedComment => {
      dispatch({type: VOTE_COMMENT, updatedComment, commentId, parentId})
    })
  }
}

export const updateComment = (commentId, parentId ,timestamp, body, callback) => {
  return (dispatch) => {
    fetch(`${apiUrl}/comments/${commentId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({timestamp: timestamp, body: body})
    })
    .then(res => res.json())
    .then(updatedComment => {
      dispatch({type: UPDATE_COMMENT, updatedComment, commentId, parentId})
    })
    .then(() => callback())
  }
}

