import React, { useContext } from "react";
import { Shopcontext } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { products , currency, cartItem} = useContext(Shopcontext)

  const cartOrders = [];

  for (const productId in cartItem) {
  const product = products.find(p => p._id === productId);
  if (!product) continue;

  for (const size in cartItem[productId]) {
    cartOrders.push({
      ...product,
      size,
      quantity: cartItem[productId][size],
    });
  }
}
  return (
    <div className="border-t pt-16">
      <div className="text-2xl text-white">
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
     {cartOrders.map((item, index) => (
  <div key={index} className="py-4 border-t border-b text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div className="flex items-start gap-6 text-sm text-white">
      <img src={item.image[0]} className="w-16 sm:w-20" alt={item.name} />
    </div>
    <p className="sm:text-base font-medium">{item.name}</p>
    <div className="flex items-center gap-3 mt-2 text-base text-white">
      <p className="text-lg">{currency}{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Size: {item.size}</p>
    </div>
    <p>Date: <span className="text-white">{new Date().toLocaleDateString()}</span></p>
  </div>
))}
    </div>
  )
};

export default Order;
