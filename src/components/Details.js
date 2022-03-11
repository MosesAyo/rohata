import React from 'react'
import Navbar from './Navbar'
import itemImage from '../assets/images/pl.png';

export default function Details() {
  return (
    <div className='bg-[#F3F3F3] '>
        <Navbar />
        <div className='max-w-3xl mx-auto mt-36'>
            <div className='grid grid-cols-2 grid-flow-col gap-4 bg-[#fff]'>
                <div class="">
                    <img className='h-[400px] object-cover' src={itemImage} />
                </div>
                <div class="text-left p-2">
                    <p className='font-bold text-[#111C85] font-[20px]'>
                        Soft Sofa
                    </p>

                    <p className='text-[#111C85]'>
                        $200
                    </p>

                    <p className='text-[#111C85]'>
                        Color:
                    </p>

                    
                    <p className='mt-2 text-[#9295AA]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                    </p>

                    <p className='text-[#111C85]'>
                        Tags:
                    </p>
                </div>
            </div>
        </div>


        <div className='bg-[#F9F8FE]'>
        <div class="w-1/2 mx-auto mt-4  rounded">
                        {/* <!-- Tabs --> */}
                        <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
                          <li class="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50"><a id="default-tab" href="#first">All</a></li>
                          <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#second">Clothes</a></li>
                          <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#third">Electronics</a></li>
                          <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#fourth">Others</a></li>
                        </ul>

                        {/* <!-- Tab Contents --> */}
                        <div id="tab-contents">
                          <div id="first" class="p-4">
                            First tab
                          </div>
                          <div id="second" class="hidden p-4">
                            Second tab
                          </div>
                          <div id="third" class="hidden p-4">
                            Third tab
                          </div>
                          <div id="fourth" class="hidden p-4">
                            Fourth tab
                          </div>
                        </div>
                      </div>
        </div>
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