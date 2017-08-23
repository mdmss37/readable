import { combineReducers } from 'redux'

import posts from './post'
import categoryReducer from './categories'
import commentsReducer from './comments'

export default combineReducers({
  posts,
  categoryReducer,
  commentsReducer
})