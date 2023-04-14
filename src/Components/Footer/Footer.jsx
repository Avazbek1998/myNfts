/** @format */

import React from "react";
import "./Footer.css";
import logo from "../imgs/logo.svg";
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='foot-wrap'>
          <div className='foot-first'>
            <div className='foot-logo-wrap'>
              <img src={logo} alt='' />
              <span>MyNFT.com</span>
            </div>
            <p className='foot-first-text text'>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className='foot-second'>
            <label htmlFor=''>Market Place</label>
            <ul>
              <li>
                <a href=''>Explore</a>
              </li>
              <li>
                <a href=''>How it works</a>
              </li>
              <li>
                <a href=''>Jobs</a>
              </li>
              <li>
                <a href=''>Help center</a>
              </li>
              <li>
                <a href=''>Blogs</a>
              </li>
            </ul>
          </div>
          <div className='foot-thirth'>
            <label htmlFor=''>Company</label>
            <ul>
              <li>
                <a href=''>About Us</a>
              </li>
              <li>
                <a href=''>Contact Us</a>
              </li>
              <li>
                <a href=''>Feature</a>
              </li>
              <li>
                <a href=''>Discover</a>
              </li>
            </ul>
          </div>
          <div className='foot-fourth'>
            <label htmlFor=''>Get our lastest updates</label>
            <div className='subscribe-wrap'>
              <div className='subscribe-left'>
                <i class='bx bx-envelope bx-flashing'></i>
              </div>
              <div className='subscribe-right'>
                <input type='text' placeholder='Your email' />
                <button className='subscribe-btn'>Subcribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
