import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(Shopcontext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size ,setSize] = useState('')
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product-image */}
        <div className="flex-1 flex  flex-col-reverse sm:flex-row gap-3">
          <div className="sm:flex-col flex overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={()=>setImage(item)}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-white">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className="pl-2 text-white">{122}</p>
          </div>
         <p className="mt-5 text-3xl font-medium text-white">₹ {productData.price.toLocaleString("en-IN")}</p>
          <p className="mt-5 sm:text-sm  font-medium text-gray-300">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item ,index)=>(
                <button onClick={()=> setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 text-black ${item===size ? 'border-orange-500 border-2' : ""}`}>{item}</button>
              ))}
            </div>
          </div>
          <button className=" text-white bg-orange-500 px-8 py-3 active:bg-gray-700">ADD TO CART</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
