import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE Blog
// Creates a blog
export const createBlog = (blogInfo, user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/blogs`,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      blog: {
        blogtitle: blogInfo.blogtitle,
        blogsubject: blogInfo.blogsubject,
        date: blogInfo.date,
        blogtext: blogInfo.blogtext
      }
    }
  })
}

export const blogIndex = user => {
  return axios({
    url: `${apiUrl}/blogs`,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

// GET Blog
// Show a single blog
export const blogShow = (blogId, user) => {
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
export const blogDelete = (blogId, user) => {
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
export const blogUpdate = (blogInfo, user) => {
  return axios({
    url: `${apiUrl}/blogs/${blogInfo._id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      blog: {
        blogtitle: blogInfo.blogtitle,
        blogsubject: blogInfo.blogsubject,
        date: blogInfo.date,
        blogtext: blogInfo.blogtext
      }
    }
  })
}
