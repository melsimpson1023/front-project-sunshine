import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import '../../index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// import YouTubePlayer from 'react-player/lib/players/YouTube'

const Video4 = () => {
  // const backgroundImageUrl = ('../../public/images/shutterstock_1101884330.jpg')
  const videoStyles = {
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
    textAlign: 'center'
  }
  return (
    <div style={videoStyles}>
      <div>
        <h1><b>Lux</b></h1>
        <h2>Welcome to a New World of Possiblities</h2>
        <p></p>
        <h3>We hope you enjoy your journey to the light that shines within ALL of us. May this portal help you to become a better YOU.</h3>
        <p></p>
        <p></p>
        <ReactPlayer url='https://www.youtube.com/watch?v=tbnzAVRZ9Xc' />
        <br></br>
        <Link to={'/video/'}><Button>Return to Videos</Button></Link>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=KwgxNAdK_RQ&list=PLhkEzHNMglDT6Xdt0YTN2QE_lLtZ_bY4_&index=19' />} */}
      </div>
    </div>
  )
}
export default Video4
