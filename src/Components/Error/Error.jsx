import React from 'react'
import errorImg from "./img/error.svg"
import "./Error.css"
function Error() {
  return (
    <div>
      <section className='error'>
        <div className='error-container'>
          <div className='error-left'>
            <img src={errorImg} alt='' />
          </div>
          <div className='error-right'>
            <h1 className='error-title'>404</h1>
            <h2 className='error-subtitle'>This page is lost.</h2>
            <p className='error-text'>
              We've explored deep and wide, but we can't find the page you were
              looking for.
            </p>
            <button className='btn'>Navigate back home</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error