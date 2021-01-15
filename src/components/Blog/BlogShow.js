import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

import { blogShow, blogDelete } from '../../api/blog'

class BlogShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blog: [],
      deleted: false
    }
  }

  componentDidMount () {
    const { user, msgAlert, match } = this.props
    // console.log(match)

    blogShow(user, match.params.blogId)
      .then(res => {
        // console.log(res)
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
    // console.log(match.params)
    blogDelete(user, match.params.blogId)
      .then(() => this.setState({
        deleted: true
      }))
      .catch(console.error)
  }

  render () {
    const { blog, deleted } = this.state
    const { user } = this.props
    if (!blog) {
      return (
        'Loading...'
      )
    } if (deleted) {
      return <Redirect to="/blog-index" />
    }
    // console.log(this.state.blog, user)
    if (blog.owner === user.id) {
      return (
        <div>
          <h1>Here is a blog you own</h1>
          <Link to={`/blog-update/${this.props.match.params.blogId}`}><Button>Edit</Button></Link>

          <Button onClick={this.delete}>Delete</Button>
        </div>
      /* <div className="row">
            {this.state.blog.map(blog => (
              <div key={blog.id} className='col-sm-5 col-md-5 mx-auto mt-5'>
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

export default BlogShow
