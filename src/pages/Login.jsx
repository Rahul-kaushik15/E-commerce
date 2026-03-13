import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign up')
  const { navigate } = useContext(ShopContext)

  const FormHandler = (e)=>{
    e.preventDefault()
    // Logic for authentication would go here
    navigate('/')
  }

  return (
    <form onSubmit={FormHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className='prata-regular text-3xl '>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>

        </div>
        {currentState === 'Login' ? '' : <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 ' required/>}
        <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 ' required/>
        <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 ' required/>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className='cursor-pointer text-xs'>Forgot your Password?</p>
          {
            currentState === 'Login' ? 
            <p className='cursor-pointer text-xs' onClick={()=> setCurrentState('Sign Up')}>Create Account</p>
            :
            <p onClick={()=> setCurrentState('Login')} className='cursor-pointer  text-xs'>Login Here</p>
          }
        </div>
        <button className='cursor-pointer w-full bg-black text-white px-3 py-1 active:bg-gray-600'>{currentState  === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
