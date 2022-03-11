import React from 'react'
import { Link } from 'react-router-dom';

import Rocket from '../assets/images/rocket.png';
export default function Landing() {
  return (
    <div>
        <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto pb-10">
            <div className='my-auto'>
                <h1 className="font-bold text-6xl ml-8 text-left leading-tight">Shop with <span className="Text-underline">confidence</span> Anywhere in Nigeria</h1>
                <p className='text-left ml-8 text-[#858585] mt-6 text-[24px]'>Get the best value for your money</p>

                <div className='h-[60px] content-start ml-8 grid grid-flow-row-dense grid-cols-3 grid-rows-3 border border-[#C6C6C6] pl-2  rounded-xl mt-20'>
                  <input
                    className='text-left content-start h-[58px] w-full col-span-2 focus:outline-none pr-2'
                    placeholder='Search for anything'
                   />
                   
                    <Link to="search"
                    className='App-background-primary h-[58px] text-white rounded-r-lg flex flex-col justify-center'
                    >
                      Search 
                    </Link>
                   

                </div>
            </div>
            <div className='p-24'>
              <img src={Rocket} alt="" />
            </div>
        </div>
    </div>
  )
}
