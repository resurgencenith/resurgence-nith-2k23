import React, { useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import config from '../App.config'


export default function Footer() {

  return (
    <>

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Resurgence<span><img style={{height: '20vh'}} src="../../assets/Images/logp.png" alt="" /></span></h3>
          <p className="footer-links">
            <Link to="/" className="link-1">Home&nbsp;</Link>
            <Link to="team">Team &nbsp;</Link>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p><span>National Instutute of Technology</span> Hamirpur, Himachal Pradesh</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p> </p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="mailto:resurgencenith@gmail.com">resurgencenith@gmail.com</a><br/>Developed and maintained by Resurgence NITH</p>
          </div>
        </div>
        <div className="footer-right">
          <p style={{color: 'white'}} className="footer-company-about">
            <span>About </span>
            {config.about}
          </p>
          <div className="footer-icons">
            <div className='footer-icon'>
            <Link to={config.instagram}>
                <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g id="Background_1_"><radialGradient cx="51.9924" cy="13.5086" gradientTransform="matrix(5.660332e-002 -1.08 0.918 4.811314e-002 -5.988 520.5566)" gradientUnits="userSpaceOnUse" id="SVGID_1_" r="684.4449"><stop offset={0} style={{stopColor: '#FED576'}} /><stop offset="0.2634" style={{stopColor: '#F47133'}} /><stop offset="0.6091" style={{stopColor: '#BC3081'}} /><stop offset={1} style={{stopColor: '#4C63D2'}} /></radialGradient><path d="M0,249.5v13.8C3.6,395.7,110.2,502,237.1,512h39C403.7,501.9,508.5,394.7,512,263.1v-13.6    C508.5,115.6,400.1,7,269.4,0.3C128.8-6.8,3.9,106,0,249.5z" fill="url(#SVGID_1_)" /></g><g id="Symbol"><g><path d="M257.2,128.6c40.8,0,45.6,0.1,61.8,0.9c14.9,0.6,22.9,3.2,28.3,5.3c7.1,2.8,12.2,6.2,17.5,11.6     c5.3,5.4,8.7,10.6,11.5,17.8c2.1,5.5,4.5,13.7,5.3,28.9c0.8,16.4,0.9,21.3,0.9,62.8s-0.1,46.4-0.9,62.8     c-0.6,15.1-3.1,23.4-5.3,28.9c-2.8,7.2-6.1,12.4-11.5,17.8c-5.3,5.4-10.4,8.8-17.5,11.6c-5.4,2.2-13.5,4.7-28.3,5.3     c-16.1,0.8-21,0.9-61.8,0.9s-45.6-0.1-61.8-0.9c-14.9-0.6-22.9-3.2-28.3-5.3c-7.1-2.8-12.2-6.2-17.5-11.6s-8.7-10.6-11.5-17.8     c-2.1-5.5-4.5-13.7-5.3-28.9c-0.8-16.4-0.9-21.3-0.9-62.8s0.1-46.4,0.9-62.8c0.6-15.1,3.1-23.4,5.3-28.9     c2.8-7.2,6.1-12.4,11.5-17.8c5.3-5.4,10.4-8.8,17.5-11.6c5.4-2.2,13.5-4.7,28.3-5.3C211.5,128.8,216.4,128.6,257.2,128.6      M257.2,100.6c-41.5,0-46.7,0.2-62.9,1s-27.4,3.4-37.1,7.2c-10.1,4-18.6,9.3-27,18c-8.5,8.7-13.7,17.3-17.6,27.6     c-3.8,9.8-6.4,21.2-7.1,37.7c-0.8,16.5-0.9,21.8-0.9,64s0.2,47.5,0.9,64c0.8,16.5,3.4,27.8,7.1,37.7c3.9,10.2,9.1,18.9,17.6,27.6     s17,14,27,18c9.7,3.9,20.9,6.5,37.1,7.2c16.3,0.8,21.5,1,62.9,1s46.7-0.2,62.9-1c16.2-0.8,27.4-3.4,37.1-7.2     c10.1-4,18.6-9.3,27-18c8.5-8.7,13.7-17.3,17.6-27.6c3.8-9.8,6.4-21.2,7.1-37.7c0.8-16.5,0.9-21.8,0.9-64s-0.2-47.5-0.9-64     c-0.8-16.5-3.4-27.8-7.1-37.7c-3.9-10.2-9.1-18.9-17.6-27.6s-17-14-27-18c-9.7-3.9-20.9-6.5-37.1-7.2     C303.9,100.8,298.6,100.6,257.2,100.6L257.2,100.6z" fill="#FFFFFF" /><path d="M257.2,176.2c-43.4,0-78.4,35.7-78.4,79.8s35.1,79.8,78.4,79.8s78.4-35.7,78.4-79.8     S300.5,176.2,257.2,176.2z M257.2,307.8c-28.1,0-50.9-23.1-50.9-51.8s22.8-51.8,50.9-51.8s50.9,23.1,50.9,51.8     C308.1,284.7,285.3,307.8,257.2,307.8z" fill="#FFFFFF" /><ellipse cx="338.7" cy={173} fill="#FFFFFF" rx="18.3" ry="18.6" /></g></g></g></svg>
            </Link>
            </div>
            <div className='footer-icon'>

            <Link to={config.github}>
                <svg enableBackground="new 0 0 512 512"  version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle cx={256} cy={256} fill="#333333" r={256} /><g><path d="M256,93.9c-89.5,0-162.1,72.6-162.1,162.1c0,70.5,45,130.4,107.8,152.8c0.3,0.1,1.4,0.5,1.7,0.6    c0.9,0.3,1.9,0.5,2.9,0.5c5.3,0,9.5-4.3,9.5-9.5c0-0.3,0-0.5,0-0.8l0,0c0-8.6,0-19.5,0-28.2c-10.3,2.1-25.9,4.1-34.4,0    c-11-5.3-16.6-12.1-21.9-25.5c-6.6-16.3-21.8-20.8-22.4-23.6c-0.6-2.9,16.1-7.2,24.7,2.7c8.6,9.9,17.3,29.7,35.8,27.8    c9.1-0.9,15-2.4,18.7-3.5c0.7-6.4,2.8-14.3,8.1-19.9c-43.5-7.2-72.5-30.6-72.5-76.5c0-20.9,6-37.1,16.6-49.2    c-1.8-10-4.8-33.2,3.2-41.3c0,0,11.3-7,43.7,15.8c12.1-2.8,25.5-4.2,39.8-4.2l0,0c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0l0,0    c14.4,0.1,27.8,1.5,39.8,4.2c32.4-22.8,43.7-15.8,43.7-15.8c8,8.2,5,31.4,3.2,41.3c10.6,12.2,16.6,28.4,16.6,49.2    c0,45.9-28.9,69.3-72.5,76.5c8.3,8.7,8.6,22.8,8.6,28.6c0,5.5,0,42.3,0,42.5c0,5.3,4.3,9.5,9.5,9.5c0.8,0,1.5-0.1,2.3-0.3    c0.2,0,0.8-0.2,1-0.3c63.5-22,109.1-82.3,109.1-153.3C418.1,166.4,345.5,93.9,256,93.9z" fill="#FFFFFF" /></g></g></svg>
            </Link>
            </div>

          </div>
        </div>
      </footer>
    
  
    </>

  )
}
