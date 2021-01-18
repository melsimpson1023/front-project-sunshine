import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Home from './components/Home/Home'
import About from './components/About/About'
import Video from './components/Video/Video'
import Video1 from './components/Video/Video1'
import Article from './components/Article/Article'
import Blog from './components/Blog/Blog'
import BlogCreate from './components/Blog/BlogCreate'
import BlogShow from './components/Blog/BlogShow'
import BlogIndex from './components/Blog/BlogIndex'
import BlogUpdate from './components/Blog/BlogUpdate'
// import BlogDelete from './components/Blog/BlogDelete'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}

        <main className="container">
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/home' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/about' render={() => (
            <About msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/blog' render={() => (
            <Blog msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/blogcreate' render={() => (
            <BlogCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/blog-update/:blogId' render={({ match }) => (
            <BlogUpdate msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} path='/blog-show/:blogId' render={({ match }) => (
            <Fragment>
              <BlogShow msgAlert={this.msgAlert} user={user} match={match} />
              {/*  <BlogUpdate msgAlert={this.msgAlert} user={user} />
              <BlogDelete msgAlert={this.msgAlert} user={user} /> */}
            </Fragment>

          )} />
          <AuthenticatedRoute user={user} path='/blog-index' render={() => (
            <BlogIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/video' render={() => (
            <Video msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/video1' render={() => (
            <Video1 msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/article' render={() => (
            <Article msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
