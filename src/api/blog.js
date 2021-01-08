import apiUrl from '../apiConfig'
import axios from 'axios'

export const blogCreate = (blog, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/blogs',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: blog
  })
}

export const blogIndex = () => {
  return axios({
    url: apiUrl + '/blogs',
    method: 'GET'
  })
}

export const blogShow = (blogId, user) => {
  return axios({
    url: apiUrl + '/blogs/' + blogId,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
    // data: {
    //   blog: {
    //     blogtitle: blog.blogtitle,
    //     blogsubject: blog.blogsubject,
    //     date: blog.date,
    //     author: blog.author,
    //     blogtext: blog.blogtext
    //   }
    // }
  })
}

export const blogDelete = (blogId, user) => {
  return axios({
    url: apiUrl + '/blogs/' + blogId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const blogUpdate = (blog, user) => {
  return axios({
    url: apiUrl + '/blogs',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      blog: {
        blogtitle: blog.blogtitle,
        blogsubject: blog.blogsubject,
        date: blog.date,
        blogtext: blog.blogtext
      }
    }
  })
}
