/** @format */

import React from "react";
import AllNfts from "../AllNfts/AllNfts";
import Fetch from "../Fetch/Fetch";
function AllNftsPage() {
  const { data } = Fetch(" http://localhost:8000/allNfts");
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
