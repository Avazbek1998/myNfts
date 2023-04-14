/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "../Fetch/Fetch";
function AllNftsList() {
  const { id } = useParams();
  const { data } = Fetch(" http://localhost:8000/allNfts/" + id);
  const history = useNavigate();
  const funcDelete = () => {
    fetch("  http://localhost:8000/newElemnts/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div className='all-list-wrap'>
      <figure className='allNfts-card' key={data.id}>
        <div className='allNfts-card-head'>
          <img src={data.img} alt='' />
        </div>
        <h3>{data.title}</h3>
        <h2>{data.subTitle}</h2>
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
        <button onClick={funcDelete} className='gray-btn all-list-btn'>
          {data.deleteBtn}
        </button>
      </figure>
    </div>
  );
}

export default AllNftsList;
