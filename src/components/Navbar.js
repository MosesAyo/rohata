import React, {useState} from 'react'

import {Link} from 'react-router-dom';
import { Transition } from "@headlessui/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const userToken = localStorage.getItem('jwtToken');
    const userName = localStorage.getItem('name');
    console.log(userToken)
  return (
    <div className='z-[9999]'>
        <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">

              <Link to="/">
                    <p className="App-color Brand-text">Rohata</p>
                </Link>
              </div>
              
              <div className="hidden md:block">
                  <div className=''>
                    <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                        to="/create-ads"
                        className="text-black  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Sell
                    </Link>

                    <Link
                        to="/"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        My Ads
                    </Link>

                    {/* <Link
                        to="/"
                        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Account
                    </Link> */}
                    </div>
                  </div>
              </div>
            
            </div>
            {userToken?
              <div className='hidden md:block'>
                  <p>Hi, {userName}</p>
              </div>:
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:block">
                <div className="grid grid-cols-2 divide-x">
                    <div className="pr-4">
                        <Link to="/register">
                            Sign up
                        </Link>
                    </div>
                    <div className="pl-4">
                    <Link to="/login">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
            }
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/create-ads"
                  className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sell
                </Link>

                <Link
                  to="/"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Ads
                </Link>
                <Link
                  to="/"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Account
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}
