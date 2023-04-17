/** @format */
import "./Added.css";
import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Fetch2 from "../Fetch/Fetch2";
function AddedList() {
  const { id } = useParams();
  const { newItem } = Fetch2("https://my-json-server.typicode.com/Avazbek1998/db.json/allNfts" + id);
  const history = useNavigate();
  const funcDelete = () => {
    fetch("https://my-json-server.typicode.com/Avazbek1998/db.json/newElemnts" + newItem.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div key={newItem.id} className='all-list-wrap'>
      <figure className='allNfts-card' key={newItem.id}>
        <div className='allNfts-card-head'>
          <img src={newItem.img} alt='' />
        </div>
        <h3>{newItem.title}</h3>
        <h2>{newItem.subTitle}</h2>
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
          Delete
        </button>
      </figure>
    </div>
  );
}
export default AddedList;
