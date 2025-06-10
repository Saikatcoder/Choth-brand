import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const  {  currency,delivery_fee, getCartAmmount} = useContext(Shopcontext)
  return (
    <div className='w-full'>
      <div className="text-2xl text-white">
        <Title text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p>SubTotal</p>
            <p>{currency}{getCartAmmount()}.00</p>
        </div>
        <hr />
         <div className="flex justify-between">
            <p className='text-white'>Shipping Free</p>
            <p className='text-white'>{currency}{delivery_fee}</p>
         </div>
         <hr />
         <div className="flex justify-between">
            <b className='text-white'>Total</b>
            <b className='text-white'>{currency}{getCartAmmount() === 0 ? 0 : getCartAmmount()+ delivery_fee}</b>
         </div>
      </div>
    </div>
  )
}

export default CartTotal
