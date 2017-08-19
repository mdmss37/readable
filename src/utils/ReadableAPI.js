const api = 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
  // "Content-Type": "application/json",
  // "Access-Control-Origin": '*'
}

export const fetchAllPosts = () => {
  console.log("token:", token)
  return fetch(`${api}/posts`, {headers}).then(res => res.json())
}

export const fetchPostsByCategory = (category) => {
  console.log("token:", token)
  return fetch(`${api}/${category}/posts`, { method: 'GET', headers: headers}).then(res => res.json())
}

export const fetchCategories = () => {
  return fetch(`${api}/categories`, {headers}).then(res => res.json())
}

export const createPost = (post, callback) => {
  fetch(`${api}/posts`, { method: 'POST', headers: headers, body: JSON.stringify(post)})
  .then(() => callback())
}

export const upvotePost = (post_id) => {
  console.log("upvotePost")
  console.log(post_id)
  fetch(`${api}/posts/${post_id}`, { method: 'POST', headers: headers, body: JSON.stringify({option: "upVote"})})
  .then(res => res.json())
}

export const downvotePost = (post_id) => {
  console.log("downvotePost")
  console.log(post_id)
  fetch(`${api}/posts/${post_id}`, { method: 'POST', headers: headers, body: JSON.stringify({option: "downVote"})})
  .then(res => res.json())
}

export const fetchCommentsById = (post_id) => {
  console.log("fetchAllComments", `${api}/posts/${post_id}/comments`)
  return fetch(`${api}/posts/${post_id}/comments`, { headers: headers })
  .then(res => res.json())
  .then(data => data)
}
