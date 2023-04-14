/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../imgs/logo.svg";
// import Menu from "../Functions/Menu";
function Header() {
  const Menu = () => {
    let navList = document.querySelector(".nav-list");
    navList.classList.add("open-menu");
  };
  const Close = () => {
    let navList = document.querySelector(".nav-list");
    navList.classList.remove("open-menu");
  };
  return (
    <>
      <header className='header'>
        <div className='container'>
          <Link>
            <img src={logo} alt='' className='logo' />
          </Link>
          <nav className='navbar'>
            <ul className='nav-list'>
              <li>
                <Link onClick={Close} className='nav-link nav-active' to={""}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={Close} className='nav-link' to={"AllNftsPage"}>
                  All NFTs
                </Link>
              </li>
              <li>
                <Link
                  onClick={Close}
                  className='nav-link creatItem'
                  to={"creatItem"}>
                  Create Item
                </Link>
              </li>
              <Link
                onClick={Close}
                className='nav-link nav-btn nav-btn-for-mobile'
                to={"contact"}>
                Contact
              </Link>
              <div className='close-icon' onClick={Close}>
                <i class='bx bx-x bx-flashing'></i>
              </div>
            </ul>
          </nav>
          <Link className='nav-link nav-btn nav-btn-for-laptop' to={"error"}>
            Contact
          </Link>
          <div className='open-icon' onClick={Menu}>
            <i class='bx bx-align-left bx-flashing'></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
