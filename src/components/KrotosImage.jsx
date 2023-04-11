import React from 'react'
import './KrotosImage.css'
import IMAGES from '../assets/images/images'
import { MouseContainer, ChasingElement } from 'react-mouse-image-move'

export default function KrotosImage() {
    let MouseContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    }
  return (  

    <div className='krotos_image_wrapper'>
        <MouseContainer
          options={{
            effectType: 'movement', // or 'movement'
            max: 20,
            scale: 1.0,
            reset:false
          }}
          styles={MouseContainerStyle}
          chasingElement={
            <div className='krotos_image_container'>
            <ChasingElement >
                
                <img src={IMAGES[4]} id='krotos_img'/>
              
            </ChasingElement>
            </div>
          }
      />
    </div>
  )
}
