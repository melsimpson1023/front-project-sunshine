import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

import { blogShow, blogDelete } from '../../api/blogs'

class BlogShow extends Component {
  constructor () {
    super()
    this.state = {
      blog: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, msgAlert, match } = this.props
    console.log(match)

    blogShow(match.params.blogId, user)
      .then(res => {
        console.log(res)
        this.setState({ blog: res.data.blog })
      })
      .then(() => {
        msgAlert({
          heading: 'Blog Show Success!',
          message: 'Welcome!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Blog Show Failed',
          message: 'Failed with error: ' + err.message,
          variant: 'danger'
        })
      })
  }
  delete = () => {
    const { user, match } = this.props
    console.log(match.params)
    blogDelete(match.params.blogId, user)
      .then(() => this.setState({
        deleted: true
      }))
      .catch(console.error)
  }

  render () {
    const { user } = this.props
    if (!this.state.blog) {
      return (
        'Loading...'
      )
    } else if (this.state.deleted) {
      return <Redirect to="/blog-index" />
    } else {
      console.log(this.state.blog, user)
      if (this.state.blog.owner === user._id) {
        return (
          <div>
            <h1>Here is a blog you own</h1>
            <Link to={`/blog-update/${this.props.match.params.blogId}`}><Button>Edit</Button></Link>

            <Button onClick={this.delete}>Delete</Button>
          </div>
          /* <div className="row">
            {this.state.blog.map(blog => (
              <div key={blog._id} className='col-sm-5 col-md-5 mx-auto mt-5'>
                <Card>
                  <Card.Header as="h5">{blog.title}</Card.Header>
                  <Card.Body>
                    <Card.Title as="h5">{blog.subject}</Card.Title>
                    <Card.Text>{blog.text}</Card.Text>
                    <Button onClick={this.delete}>Delete</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        /*  </div> */
        )
      } else {
        return (
          <h1>you do not own this blog</h1>
        )
      }
    }
  }
}
export default BlogShow
