import {apiUrl, headers} from '../utils/ReadableAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const fetchAllcategories = () => {
  return (dispatch) => {
    fetch(`${apiUrl}/categories`, {headers})
    .then(res => res.json())
    .then(defaultData => {
      dispatch({type: GET_CATEGORIES, defaultData})
    })
  }
}