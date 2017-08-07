import * as ReadableAPI from '../utils/ReadableAPI'

import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from '../actions'

const initialPostState = ReadableAPI.getAllPosts()
console.log(initialPostState)
