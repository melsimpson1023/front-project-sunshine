import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './IfYouCanDream.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const IfYouCanDream = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p>
      IF... You can Dream, But not Make Dreams Your Master - Rudyard Kipling
      </p>
    </div>
    <div>
      <a href='./IfYouCanDream.mp4'>
      </a>

    </div>
  </div>
)

export default IfYouCanDream
