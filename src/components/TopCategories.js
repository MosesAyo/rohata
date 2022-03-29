import React from 'react'

import car from '../assets/svg/car.svg';
import electronics from '../assets/svg/laptop.svg';
import property from '../assets/svg/house.svg';
import furnitures from '../assets/svg/furnitures.svg';
import food from '../assets/svg/food.svg';
import fashion from '../assets/svg/shirt.svg';
import toy from '../assets/svg/toy.svg';
import instrument from '../assets/svg/guitar.svg';

export default function TopCategories() {
  return (
      <div className='bg-[#F3F3F3]'>
        <div className='max-w-7xl mx-auto pt-24 pb-24'>
            <h1 className='text-[34px] font-bold'>Top Categories</h1>
            <div className='mt-24 '>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={car} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Vehicles
                        </h4>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={electronics} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Electronics
                        </h4>
                        
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={property} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Property
                        </h4>
                        
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={furnitures} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Furnitures
                        </h4>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={food} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Food
                        </h4>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={fashion} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold '>
                            Fashion
                        </h4>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={toy} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Toy
                        </h4>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff] h-[140px] w-[140px] rounded-xl flex flex-col justify-center p-10'>
                                <img src={instrument} alt="" />
                            </div>
                        </div>
                        <h4 className='mt-2 font-bold'>
                            Instrument
                        </h4>
                    </div>
                </div>
            </div>
        </div>

      </div>
  )
}
