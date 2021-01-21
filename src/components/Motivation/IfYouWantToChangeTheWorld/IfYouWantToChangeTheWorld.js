import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import './scss/video-react.scss'

// import ifYouCanDreamImage from './IfYouCanDreamImage.jpg'
import Video from './IfYouWantToChangeTheWorld.mp4'

// const buttonStyle = {
//  outline: 'none'
// }

const IfYouWantToChangeTheWorld = () => (
  <div>
    <link rel="stylesheet" href="/scss/video-react.scss" />
    <Player
      playsInline
      src={Video}
    />
    <div>
      <p className="Title">
      If You Want to Change the World, Start Off by Making Your Bed - William McRaven, US Navy Admiral
      </p>
    </div>
    <div>
      <a href='./IfYouWantToChangeTheWorld.mp4'>
      </a>

    </div>
  </div>
)

export default IfYouWantToChangeTheWorld
