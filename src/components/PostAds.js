import React, { useState } from 'react'
import itemImage from '../assets/images/pl3.jpg';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Navbar from './Navbar';


export default function PostAds() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [additional, setAdditional] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');


    // const onChange = (val, func)=>{
    // }

    // localStorage.setItem('myData', data);

    // localStorage.getItem('myData');


    const fileChange = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case 'image':
                // console.log(e.target.files[0]);
                setImage(e.target.files[0]);
            break;

            default:
                setImage(e.target.files[0]);
        }
        
    }


    const newPost = async (e)=>{
        const userToken = localStorage.getItem('jwtToken');
        // console.log(userToken)
        // setAuthToken(userToken);
        console.log("Sending")
        // e.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('productName', productName);
        bodyFormData.append('price', price);
        bodyFormData.append('color', color);
        bodyFormData.append('description', description);
        bodyFormData.append('categories', categories);
        bodyFormData.append('additional', additional);
        bodyFormData.append('image', image);

        console.log(productName);
        console.log(price);
        console.log(color);
        axios
        .post('https://rohata.herokuapp.com/api/advertisements/create', 
            bodyFormData,
            { 
                headers: {
                    "Content-Type": "multipart/form-data"
                    // "Authorization" : userToken
                } 
            }
        )
        .then(
            async (res) => {
                console.log(res.data)
            })
        .catch((err) => {
            if(err){
                setError(err.response.data.msg)
                console.log(err.response);
                console.log(err.response.status);
            }
            }
        );
    }

  return (
    <div>
        <Navbar/>
        <div className='bg-[#fff] pb-40'>
            <div className="">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create An Advertisements</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Please enter product details
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className='pt-2'>
                            <label htmlFor= "name" className="sr-only">Product Name</label>
                            <input 
                                onChange={fileChange}
                                type="file"
                                id="image" 
                                name="image" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Image" 
                            />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor= "name" className="sr-only">Product Name</label>
                            <input 
                                onChange={(e)=>setProductName(e.target.value)}
                                value={productName}
                                id="productName" 
                                name="productName" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Product Name" 
                            />
                        </div>
                        <div className='pt-2'>
                            <label className="sr-only">Price</label>
                            <input 
                                onChange={(e)=>setPrice(e.target.value)}
                                value={price}
                                id="price" 
                                name="price"  
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Price" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label className="sr-only">Color</label>
                            <input 
                                onChange={(e)=>setColor(e.target.value)}
                                value = {color}
                                id="color" 
                                name="color" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Item color" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label className="sr-only">Description</label>
                            <input 
                                onChange={(e)=>setDescription(e.target.value)}
                                value = {description}
                                id="description" 
                                name="description" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Description" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label className="sr-only">Categories</label>
                            <input 
                                onChange={(e)=>setCategories(e.target.value)}
                                value = {categories}
                                id="categories" 
                                name="categories" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Categories" 
                                />
                        </div>
                        <div className='pt-2'>
                            <label className="sr-only">Additional</label>
                            <input 
                                onChange={(e)=>setAdditional(e.target.value)}
                                value = {additional}
                                id="additional" 
                                name="additional" 
                                required 
                                className="h-16 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                placeholder="Additional" 
                                />
                        </div>
                    </div>

                    <div>
                        <button 
                            onClick={newPost}
                            type="button" 
                            className="h-16 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <p className='my-auto'> Post </p>
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
