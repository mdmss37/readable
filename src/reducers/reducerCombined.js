import { combineReducers } from 'redux'

import postsReducer from './post'
import categoryReducer from './categories'
import commentsReducer from './comments'

export default combineReducers({
  postsReducer,
  categoryReducer,
  commentsReducer
})