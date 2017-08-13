import {
  RECEIVE_CATEGORIES,
} from '../actions/categoryActions'

function categoryReducer(state={}, action) {
  const { categories } = action
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {...state, categories: categories}
    default:
      return state
  }
}

export default categoryReducer