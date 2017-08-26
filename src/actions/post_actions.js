import {apiUrl, headers} from '../utils/ReadableAPI'

// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const SORT_POST = 'SORT_POST'

export const fetchAllPosts = () => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts`, {headers})
      .then(res => res.json())
      .then(posts => {
        dispatch({type: GET_POSTS, posts })
      })
  }
}

export const fetchPostsByCategory = (category) => {
  return (dispatch) => {
    fetch(`${apiUrl}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(posts => {
      dispatch({type: GET_CATEGORY_POSTS, posts})
    })
  }
}

export const createPost = (post, callback) => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(post)
    })
    .then(() => callback())
    dispatch({type: CREATE_POST, post})
  }
}

export const updatePost = (postId, title, body, callback) => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts/${postId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({title: title, body: body})
    })
    .then(res => res.json())
    .then(updatedPost => {
      dispatch({type: UPDATE_POST, updatedPost, postId})
    })
    .then(() => callback())
  }
}

export const deletePost = (postId, callback) => {
  return dispatch => {
    fetch(`${apiUrl}/posts/${postId}`, {
        method: 'DELETE',
        headers: headers})
    .then(() => callback())
    dispatch({type: DELETE_POST, postId})
  }
}

// option is upVote or downVote
export const votePost = (postId, option) => {
  return (dispatch) => {
    fetch(`${apiUrl}/posts/${postId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({option})})
    .then(res => res.json())
    .then(post => {
      dispatch({type: VOTE_POST, postId, option })
    })
  }
}

export const sortPost = (sortKey) => {
  return dispatch => {
    dispatch({type: SORT_POST, sortKey})
  }
}