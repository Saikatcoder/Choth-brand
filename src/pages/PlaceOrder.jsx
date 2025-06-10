import React, { useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { Shopcontext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { navigate } = useContext(Shopcontext);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 pt-5 sm:pt-14 px-4 min-h-[80vh]">
      {/* Left Side - Delivery Info */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="text-xl text-white my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        {/* Name */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
        </div>

        {/* Email */}
        <input
          type="text"
          placeholder="Email address"
          className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
        />

        {/* Street */}
        <input
          type="text"
          placeholder="Enter Street Name"
          className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
        />

        {/* City + State */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter City"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Enter State"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
        </div>

        {/* Pincode + Country */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="number"
            placeholder="Enter Pincode"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Enter Country"
            className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
          />
        </div>

        {/* Phone */}
        <input
          type="number"
          placeholder="Enter Phone number"
          className="border border-slate-300 text-white rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right Side - Cart + Payment */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <CartTotal />

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-orange-500 hover:bg-orange-600 px-16 py-3 text-black"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
