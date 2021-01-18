import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
// import ReactPlayer from 'react-player/youtube'
import '../../index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// import YouTubePlayer from 'react-player/lib/players/YouTube'

const Video = () => {
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
        <h4><i>A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. -Winston Churchill</i></h4>
        <br></br>
        <h4>Lone Survivor Intro - Navy Seals training</h4>
        <Link to={'/video1/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>If You Want to Change the World, Start Off by Making Your Bed - William McRaven, US Navy Admiral</h4>
        <Link to={'/video2/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>Life Is Not FAIR | Mathew McConaughey | Let us Become Successful</h4>
        <Link to={'/video3/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>WATCH THIS EVERYDAY AND CHANGE YOUR LIFE - Denzel Washington Motivational Speech 2020</h4>
        <Link to={'/video4/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>The Most Eye Opening 10 Minutes Of Your Life | David Goggins</h4>
        <Link to={'/video5/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>IF... You can Dream, But not Make Dreams Your Master - Rudyard Kipling</h4>
        <Link to={'/video6/'}><Button>Watch Video</Button></Link>
        <br></br>
        <h4>LIGHT UP THE DARKNESS - Motivational Video</h4>
        <Link to={'/video7/'}><Button>Watch Video</Button></Link>

      </div>
    </div>
  )
}
export default Video
