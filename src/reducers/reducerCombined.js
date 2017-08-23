import { combineReducers } from 'redux'

import posts from './post'
import categoryReducer from './categories'
import comments from './comments'

export default combineReducers({
  posts,
  categoryReducer,
  comments
})