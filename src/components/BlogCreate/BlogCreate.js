import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { blogCreate } from '../../api/blog'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BlogCreate extends Component {
  constructor () {
    super()

    this.state = {
      blogtitle: '',
      description: '',
      date: '',
      author: '',
      blogtext: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onBlogCreate = event => {
    event.preventDefault()

    const { msgAlert, history, setBlog } = this.props

    blogCreate(this.state)
      .then(() => blogCreate(this.state))
      .then(res => setBlog(res.data.blog))
      .then(() => msgAlert({
        heading: 'Create Blog Success',
        message: messages.createBlogSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ blogtitle: '', description: '', date: '', author: '', blogtext: '' })
        msgAlert({
          heading: 'Create Blog Failed with error: ' + error.message,
          message: messages.createBlogFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { blogtitle, description, date, author, blogtext } = this.state

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
                value={blogtitle}
                placeholder="Enter Title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description of Blog</Form.Label>
              <Form.Control
                required
                name="description"
                value={description}
                type="description"
                placeholder="Description of Blog"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                name="date"
                value={date}
                type="date"
                placeholder="Todays Date"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                required
                name="author"
                value={author}
                type="author"
                placeholder="Your Name"
                onChange={this.handleChange}
              />
              <Form.Group controlId="blogtext">
                <Form.Label>Blog Text</Form.Label>
                <Form.Control
                  required
                  name="blogtext"
                  value={blogtext}
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

export default withRouter(BlogCreate)
