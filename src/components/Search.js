import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SearchCard from './SearchCard'

export default function Search() {
  return (
    <div className='bg-[#F3F3F3] '>
        <Navbar />
        <div className='px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6'>
         <div className='h-[60px] content-start grid grid-flow-row-dense grid-cols-3 grid-rows-3 border border-[#C6C6C6] max-w-lg mx-auto  rounded-xl pl-2 bg-white mt-24'>
                  <input
                    className='text-left content-start h-[58px] w-full col-span-2 focus:outline-none pr-2'
                    placeholder='Search for anything'
                   />
                   
                    <Link to="/search"
                    className='App-background-primary h-[58px] text-white rounded-r-lg flex flex-col justify-center'
                    >
                      Search 
                    </Link>
                </div>
                <div className='mt-24'>
                    <SearchCard />
                </div>
        </div>
    </div>
  )
}
