import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveAllcategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export const fetchAllcategories = () => dispatch => (
  ReadableAPI
    .fetchCategories().then(categories => dispatch(receiveAllcategories(categories)))
  )