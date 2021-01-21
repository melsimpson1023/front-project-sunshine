import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './LifeIsNotFair.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const LifeIsNotFair = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      Life Is Not FAIR | Mathew McConaughey | Let Us Become Successful
      </p>
    </div>
    <div>
      <a href='./LifeIsNotFair.mp4'>
      </a>

    </div>
  </div>
)

export default LifeIsNotFair
