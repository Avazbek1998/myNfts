/** @format */

import React from "react";
import "./Home.css";
import mainImg from "../imgs/mainImg.svg";
import art1 from "../imgs/art1.svg";
import art2 from "../imgs/art2.svg";
import marketplace1 from "../imgs/marketplace1.svg";
import marketplace2 from "../imgs/marketplace2.svg";
import marketplace3 from "../imgs/marketplace3.svg";
import exploreImg from "../imgs/explore-img.svg";
import AllNfts from "../AllNfts/AllNfts";
import Fetch from "../Fetch/Fetch";
import Fetch2 from "../Fetch/Fetch2";
import "swiper/css/pagination";
import Added from "../Added/Added";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
function Home() {
  const { data } = Fetch("https://my-json-server.typicode.com/Avazbek1998/db.json/allNfts");
  const { newItem } = Fetch2("https://my-json-server.typicode.com/Avazbek1998/db.json/allNfts2");
  return (
    <>
      <section className='discover'>
        <div className='discover-wrap'>
          <div className='discover-left'>
            <h1 className='discover-title'>
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className='discover-text'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='discover-btn btn'>
              Explore now
              <span className='discover-arrow'>
                <i class='bx bx-right-arrow-alt'></i>
              </span>
            </button>
          </div>
          <div className='discover-right'>
            <img src={mainImg} alt='' className='discover-img' />
          </div>
        </div>
      </section>
      <main className='main'>
        <section className='allNfts-cards'>
          <div className='allNfts-cards-top'>
            <h2 className='allNfts-cards-top-title'>All Nfts</h2>
          </div>
          <div className='allNfts-cards-bottom'>
            <AllNfts blogs={data} />
          </div>
        </section>
        <section className='added-cards'>
          <Added newBlogs={newItem} />
        </section>
        <section className='auctions'>
          <div className='auctions-top'>
            <h1 className='auctions-top-title'>Hot Auctions</h1>
          </div>
          <div className='auctions-bottom'>
            <>
              <Swiper
                spaceBetween={24}
                slidesPerView={4.5}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4.5,
                    spaceBetween: 24,
                  },
                }}
                modules={[FreeMode, Pagination]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                {data.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className='allNfts-cards-wrap'>
                        <figure className='allNfts-card' key={item.id}>
                          <div className='allNfts-card-head'>
                            <img src={item.img} alt='' />
                          </div>
                          <h3>{item.title}</h3>
                          <h2>{item.subTitle}</h2>
                          <figcaption className='card-bottom'>
                            <div className='card-bottom-left'>
                              <h6>{item.priceText}</h6>
                              <h5>{item.discount}</h5>
                              <h6>{item.price}</h6>
                            </div>
                            <div className='card-bottom-right'>
                              <h6>{item.offer}</h6>
                              <h5>{item.discount2}</h5>
                              <h6>{item.time}</h6>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          </div>
        </section>
        <section className='art'>
          <div className='art-wrap'>
            <div className='art-wrap__card-left'>
              <div className='art-cards'>
                <figure className='art-card art-cart-position-bottom'>
                  <img className='art-card-img' src={art1} alt='' />
                  <figcaption className='art-card-caption'>
                    <h4>Awkward Astronauts</h4>
                    <h5>pinochio_2</h5>
                  </figcaption>
                </figure>
                <figure className='art-card art-cart-position-top'>
                  <img className='art-card-img' src={art2} alt='' />
                  <figcaption>
                    <h4>Awkward Astronauts</h4>
                    <h5>pinochio_2</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className='art-wrap__card-right'>
              <article className='art-article'>
                <div className='art-article-top'>
                  <h1 className='title'>List your art on MyNFT</h1>
                  <p>
                    Are you an artist or NFT project creator? Get in touch with
                    us to get your content on Nifty Gateway!
                  </p>
                </div>
                <div className='art-article-bottom'>
                  <button className='art-btn btn'>I am an artist</button>
                  <button className='art-btn art-btn2'>I am a buyer</button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className='marketplace'>
          <div className='marketplace-wrap'>
            <div className='marketplace-card-left'>
              <h1>The Premier Marketplace for NFTs</h1>
              <p>
                MyNFT is the premier marketplace for item in blockchain, which
                are digital items you can truly own. Digital Items have existed
                for a long time, but never like this.
              </p>
              <button className='marketplace-btn gray-btn'>Learn more</button>
            </div>
            <div className='marketplace-card-right'>
              <div className='marketplace-card-img-left'>
                <img src={marketplace1} alt='' />
              </div>
              <div className='marketplace-card-img-right'>
                <img src={marketplace2} alt='' />
                <img src={marketplace3} alt='' />
              </div>
            </div>
          </div>
        </section>
        <section className='explore'>
          <div className='explore-wrap'>
            <div className='explore-left'>
              <h1 className='title'>Why MyNFT</h1>
              <p>
                Are you an artist or NFT project creator? Get in touch with us
                to get your content on Nifty Gateway!
              </p>
              <button className='explore-btn btn'>
                Explore the marketplace
              </button>
            </div>
            <div className='explore-right'>
              {/* <img src={exploreImg} alt='' /> */}
              <iframe  className="explore-video"  src="https://www.youtube.com/embed/jORoCBIZ79k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <section className='create'>
          <div className='create-wrap'>
            <div className='create-top'>
              <h1 className='title'>Create and Sell your NFTs</h1>
            </div>
            <div className='create-bottom'>
              <figure className='create-card'>
                <span className='create-icon-wrap'>
                  <i class='bx bxs-wallet bx-flashing'></i>
                </span>
                <figcaption>
                  <h2>Set up your wallet</h2>
                  <p className='create-p'>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. We will help to sell your NFTs!
                  </p>
                </figcaption>
              </figure>
              <figure className='create-card'>
                <span className='create-icon-wrap'>
                  <i class='bx bxs-category-alt bx-flashing'></i>
                </span>
                <figcaption>
                  <h2>Set up your wallet</h2>
                  <p className='create-p'>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. We will help to sell your NFTs!
                  </p>
                </figcaption>
              </figure>
              <figure className='create-card'>
                <span className='create-icon-wrap'>
                  <i class='bx bx-image bx-flashing'></i>
                </span>
                <figcaption>
                  <h2>Set up your wallet</h2>
                  <p className='create-p'>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. We will help to sell your NFTs!
                  </p>
                </figcaption>
              </figure>
              <figure className='create-card'>
                <span className='create-icon-wrap'>
                  <i class='bx bxl-telegram bx-flashing'></i>
                </span>
                <figcaption>
                  <h2>Set up your wallet</h2>
                  <p className='create-p'>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. We will help to sell your NFTs!
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
