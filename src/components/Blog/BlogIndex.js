import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import { blogIndex } from '../../api/blog'

class BlogIndex extends Component {
  constructor () {
    super()
    this.state = {
      blog: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    blogIndex(user, this.state.blog)
      .then(res => {
        // console.log(res)
        this.setState({ blog: res.data.blog })
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
    const blogs = this.state.blogs.map(blog => (

      return (
        <div className="row">
            <div key={blog.id} className='col-sm-5 col-md-5 mx-auto mt-5'>
              <Card>
                <Card.Header as="h5">{blog.title}</Card.Header>
                <Card.Body>
                  <Card.Title as="h5">{blog.subject}</Card.Title>
                  <Card.Text>{blog.text}</Card.Text>
                  <Card.Link href={`#/blog-show/${blog.id}`}>Show Blog</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )
      )
    }
  }
}

export default BlogIndex
