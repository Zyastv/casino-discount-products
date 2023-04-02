import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hours of Operation</h2>
            <p>Monday - Friday</p>
            <p>9:00 - 4:00</p>
          </div>
          <div className='footer-link-items'>
            <h2>Location</h2>
            <a href="https://www.google.com/maps/dir/36.1270122,-115.2007726/casino+discount+products+location/@36.1276529,-115.2016463,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c7c4b9f36b17:0xf6ebea8ddf5f60e1!2m2!1d-115.1937813!2d36.128566">4040 W Pioneer Ave, Las Vegas, NV 89102</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Info</h2>
            <a href="tel:702-243-3589">(702)-243-3589</a>
            <a href="mailto:kevin@cdpnv.com">kevin@cdpnv.com</a>
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <div className='copy-right-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='bottom-logo'>
              C.D.P
            </Link>
          </div>
          <small className='website-rights'>Casino Discount Products @ 2023</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
