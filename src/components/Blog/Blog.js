import React from 'react'
import '../../index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Blog = () => {
  const backgroundImageUrl = ('./public/images/shutterstock_1101884330.jpg')
  const blogStyles = {
    // Center the heading inside the container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // set the background image
    backgroundImage: `url(${backgroundImageUrl})`,
    // cover the entire width of the div
    backgroundSize: 'cover',
    // center the background
    backgroundPosition: 'center',
    // take up 100% of the viewport's height
    height: '100vh',
    color: '#196666',
    textAlign: 'center'
  }
  return (
    <div style={blogStyles}>
      <div>
        <h1><b>Lux</b></h1>
        <h2>Welcome to a New World of Possiblities</h2>
        <h4><i>A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. -Winston Churchill</i></h4>
        <h3>About Us</h3>
        <h5>We are here to promote positivity and motivation for ALL.</h5>
        <h5>Because we have experienced, in the past, depression and/or other stress related issues, it made us think, how can we help others with the same issues? This is how we came up with the idea to create this portal in hopes of helping others see the brighter side of life.</h5>
        <h5>We have learned from our experiences that it is important to find happiness within the small things in life. For example, the Sun is out and is such a beautiful day. By appreciating the small, it makes the bigger things in life way more extraordinary.</h5>
        <h5>We have a challenge for you. Yes YOU! When you wake up tomorrow, think of three things in life that you are greatful for. Do this for 30 days. It gets easier and more beneficial as time goes by.</h5>
        <h5>Please remember, we are not the teachers. This is a portal we created containing videos, articles, and a blog. We believe in you and also know that you hopefully will be able to find your OWN answers.</h5>
        <p></p>
        <h4>Please remember, YOU have control of your own destiny.</h4>
      </div>
    </div>
  )
}
export default Blog
