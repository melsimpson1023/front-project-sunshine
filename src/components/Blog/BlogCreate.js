import React, { Component } from 'react'
// import messages from '../AutoDismissAlert/messages'
import { createBlog } from '../../api/blogs'
import { withRouter } from 'react-router-dom'

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
      }
    }
  }

  // Update the state for each input
  // So the `value` of the input updates
  // and we can we see what we type
  // handleChange = event => {
  //  event.persist()

  //  this.setState(preState => {
  //    const updatedField = { [event.target.name]: event.target.value }

  //    const editedBlog = Object.assign(this.state.blog, updatedField)

  //    return { blog: editedBlog }
  //  })
  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedBlog = Object.assign(this.state.blog, updatedField)

    this.setState({ blog: editedBlog })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    createBlog(this.state.blog, user)
      .then(() => {
        msgAlert({
          heading: 'Blog Create Success',
          message: 'Blog Create Success',
          variant: 'success'
        })
      })
      .then(() => this.props.history.push('/blog'))
      .catch(err => {
        msgAlert({
          heading: 'Blog Create Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    // const { handleChange, handleSubmit } = this
    // const { createdBlogId, blog } = this.state

    // if (createdBlogId) {
    //  return <Redirect to={`/blog/${createdBlogId}`} />
    //  }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create Blog</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                name="blogtitle"
                value={this.state.blog.blogtitle}
                placeholder="Enter Title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject of Blog</Form.Label>
              <Form.Control
                required
                name="blogsubject"
                value={this.state.blog.blogsubject}
                type="text"
                placeholder="Subject of Blog"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                name="date"
                value={this.state.blog.date}
                type="date"
                placeholder="Todays Date"
                onChange={this.handleChange}
              />
              <Form.Group>
                <Form.Label>Blog Text</Form.Label>
                <Form.Control
                  required
                  name="blogtext"
                  value={this.state.blog.blogtext}
                  type="blogtext"
                  placeholder="Type Your Thoughts Here"
                  onChange={this.handleChange}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button type="submit"> Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(BlogCreate)
