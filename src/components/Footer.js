import React from 'react'
import './css/footer.css';

 const footer = function Footer() {
  return (
      <div className="footer-background ">
            <div class="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
                <div className='mt-10 mb-10'>
                    <h1 className='text-white font-bold text-[34px] text-left'>Rohata</h1>
                    <div className='h-[60px] content-start grid grid-flow-row-dense grid-cols-3 grid-rows-3 border border-[#C6C6C6] pl-2  rounded-xl mt-20 bg-[#626262]'>
                        <input
                            type='email'
                            className='text-left content-start h-[58px] w-full col-span-2 text-white bg-[#626262] focus:outline-none pr-2'
                            placeholder='example@mail.com'
                        />
                        
                        <button
                        className='App-background-primary h-[58px] text-white rounded-r-xl'
                        >
                        Submit 
                        </button>
                    </div>
                    <p className='text-[#8A8FB9] text-left mt-5'>
                        Contact Info
                    </p>
                    <p className='text-[#8A8FB9] text-left'>
                        support@rohata.com
                    </p>
                </div>
                <div className='mt-10 mb-10  text-left'>
                    <h2 className='text-white text-[22px] font-bold'>Categories</h2>
                    <div>
                        <p className='text-[#8A8FB9] mt-5'>
                            Laptops &amp; computers
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                            Cameras &amp; hotography
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                            Smart Phones &amp; Tablets
                        </p>
                    </div>
                </div>
                <div className='mt-10 mb-10  text-left'>
                    <h2 className='text-white text-[22px] font-bold'>Customer Care</h2>
                    <div>
                        <p className='text-[#8A8FB9] mt-5'>
                        My Account
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                        Discount
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                        Returns
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                        Orders History
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                        Order Tracking
                        </p>
                    </div>
                </div>
                <div className='mt-10 mb-10  text-left'>
                    <h2 className='text-white text-[22px] font-bold'>Pages</h2>
                    <div>
                        <p className='text-[#8A8FB9] mt-5'>
                            Blog
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                            Browse the shop
                        </p>
                        <p className='text-[#8A8FB9] mt-5'>
                            Smart Phones &amp; Tablets
                        </p>
                    </div>
                </div>
                </div>
      </div>
  )
}

export default footer;
