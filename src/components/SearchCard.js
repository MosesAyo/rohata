import React from 'react'
import { Link } from 'react-router-dom';
import itemImage from '../assets/images/pl.png';

export default function SearchCard() {
  return (
    <Link to="/details">
    <div className='max-w-3xl mx-auto mt-6'>
        <div className='grid grid-cols-3 grid-flow-col gap-4 bg-[#fff]'>
            <div class="">
                <img src={itemImage} />
            </div>
            <div class="col-span-2 text-left p-2">
                <p className='font-bold text-[#111C85] font-[20px]'>
                    Soft Sofa
                </p>

                <p className='text-[#111C85]'>
                    $200
                </p>
                <p className='mt-2 text-[#9295AA]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                </p>
            </div>
        </div>
    </div>
    </Link>
  )
}
