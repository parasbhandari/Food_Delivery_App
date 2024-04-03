import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
           <img src={assets.logo} alt="" />
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nisi, quibusdam voluptate adipisci assumenda obcaecati consectetur accusamus dolore nemo asperiores saepe consequuntur nesciunt eius eos commodi iure doloribus, aperiam quis.
           </p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className='footer-content-center'>
           <h2>COMPANY</h2>
           <li>Home</li>
           <li>About us</li>
           <li>Delivery</li>
           <li>Privacy policy</li>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+21-567-98789</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer