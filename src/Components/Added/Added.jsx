/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Added.css";
function Added({ newBlogs }) {
  return (
    <div className='added-list-wrap'>
      {newBlogs.map((e) => {
        return (
          <Link to={`/addList/${e.id}`}>
            <figure className='allNfts-card' key={e.id}>
              <div className='allNfts-card-head'>
                <img src={e.img} alt='' />
              </div>
              <h3>{e.title}</h3>
              <h2>{e.subTitle}</h2>
              <figcaption className='card-bottom'>
                <div className='card-bottom-left'>
                  <h6>Price</h6>
                  <h5>1.0 ETH</h5>
                  <h6>$130,729.12</h6>
                </div>
                <div className='card-bottom-right'>
                  <h6>$130,729.12</h6>
                  <h5>1.5 ETH</h5>
                  <h6>4hrs left</h6>
                </div>
              </figcaption>
            </figure>
          </Link>
        );
      })}
    </div>
  );
}

export default Added;
