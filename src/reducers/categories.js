import {
  GET_CATEGORIES,
} from '../actions/category_actions'

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