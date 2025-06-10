import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shopcontext } from "../context/ShopContext";

const categories = ["Men", "Women", "Kids", "Bottomwear"];

const CategorySection = () => {
  const navigate = useNavigate();
  const { products } = useContext(Shopcontext);

  const getCategoryImage = (category) => {
    const product = products.find((item) => item.category === category);
    return product ? product.image[0] : "https://via.placeholder.com/300x400";
  };
const handleClick = (category) => {
  navigate(`/category/${category.toLowerCase()}`);
};


  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => handleClick(cat)}
          className="cursor-pointer overflow-hidden rounded-md border-2 border-gray-600 hover:border-white transition"
        >
          <img
            src={getCategoryImage(cat)}
            alt={cat}
            className="w-40 h-52 object-cover hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center text-white mt-2 font-medium">{cat}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
