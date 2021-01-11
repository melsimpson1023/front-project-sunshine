import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import { blogIndex } from '../../api/blogs'

class BlogIndex extends Component {
  constructor () {
    super()
    this.state = {
      blogs: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    blogIndex(user)
      .then(res => {
        // console.log(res)
        this.setState({ blogs: res.data.blogs })
      })
      .then(() => {
        msgAlert({
          heading: 'Blog Index Success!',
          message: 'Welcome!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Blog Index Failed',
          message: 'Failed with error: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (!this.state.blogs) {
      return (
        'Loading...'
      )
    } else if (this.state.blogs.length === 0) {
      return <p>No blogs exist in the database.</p>
    } else {
      return (
        <div className="row">
          {this.state.blogs.map(blog => (
            <div key={blog._id} className='col-sm-5 col-md-5 mx-auto mt-5'>
              <Card>
                <Card.Header as="h5">{blog.title}</Card.Header>
                <Card.Body>
                  <Card.Title as="h5">{blog.subject}</Card.Title>
                  <Card.Text>{blog.text}</Card.Text>
                  <Card.Link href={`#/blog-show/${blog._id}`}>Show Blog</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )
    }
  }
}
export default BlogIndex
