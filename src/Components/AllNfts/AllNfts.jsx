/** @format */
import "./AllNfts.css";
import React from "react";
import { Link } from "react-router-dom";

function AllNfts({ blogs }) {
  return (
    <>
      {blogs.map((info) => {
        return (
          <div key={info.id} className='allNfts-cards-wrap'>
            <Link to={`/list/${info.id}`}>
              <figure className='allNfts-card' key={info.id}>
                <div className='allNfts-card-head'>
                  <img src={info.img} alt='' />
                </div>
                <h3>{info.title}</h3>
                <h2>{info.subTitle}</h2>
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
          </div>
        );
      })}
    </>
  );
}

export default AllNfts;
