import {apiUrl} from '../utils/ReadableAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever',
  'Content-Type': 'application/json'
}

export const fetchAllcategories = () => {
  return (dispatch) => {
    fetch(`${apiUrl}/categories`, {headers})
    .then(res => res.json())
    .then(defaultData => {
      dispatch({type: GET_CATEGORIES, defaultData})
    })
  }
}