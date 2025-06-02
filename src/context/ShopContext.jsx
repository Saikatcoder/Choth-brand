/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const Shopcontext = createContext();
export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
  };
  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
