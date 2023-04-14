/** @format */
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatItem from "./Components/CreatItem/CreatItem";
import Home from "./Components/Home/Home";
import AllNfts from "./Components/AllNfts/AllNfts";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AllNftsPage from "./Components/AllNftsPage/AllNftsPage";
import AllNftsList from "./Components/AllNfts/AllNftsList";
import Error from "./Components/Error/Error";
import AddedList from "./Components/Added/AddedList";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
const { useLayoutEffect, useRef } = React;

function App() {
  const app = useRef();
  const circle = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });

    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AllNftsPage' element={<AllNftsPage />} />
          <Route path='/creatItem' element={<CreatItem />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/list/:id' element={<AllNftsList />} />
          <Route path='/addList/:id' element={<AddedList />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
