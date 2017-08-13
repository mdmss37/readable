import { combineReducers } from 'redux'

import postsReducer from './post'
import categoryReducer from './categories'

export default combineReducers({
  postsReducer,
  categoryReducer
})