import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search,  showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');





  const ToggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const ToggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const ApplyFilter = ()=>{
    let productsCopy = products.slice();

    if(showSearch && search ){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

      
    }


    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
    
  }

  const sortProducts = () =>{
    let FpCopy = filterProduct.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProduct(FpCopy.sort((a,b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(FpCopy.sort((a,b) => b.price - a.price));    
        break;
    
      default:
        ApplyFilter();
        break; 
    }
  }
      
  useEffect(()=>{
    ApplyFilter();
  }, [category,subCategory,products, search, showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])



  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-40 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-2xl flex items-center cursor-pointer gap-2 "
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-4 ${showFilter ? "" : "hidden"}`}
        >
          <p className="text-sm font-medium mb-3 cursor-pointer">CATEGORY</p>
          <div className="flex flex-col gap-2 text-gray-700 font-light">
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Men"} onChange={ToggleCategory} />
              Men's
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Women"} onChange={ToggleCategory} />
              Women's
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Kids"} onChange={ToggleCategory} />
              Kid's
            </label>
          </div>
        </div>

        {/* Sub Categories */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-4 ${showFilter ? "" : "hidden"}`}
        >
          <p className="text-sm font-medium mb-3 cursor-pointer">TYPE</p>
          <div className="flex flex-col gap-2 text-gray-700 font-light">
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Topwear"} onChange={ToggleSubCategory} />
              TopWear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Bottomwear"} onChange={ToggleSubCategory} />
              BottomWear
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" value={"Winterwear"} onChange={ToggleSubCategory}  />
              WinterWear
            </label>
          </div>
        </div>
      </div>
{/*  Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'ALL'} text2={'COLLECTION'}/>
        {/* Product Sort */}
        <select onChange={(e)=> setSortType(e.target.value)} className="border border-gray-300 px-3 py-1 text-sm">
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price:  High to Low</option>
        </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6">
          {filterProduct.map((product, index) => (
            <ProductItem key={index} name={product.name} id={product._id} image={product.image} price={product.price} />
          ))}
        </div>
      </div> 

    </div>
  );
};

export default Collection;


  