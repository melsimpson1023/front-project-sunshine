import React, { Component } from 'react'
import messages from '../AutoDismissAlert/messages'
import { Redirect } from 'react-router-dom'

import { blogCreate } from '../../api/blog'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BlogCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blog: {
        blogtitle: '',
        blogsubject: '',
        date: '',
        blogtext: ''
      },
      createdBlogId: []
    }
  }

  // Update the state for each input
  // So the `value` of the input updates
  // and we can we see what we type
  handleChange = event => {
    event.persist()

    this.setState(preState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedBlog = Object.assign(this.state.blog, updatedField)

      return { blog: editedBlog }
    })
  }
  onBlogCreate = event => {
    event.preventDefault()

    const { msgAlert, user } = this.props

    blogCreate(this.state, user)
      .then(() => msgAlert({
        heading: 'Blog Created Successfully',
        message: messages.onBlogCreateSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Create blog failed with error: ' + error.message,
        message: messages.onBlogCreateFailure,
        variant: 'danger'
      }))
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdBlogId, blog } = this.state

    if (createdBlogId) {
      return <Redirect to={`/blog/${createdBlogId}`} />
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create Blog</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="blogtitle">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                required
                type="blogtitle"
                name="blogtitle"
                value={blog.title}
                placeholder="Enter Title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="blogsubject">
              <Form.Label>Subject of Blog</Form.Label>
              <Form.Control
                required
                name="blogsubject"
                value={blog.blogsubject}
                type="blogsubject"
                placeholder="Subject of Blog"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                name="date"
                value={blog.date}
                type="date"
                placeholder="Todays Date"
                onChange={handleChange}
              />
              <Form.Group controlId="blogtext">
                <Form.Label>Blog Text</Form.Label>
                <Form.Control
                  required
                  name="blogtext"
                  value={blog.blogtext}
                  type="blogtext"
                  placeholder="Type Your Thoughts Here"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
              Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}

export default BlogCreate
