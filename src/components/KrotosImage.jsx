import React from 'react'
import './KrotosImage.css'
import IMAGES from '../assets/images/images'

export default function KrotosImage() {
  return (  
    <div className='krotos_image_wrapper'>
        <img src={IMAGES[4]} className='krotos_img'/>
    </div>
  )
}
