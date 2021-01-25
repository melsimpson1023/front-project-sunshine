import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './Grit.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const Grit = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.css" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      IF... You can Dream, But not Make Dreams Your Master - Rudyard Kipling
      </p>
    </div>
    <div>
      <a href='./IfYouCanDream.mp4'>
      </a>

    </div>
  </div>
)

export default Grit
