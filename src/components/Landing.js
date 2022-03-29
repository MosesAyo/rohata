import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Rocket from '../assets/images/rocket.png';


export default function Landing() {

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const navigateToSearch = ()=>{
      return navigate('/search', { state: {searchText: searchText} });
  }
  return (
    <div>
        <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto pb-10 md:mt-[100px] mt-[100px]">
            <div className='my-auto'>
                <h1 className="font-bold text-5xl md:text-6xl ml-8 text-left leading-tight">Shop with <span className="Text-underline">confidence</span> Anywhere in Nigeria</h1>
                <p className='text-left ml-8 text-[#858585] mt-6 text-[15px] sm:text-[24px]'>Get the best value for your money</p>
            </div>
            <div className='p-24 z-[9990] hidden md:block'>
              <img src={Rocket} alt="" />
            </div>
        </div>
        <div className='h-[60px] content-start mx-8 mb-10 grid grid-flow-row-dense grid-cols-3 grid-rows-3 border border-[#C6C6C6] pl-2  rounded-xl mt-20 lg:max-w-[400px] md:max-w-[400px] sm:max-w-[400px]' >
          <input
            onChange={(e)=>setSearchText(e.target.value)}
            value={searchText}
            className='text-left content-start h-[58px]  col-span-2 focus:outline-none pr-2'
            placeholder='Search for anything'
            />
            
            <button
              onClick={navigateToSearch}
              className='App-background-primary h-[58px] text-white rounded-r-lg flex flex-col justify-center '
              >
              <p className='mx-auto'>
                Search
              </p>
            </button>
        </div>
    </div>
  )
}
