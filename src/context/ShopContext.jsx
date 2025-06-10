/* eslint-disable react-refresh/only-export-components */
import { createContext,  useState } from "react";
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
            totalCount += cartItem[items][item]
          }
        } catch (error) {
         return error
        }
      }
    }
    return totalCount;
  }
  const updateQuentity= async (itemId,size,quantity)=>{
    let cartData= structuredClone(cartItem);
    cartData[itemId][size] = quantity
    setCartItem(cartData);
  }

  const getCartAmmount =  ()=>{
    let totalAmmount =0
    for(const items in cartItem){
      let itemInfo = products.find((product)=> product._id === items);
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item] > 0){
            totalAmmount += itemInfo.price * cartItem[items][item]
          }
        } catch (error) {
          error
        }
      }
    }
    return totalAmmount
  }
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,addToCart,
    getCartCount, updateQuentity, getCartAmmount
  };
  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
