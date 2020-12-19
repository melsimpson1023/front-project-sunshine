import React from 'react'

const Home = () => {
  const backgroundImageUrl = ('/images/shutterstock_1101884330.jpg')
  const homeStyles = {
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
    <div style={homeStyles}>
      <div>
        <h1>Lux</h1>
        <h2>Welcome to a New World of Possiblities</h2>
        <h3>We hope you enjoy your journey to the light that shines within ALL of us. May this website help you to become a better YOU.</h3>
      </div>
    </div>
  )
}
export default Home
