import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  }
}

export const fetchAllPosts = () => dispatch => (
  ReadableAPI
    .fetchAllPosts().then(posts => dispatch(receiveAllPosts(posts)))
  )

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
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

export function upvotePost(post) {
  return {
    type: UPVOTE_POST,
    post,
  }
}

export function downvotePost(post) {
  return {
    type: DOWNVOTE_POST,
    post,
  }
}