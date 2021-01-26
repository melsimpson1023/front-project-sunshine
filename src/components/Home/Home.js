import React from 'react'
import '../../index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const homeStyles = {
    // Center the heading inside the container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // set the background image
    //  backgroundImage: `url(${backgroundImageUrl})`,
    // cover the entire width of the div
    backgroundSize: 'cover',
    // center the background
    backgroundPosition: 'center',
    // take up 100% of the viewport's height
    height: '100vh',
    color: '#196666',
    textAlign: 'center',
    backgroundImage: 'url(\'../public/images/shutterstock_1101884330.jpg\')'
  }
  return (
    <div style={homeStyles}>
      <div>
        <h1><b>Lux</b></h1>
        <h2>Welcome to a New World of Possiblities</h2>
        <p></p>
        <h3>We hope you enjoy your journey to the light that shines within ALL of us. May this portal help you to become a better YOU.</h3>
        <p></p>
        <h4><i>A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. -Winston Churchill</i></h4>
      </div>
    </div>
  )
}
export default Home
