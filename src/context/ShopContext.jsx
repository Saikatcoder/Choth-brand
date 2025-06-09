/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const Shopcontext = createContext();
export const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const addToCart = async(itemId,size)=>{
    if(!size){
     toast.error('please Select the Size', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "colored",
});
      return
    }
    let cartData = structuredClone(cartItem)
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] =1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] =1;
    }
    setCartItem(cartData)
  }

  const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item]>0){

          }
        } catch (error) {
          
        }
      }
    }
  }
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,addToCart
  };
  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
