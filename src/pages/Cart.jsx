import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItem , updateQuentity} = useContext(Shopcontext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
   

    const tempData = [];
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        if (cartItem[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItem[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl text-white mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-white grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_3fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt={productData.name}
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-xl text-gray-300">{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-100 text-black">{item.size}</p>
                  </div>
                </div>
              </div>
              
            <input onChange={(e)=>e.target.value ==='' || e.target.value === '0' ? null : updateQuentity(item._id, item.size, Number(e.target.value))} type="number"min={1} defaultValue={item.quantity} className="bg-white text-black border border-gray-400 rounded max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"/>
           <img onClick={()=>updateQuentity(item._id,item.size, 0)}
  src={assets.bin_icon}
  className="w-4 sm:w-5 cursor-pointer filter invert sepia saturate-500 hue-rotate-330 brightness-95"
  alt=""
/>

            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
