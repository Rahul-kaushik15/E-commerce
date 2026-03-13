import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {

  const { productId } = useParams();
  const { products, currency, AddtoCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(""); 

  useEffect(() => {

    const foundProduct = products.find(item => item._id === productId);

    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }

  }, [productId, products]);

  if (!productData) return null;

  return (
    <div className="border-t pt-10 px-5">

      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE → PRODUCT IMAGES */}

        <div className="lg:w-1/2 w-full flex gap-4">

          {/* Thumbnail Images */}

          <div className="flex lg:flex-col gap-3 overflow-x-auto">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-20 h-20 object-cover border rounded cursor-pointer hover:border-black"
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}

          <div className="flex-1">
            <img
              src={image}
              className="w-full rounded-lg hover:scale-105 transition"
              alt=""
            />
          </div>

        </div>


        {/* RIGHT SIDE → PRODUCT DETAILS */}

        <div className="lg:w-1/2 w-full">

          <h1 className="text-3xl font-semibold">
            {productData.name}
          </h1>

          {/* Rating */}

          <div className="flex items-center gap-1 mt-3">
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_icon} className="w-4" alt="" />
            <img src={assets.star_dull_icon} className="w-4" alt="" />
            <p className="text-gray-500 text-sm">(120 reviews)</p>
          </div>

          {/* Price */}

          <p className="text-3xl font-bold mt-5">
            ${productData.price.toFixed(2)}
          </p>

          {/* Description */}

          <p className="text-gray-600 mt-4 leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selection */}

          <div className="mt-6">

            <p className="font-medium mb-3">Select Size</p>

            <div className="flex gap-3">

              {productData.sizes.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border rounded transition cursor-pointer
                  ${item === size
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>


          {/* Add To Cart Button */}

          <button onClick={()=> AddtoCart(productData._id,size)} className="mt-8 bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition cursor-pointer active:bg-gray-600">
            Add To Cart
          </button>


          {/* Product Policies */}

          <hr className="mt-8" />

          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>✔ 100% Original Product</p>
            <p>✔ Cash on Delivery Available</p>
            <p>✔ Easy Return & Exchange within 7 days</p>
          </div>

        </div>

      </div>

      {/* description & Review Section*/}
        <div className="mt-20 ">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.<p></p>
          </div>
        </div>


    { /* display related products */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  );
};

export default Product;