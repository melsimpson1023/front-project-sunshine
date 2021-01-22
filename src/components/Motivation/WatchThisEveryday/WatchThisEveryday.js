import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './WatchThisEveryday.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const WatchThisEveryday = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      WATCH THIS EVERYDAY AND CHANGE YOUR LIFE - Denzel Washington Motivational Speech 2020
      </p>
    </div>
    <div>
      <a href='./WatchThisEveryday.mp4'>
      </a>

    </div>
  </div>
)

export default WatchThisEveryday
