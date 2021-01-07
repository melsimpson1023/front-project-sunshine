import React, { Component } from 'react'
import messages from '../AutoDismissAlert/messages'

import { blogCreate } from '../../api/blog'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BlogCreate extends Component {
  constructor () {
    super()
    this.state = {
      blog: {
        blogtitle: '',
        blogsubject: '',
        date: '',
        blogtext: ''
      },
      createdId: null
    }
  }

  // Update the state for each input
  // So the `value` of the input updates
  // and we can we see what we type
  handleChange = (event) => {
    console.log('changing')

    // 1. Create an object with key (input name), value (input value)
    // event.target.name is a variable - it's value is 'title'
    // event.target.name : 'whatever'
    // const keyName = 'hello' { [keyName]: 'World' }

    const updatedField = { [event.target.name]: event.target.value }

    this.setState(currState => {
      // 2. Use Object.assign to merge that object with the current state `movie`
      // const updatedMovie = Object.assign({}, currState.movie, updatedField)

      // Using spread operator:
      // "Spread" out the current key/value pairs in the `currState.movie` object
      // Then also "spread" the `updatedField` so the key/value pair in  that object overrides the old key/value pair
      // const updatedMovie = { ...currState.movie, [event.target.name]: event.target.value }
      const updatedBlog = { ...currState.blog, ...updatedField }

      // 3. Run setState to reassign the `movie` to our merged object
      return { blog: updatedBlog }
    })
  }

// handle form submission
handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert } = this.props

  blogCreate(this.state.blog, user)
    .then((res) => {
      this.setState({ createdId: res.data.blog.id })
    })
    .then(() => {
      msgAlert({
        heading: 'Blog Created Successfully',
        message: messages.onBlogCreateSuccess,
        variant: 'success'
      })
    })
    .catch(() => {
      msgAlert({
        heading: 'Blog Creation Failed',
        message: messages.onBlogCreateFailure,
        variant: 'danger'
      })
    })
}
render () {
  if (this.state.createdId) {
    return console.log(this.state.creadedId)
  }
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Blog</h3>
        <Form onSubmit={this.onBlogCreate}>
          <Form.Group controlId="blogtitle">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              required
              type="blogtitle"
              name="blogtitle"
              value={this.state.blog.title}
              placeholder="Enter Title"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="blogsubject">
            <Form.Label>Subject of Blog</Form.Label>
            <Form.Control
              required
              name="blogsubject"
              value={this.state.blog.blogsubject}
              type="blogsubject"
              placeholder="Subject of Blog"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              name="date"
              value={this.state.blog.date}
              type="date"
              placeholder="Todays Date"
              onChange={this.handleChange}
            />
            <Form.Group controlId="blogtext">
              <Form.Label>Blog Text</Form.Label>
              <Form.Control
                required
                name="blogtext"
                value={this.state.blog.blogtext}
                type="blogtext"
                placeholder="Type Your Thoughts Here"
                onChange={this.handleChange}
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
