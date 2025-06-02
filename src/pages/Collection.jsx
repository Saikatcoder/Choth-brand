import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [catagory, setcatagory] = useState([]);
  const [Subcategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (catagory.includes(value)) {
      setcatagory((prev) => prev.filter((item) => item !== value));
    } else {
      setcatagory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (Subcategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

 useEffect(() => {
  let filtered = products;
  
  if (catagory.length > 0) {
    filtered = filtered.filter((item) => catagory.includes(item.category));
  }

  if (Subcategory.length > 0) {
    filtered = filtered.filter((item) => {
      return Subcategory.includes(item.subCategory);
    });
  }

  setFilterProducts(filtered);
}, [catagory, Subcategory, products]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 text-2xl flex items-center cursor-pointer gap-2 "
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        <div className={`${showFilter ? "block" : "hidden"} sm:block`}>
          {/* Category Filter */}
          <div className="border pl-5 py-3 mt-6 border-gray-300">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Men" onChange={toggleCategory} />
                Men
              </p>
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Women" onChange={toggleCategory} />
                Woman
              </p>
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Kids" onChange={toggleCategory} />
                Kids
              </p>
            </div>
          </div>

          {/* Subcategory Filter */}
          <div className="border pl-5 py-3 my-5 border-gray-300">
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Topwear" onChange={toggleSubCategory} />
                Topware
              </p>
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Bottomwear" onChange={toggleSubCategory} />
                Buttom Ware
              </p>
              <p className="gap-2 flex text-2xl">
                <input type="checkbox" className="w-5 " value="Winterwear" onChange={toggleSubCategory} />
                Winter Ware
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rightside */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Relavent</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        <div className="grid grid-col md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
