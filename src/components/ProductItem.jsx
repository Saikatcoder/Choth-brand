import React from "react";
import { Shopcontext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ name, id, price, image }) => {
  return (
    <Link className="text-white cursor-pointer " to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="mt-5 text-xl font-medium text-white">₹ {price.toLocaleString("en-IN")}</p>
    </Link>
  );
};

export default ProductItem;
