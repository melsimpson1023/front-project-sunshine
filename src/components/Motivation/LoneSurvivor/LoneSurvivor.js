import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './LoneSurvivor.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const LoneSurvivor = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      Lone Survivor Intro - Navy Seals training
      </p>
    </div>
    <div>
      <a href='./LoneSurvivor.mp4'>
      </a>

    </div>
  </div>
)

export default LoneSurvivor
