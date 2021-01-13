import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Blog
// Creates a blog
export const createBlog = (user, blog) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/blogs/`,
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: { blog }
  })
}

export const blogIndex = () => {
  return axios({
    url: `${apiUrl}/blogs/`,
    method: 'GET'
  })
}

// GET SHOW
// Show a single blog
export const blogShow = (user, blogId) => {
  // console.log(blogId, user)
  return axios({
    url: `${apiUrl}/blogs/${blogId}`,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// DELETE Blog
// Deletes a single blog
export const blogDelete = (user, blogId) => {
  return axios({
    url: `${apiUrl}/blogs/${blogId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// UPDATE Blog
// Updates a single blog
export const blogUpdate = (user, blog, blogId) => {
  // console.log(blog)
  return axios({
    url: `${apiUrl}/blogs/${blogId}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { blog }
  })
}
