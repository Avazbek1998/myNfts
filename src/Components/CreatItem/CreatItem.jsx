/** @format */

import "./CreatItem.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreatItem() {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [propName, setPropName] = useState();
  const [propValue, setPropValue] = useState();
  const history = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    const newData = { img, title, subTitle };
    fetch("https://my-json-server.typicode.com/Avazbek1998/db.json/allNfts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      history("/");
    });
  };
  return (
    <div>
      <main className='main'>
        <section className='creat-item-wrap'>
          <div className='creat-item-top'>
            <h1 className='title'>Create item</h1>
          </div>
          <div className='creat-item-bottom'>
            <div className='creat-item-bottom-left'>
              <figure className='allNfts-card'>
                <div className='allNfts-card-head'>
                  <img src={img} alt='' />
                </div>
                <h3>{title}</h3>
                <h2>{subTitle}</h2>
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
            </div>
            <div className='creat-item-bottom-right'>
              <form onSubmit={sendData} action='' className='form creat-item-form'>
                <div className='creat-form-top'>
                  <label htmlFor=''>Upload img link</label>
                  <input
                    onChange={(e) => {
                      setImg(e.target.value);
                    }}
                    value={img}
                    type='text'
                    className='input-text'
                    required
                    placeholder='img link'
                  />
                  <label htmlFor=''>Name</label>
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    type='text'
                    className='input-text'
                    required
                    placeholder='Item name'
                  />
                  <label htmlFor=''>Description (optionnal)</label>
                  <textarea
                    onChange={(e) => {
                      setSubTitle(e.target.value);
                    }}
                    value={subTitle}
                    type='text'
                    className='input-text'
                    required
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    placeholder='Description'></textarea>
                </div>
                <div className='creat-form-bottom'>
                  <label htmlFor=''>Property (optionnal)</label>
                  <div className='creat-form-bottom-box'>
                    <div className='creat-form-bottom-left'>
                      <input
                        onChange={(e) => {
                          setPropName(e.target.value);
                        }}
                        value={propName}
                        type='text'
                        className='input-text'
                        placeholder='Property name'
                      />
                    </div>
                    <div className='creat-form-bottom-right'>
                      <input
                        onChange={(e) => {
                          setPropValue(e.target.value);
                        }}
                        value={propValue}
                        type='text'
                        className='input-text'
                        placeholder='Value'
                      />
                    </div>
                  </div>
                </div>
                <button className='gray-btn'>Create item</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreatItem;
