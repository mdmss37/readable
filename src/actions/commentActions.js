import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export function receiveComments(comments, post_id) {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments,
    post_id: post_id
  }
}

export const fetchCommentsById = (post) => dispatch => {
  console.log("fetchCommentsById", post)
  console.log("fetchCommentsById", post.id)
  ReadableAPI
    .fetchCommentsById(post.id).then(comments => dispatch(receiveComments(comments, post.id)))
  }