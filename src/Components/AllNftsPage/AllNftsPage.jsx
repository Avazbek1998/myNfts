/** @format */

import React from "react";
import AllNfts from "../AllNfts/AllNfts";
import Fetch from "../Fetch/Fetch";
function AllNftsPage() {
  const { data } = Fetch("https://my-json-server.typicode.com/Avazbek1998/db.json/allNfts");
  return (
    <>
      <main className='main all-nfts-page'>
        <div className='allNfts-cards-bottom'>
          <AllNfts blogs={data} />
        </div>
      </main>
    </>
  );
}

export default AllNftsPage;
