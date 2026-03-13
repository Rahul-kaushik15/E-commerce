import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
    

    const currency = "$";
    const delivery_Fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate() 
    
    const getCartCount = ()=>{
        let count = 0;
        for(let item in cartItems){
            for(let size in cartItems[item]){
                count += cartItems[item][size];
            }
        }
        return count;
    }

    // useEffect(()=>{
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //     console.log(cartItems);
    // }, [cartItems])


    const AddtoCart = async (itemId, size)=>{
        if(!size){
            toast.error("Please select a Size")
            return;
        }
       
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

    }


    const updateQuantity = async(itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const size in cartItems[items]){
                totalAmount += itemInfo.price * cartItems[items][size];
            }
        }
        return totalAmount;
    }


    const value = {
        products, currency, delivery_Fee, search, setSearch, showSearch, setShowSearch, AddtoCart, cartItems,
        getCartCount, updateQuantity, getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}> 
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;