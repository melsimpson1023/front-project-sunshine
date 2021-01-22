import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './LightUpTheDarkness.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const LightUpTheDarkness = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      LIGHT UP THE DARKNESS - Motivational Video
      </p>
    </div>
    <div>
      <a href='./LightUpTheDarkness.mp4'>
      </a>

    </div>
  </div>
)

export default LightUpTheDarkness
