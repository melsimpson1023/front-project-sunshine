import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './TheMostEyeOpening.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const TheMostEyeOpening = () => (
  <div>
    <link rel="stylesheet" href="/css/video-react.css" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      The Most Eye Opening 10 Minutes Of Your Life | David Goggins
      </p>
    </div>
    <div>
      <a href='./TheMostEyeOpening.mp4'>
      </a>

    </div>
  </div>
)

export default TheMostEyeOpening
