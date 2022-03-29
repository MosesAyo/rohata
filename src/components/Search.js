import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar'
import SearchCard from './SearchCard'

export default function Search() {

  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchAds = (e)=>{
    const userToken = localStorage.getItem('jwtToken');
    console.log("Trying to search")
    e.preventDefault(); 
    axios
    .post(
        'https://rohata.herokuapp.com/api/advertisements/search',
          {
              text: searchText
          },
          {
            'headers':{
              'Authorization': userToken
            }
          }
        )
        .then(
            async (res) => {
                console.log(res.data)
                if(res.data){
                  setSearchResult(res.data.data)
                }
            })
        .catch((err) => {
            if(err){
                setError(err.response.data.msg)
                console.log(err.response.status);
            }
        }
    );
}

  return (
    <div className='bg-[#F3F3F3] '>
        <Navbar />
        <div className='px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 min-h-screen '>
         <div className='h-[60px] content-start grid grid-flow-row-dense grid-cols-3 grid-rows-3 border border-[#C6C6C6] max-w-lg mx-auto  rounded-xl pl-2 bg-white mt-[20%] my-auto'>
                  <input
                    className='text-left content-start h-[58px] w-full col-span-2 focus:outline-none pr-2'
                    placeholder='Search for anything'
                    onChange={(e)=>setSearchText(e.target.value)}
                    value={searchText}
                    name="search"
                   />
                   
                    <button 
                    onClick={searchAds}
                      className='App-background-primary h-[58px] text-white rounded-r-lg flex flex-col justify-center'
                    >
                      <p className='text-center mx-auto'>Search</p>
                    </button>
                </div>
                <div className='mt-24'>
                {searchResult.map((result, i) => (
                    <SearchCard key={i} data={result} />
                    ))}
                </div>
        </div>
    </div>
  )
}
