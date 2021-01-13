import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Blog
// Creates a blog
export const createBlog = (user, blog) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/blogs/`,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      blog: {
        title: blog.title,
        subject: blog.subject,
        date: blog.date,
        text: blog.text
      }
    }
  })
}

export const blogIndex = () => {
  return axios({
    url: `${apiUrl}/blogs/`,
    method: 'GET'
  })
}

// GET Blog
// Show a single blog
export const blogShow = (user, blogId) => {
  // console.log(blogId, user)
  return axios({
    url: `${apiUrl}/blogs/${blogId}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
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
      'Authorization': `Token token=${user.token}`
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
      'Authorization': `Token token=${user.token}`
    },
    data: {
      blog: {
        title: blog.title,
        subject: blog.subject,
        date: blog.date,
        text: blog.text
      }
    }
  })
}
