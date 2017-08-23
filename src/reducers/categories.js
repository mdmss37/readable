import {
  GET_CATEGORIES,
} from '../actions/categoryActions'

function categories(state=[], action) {
  const { defaultData } = action
  switch(action.type) {
    case GET_CATEGORIES:
      return defaultData.categories
    default:
      return state
  }
}

export default categories