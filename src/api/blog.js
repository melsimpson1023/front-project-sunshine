import apiUrl from '../apiConfig'
import axios from 'axios'

export const blogCreate = blog => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create/',
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        description: blog.description,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}

export const blogIndex = blog => {
  return axios({
    url: apiUrl + '/index/',
    method: 'GET',
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        description: blog.description,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}

export const blogShow = (blog, user) => {
  return axios({
    url: apiUrl + '/show/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        description: blog.description,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}

export const blogDelete = user => {
  return axios({
    url: apiUrl + '/delete/',
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const blogUpdate = (blog, user) => {
  return axios({
    url: apiUrl + '/update/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        description: blog.description,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}
