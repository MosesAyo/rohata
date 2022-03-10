import React from 'react'

import Landing from './Landing';
import Footer from './Footer';
import Navbar from './Navbar';
import BackgroundPath from '../assets/svg/path.svg';
import TopCategories from './TopCategories';


export default function Home() {
  return (
    <div>
        <div className="absolute top-0 right-0">
              <img src={BackgroundPath} alt="" />
            </div>
        <Navbar/>
        <Landing/>
        <TopCategories/>
    </div>
  )
}