import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t ">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div> 

      <div className="my-10 flex flex-col md:flex-row justify-center gap-16 mb-28">
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: +1-212-466-9850 <br /> Email: admin@forever.com</p> 
          <p className='font-semibold text-xl  text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white cursor-pointer rounded transition-all duration-500'>Explore Jobs </button>
        </div>
      </div>
      <NewsLetterBox />      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={'OUR'} text2={'LOCATION'} />
        </div>
        <div className="w-full h-[450px] rounded overflow-hidden border">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937619067!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625151234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact
