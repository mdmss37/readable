// list actions to change state of app
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export function addPost({post, category}) {
  return {
    type: ADD_POST,
    post,
    category,
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

// Comment actions

export function addComment({comment, post}) {
  return {
    type: ADD_COMMENT,
    comment,
    post,
  }
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

export function deleteComment(comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export function upvoteComment(comment) {
  return {
    type: UPVOTE_COMMENT,
    comment,
  }
}

export function downvoteComment(comment) {
  return {
    type: DOWNVOTE_COMMENT,
    comment,
  }
}




