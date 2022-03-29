import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {useLocation } from 'react-router-dom';

export default function Details() {

  const {state} = useLocation();
  // const [productDetails, setProductDetails] = useState();
  
  // const { id, color } = state; // Read values passed on state

  useEffect(() => {
    // setProductDetails(state)
    console.log(state)
  }, [state]);

  return (
    <div className='bg-[#F3F3F3] '>
        <Navbar />
        <div className='max-w-3xl mx-auto mt-36 pb-36'>
            <div className='grid grid-cols-2 grid-flow-col gap-4 bg-[#fff]'>
                <div className="">
                    <img className='h-[400px] object-cover' src={state.image} />
                </div>
                <div className="text-left p-2">
                    <p className='font-bold text-[#111C85] font-[20px]'>
                        {state.productName}
                    </p>

                    <p className='text-[#111C85]'>
                    ₦ {state.price}
                    </p>

                    <p className='text-[#111C85]'>
                        Color: {state.color}
                    </p>

                    
                    <p className='mt-2 text-[#9295AA]'>
                    {state.description}
                    </p>

                    <p className='text-[#111C85]'>
                        {state.additional}
                    </p>

                    <p className='text-[#111C85] mt-10'>
                        Phone Number: {state.user.phoneNumber}
                    </p>
                </div>
            </div>
        </div>


        {/* <div className='bg-[#F9F8FE]'>
        <div className="w-1/2 mx-auto mt-4  rounded">
                        
                        <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
                          <li className="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50"><a id="default-tab" href="#first">All</a></li>
                          <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#second">Clothes</a></li>
                          <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#third">Electronics</a></li>
                          <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#fourth">Others</a></li>
                        </ul>

                   
                        <div id="tab-contents">
                          <div id="first" className="p-4">
                            First tab
                          </div>
                          <div id="second" className="hidden p-4">
                            Second tab
                          </div>
                          <div id="third" className="hidden p-4">
                            Third tab
                          </div>
                          <div id="fourth" className="hidden p-4">
                            Fourth tab
                          </div>
                        </div>
                      </div>
        </div> */}
    </div>
  )
}





{/* <script>
    let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {

      tabTogglers[i].parentElement.classList.remove("border-blue-400", "border-b",  "-mb-px", "opacity-100");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");

    }
    e.target.parentElement.classList.add("border-blue-400", "border-b-4", "-mb-px", "opacity-100");
  });
});

document.getElementById("default-tab").click();

                </script> */}