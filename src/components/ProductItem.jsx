import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id, name, price, image}) => {
    
    const {currency} = useContext(ShopContext);
  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`} className=' bg-gray-200 cursor-pointer '>
        <div className="overflow-hidden ">
            <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out ' />
        </div>
        <p className='pt-3 text-sm pb-1 pl-3'>{name}</p>
        <p className='text-sm font-medium pl-3 pb-2'>{currency}{price.toFixed(2)}</p>
    </Link>
  )
}

export default ProductItem
