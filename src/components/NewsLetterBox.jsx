import React, { useState } from 'react'

const NewsLetterBox = () => {

    const [formHandler, setFormHandler] = useState('')
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        setFormHandler('');
    }

    const FormHandler = (e)=>{
        console.log(e.target.value);
        setFormHandler(e.target.value);
    }

  return (
    <div className='text-center mt-15'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% Off!</p>
        <p className='text-gray-400 mt-3'>
            Subscribe to our newsletter and stay updated on the latest promotions, discounts, and exclusive offers. Don't miss out on the opportunity to save big on your favorite products!
        </p>
        <form onSubmit={onSubmitHandler} className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3 mb-5">
            <input onChange={FormHandler} required type="email" placeholder="Enter your email" className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500 py-2 px-4 lg:w-1/2 rounded" />
            <button type="submit" className="bg-black text-white py-2 px-4 active:bg-gray-600 cursor-pointer rounded">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
