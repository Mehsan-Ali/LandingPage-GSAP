import React from 'react'
import HeroImage from '../../public/images/Cloud.jpg'
const HeroMain = () => {
  return (
    <div style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }}>
      
    </div>
  )
}

export default HeroMain
