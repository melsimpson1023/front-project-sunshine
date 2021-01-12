import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Blog
// Creates a blog
export const createBlog = (blog, user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/blog/`,
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
    url: `${apiUrl}/blog/`,
    method: 'GET'
  })
}

// GET Blog
// Show a single blog
export const blogShow = (blogId, user) => {
  // console.log(blogId, user)
  return axios({
    url: `${apiUrl}/blog/${blogId}`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// DELETE Blog
// Deletes a single blog
export const blogDelete = (blogId, user) => {
  return axios({
    url: `${apiUrl}/blog/${blogId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// UPDATE Blog
// Updates a single blog
export const blogUpdate = (blog, blogId, user) => {
  // console.log(blog)
  return axios({
    url: `${apiUrl}/blog/${blogId}`,
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
