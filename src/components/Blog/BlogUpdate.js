import React, { Component } from 'react'
// import messages from '../AutoDismissAlert/messages'
import { Button } from 'react-bootstrap'
import { blogUpdate } from '../../api/blog'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class BlogUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blog: {
        title: '',
        subject: '',
        date: '',
        text: ''
    },
  }
  // componentDidMount (res) {
  //  const { user, match } = this.props
  // console.log(this.props)
  //   blogShow(match.params, user)
  //    .then(res => {
  // console.log(res.data)
  //    this.setState({ blog: res.data.blog })
  //    })
  // .then(res => this.setState({ listing: res.data.listing }))
  //      .catch(console.error)
  //  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedBlog = Object.assign(this.state.blog, updatedField)

    this.setState({ blog: editedBlog })
  }

  handleSubmit = event => {
    event.preventDefault()

    //  const { blog } = this.state
    const { user, msgAlert, match } = this.props

    blogUpdate(user, match.params.blogId)
      .then(() => {
        msgAlert({
          heading: 'Blog Update Success',
          message: 'Blog Update Success',
          variant: 'success'
        })
      })
      .then(() => this.props.history.push('/blog'))
      .catch(err => {
        msgAlert({
          heading: 'Blog Update Failed',
          message: `Failed with error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Edit Blog</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={this.state.blog.title}
                placeholder="Enter Title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject of Blog</Form.Label>
              <Form.Control
                required
                name="subject"
                value={this.state.blog.subject}
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
                  name="text"
                  value={this.state.blog.text}
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

export default withRouter(BlogUpdate)
