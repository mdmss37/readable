import {apiUrl} from '../utils/ReadableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

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
      dispatch({type: GET_POSTS, posts})
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
    dispatch => {
      dispatch({type: CREATE_POST, post})
    }
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post,
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
      dispatch({type: VOTE_POST, post})
    })
  }
}

// export function downvotePost(post) {
//   console.log("From downvotePost, post:", post)
//   ReadableAPI.downvotePost(post.id)
//   return {
//     type: DOWNVOTE_POST,
//     post,
//   }
// }