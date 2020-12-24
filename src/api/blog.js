import apiUrl from '../apiConfig'
import axios from 'axios'

export const blogCreate = (blog, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/blog/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: blog
  })
}

export const blogIndex = () => {
  return axios({
    url: apiUrl + '/blog/',
    method: 'GET'
  })
}

export const blogShow = (blog, user) => {
  return axios({
    url: apiUrl + '/blog/<int:pk>/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        blogsubject: blog.blogsubject,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}

export const blogDelete = (blog, user) => {
  return axios({
    url: apiUrl + '/blog/<int:pk>/',
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const blogUpdate = (blog, user) => {
  return axios({
    url: apiUrl + '/blog/<int:pk>/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        blogsubject: blog.blogsubject,
        date: blog.date,
        author: blog.author,
        blogtext: blog.blogtext
      }
    }
  })
}
