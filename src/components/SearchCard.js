import React from 'react'
import { Link } from 'react-router-dom';

export default function SearchCard({data}) {
  return (
    <Link to="/details">
    <div className='max-w-3xl mx-auto mt-6'>
        <div className='grid grid-cols-3 grid-flow-col gap-4 bg-[#fff]'>
            <div className="">
                <img src={data.image} />
            </div>
            <div className="col-span-2 text-left p-2">
                <p className='font-bold text-[#111C85] font-[20px]'>
                    {data.productName}
                </p>

                <p className='text-[#111C85]'>
                ₦ {data.price}
                </p>
                <p className='mt-2 text-[#9295AA]'>
                {data.description}
                </p>
            </div>
        </div>
    </div>
    </Link>
  )
}
