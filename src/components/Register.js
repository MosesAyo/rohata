import React, { useState } from 'react'
import itemImage from '../assets/images/pl3.jpg';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    // const onChange = (val, func)=>{
    // }

    // localStorage.setItem('myData', data);

    // localStorage.getItem('myData');


    const registerUser = (e)=>{
        console.log("Sending")
        // e.preventDefault();

        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(password);
        axios
        .post('https://rohata.herokuapp.com/api/users/register', {
            name,
            email,
            password,
            phone
        })
        .then(
            async (res) => {
                console.log(res.data.token)
                localStorage.setItem('jwtToken', res.data.token);
                localStorage.setItem('name', res.data.user.name);
                localStorage.setItem('email', res.data.user.email);
                localStorage.setItem('phoneNumber', res.data.user.phoneNumber);
                localStorage.setItem('notification', res.data.user.notification);
                setAuthToken(res.data.token);
                navigate('/', { state: {} });
                // console.log(res.status)
                // console.log('Got a response')
                // console.log(JSON.stringify(res.data.token))
                // console.log(JSON.stringify(res.data.user.name))
                // console.log(JSON.stringify(res.data.user.email))
                // console.log(JSON.stringify(res.data.user.phoneNumber))
                // console.log(JSON.stringify(res.data.user.notification))
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
    <div>
        <div className='grid grid-cols-2 grid-flow-col bg-[#fff] h-screen'>
            <div className="h-screen">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    <p className="App-color Brand-text">Rohata</p>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please enter your login details    
                    </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className='pt-2'>
                            <label htmlFor= "name" className="sr-only">Fullname</label>
                            <input 
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                                id="name" 
                                name="name" 
                                type="name" 
                                autoComplete="name" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Full name" 
                            />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor= "email-address" className="sr-only">Email address</label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                id="email-address" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Email address" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor= "phone" className="sr-only">Phone number</label>
                            <input 
                                onChange={(e)=>setPhone(e.target.value)}
                                value = {phone}
                                id="phone" 
                                name="phone" 
                                type="phone" 
                                autoComplete="phone" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Phone number" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input 
                                onChange={(e)=>{
                                    // console.log(e.target.value)
                                    setPassword(e.target.value)
                                }}
                                value = {password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required className="h-16 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Password"
                                />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                        </div>
                    </div>

                    <div>
                        <button 
                            onClick={registerUser}
                            type="button" 
                            className="h-16 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className='my-auto'>

                        Sign up
                        </p>
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="">
                <img className='h-screen object-cover' src={itemImage} />
            </div>
        </div>
    </div>
  )
}
