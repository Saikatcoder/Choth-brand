import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useLocation } from "react-router-dom";

// Inside your component


const Collection = () => {
  const { products, search, showSearch } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [Subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const location = useLocation();



  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setcategory((prev) => prev.filter((item) => item !== value));
    } else {
      setcategory((prev) => [...prev, value]);
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

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    if (Subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        Subcategory.includes(item.subCategory),
      );
    }
    setFilterProducts(productsCopy);
  };
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    applyFilter();
  }, [category, Subcategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const selectedCat = params.get("category");
  if (selectedCat) {
    setcategory([selectedCat]);
  }
}, [location.search]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 text-2xl flex items-center cursor-pointer gap-2 text-white "
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
          <div className="border pl-5 py-3 mt-6 text-white">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-white">
              <p className="gap-2 flex sm:text-xl text-2xl text-white">
                <input
                  type="checkbox"
                  className="w-5 "
                  value="Men"
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="gap-2 flex sm:text-xl text-2xl text-white">
                <input
                  type="checkbox"
                  className="w-5 "
                  value="Women"
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="gap-2 flex sm:text-xl text-2xl text-white">
                <input
                  type="checkbox"
                  className="w-5 "
                  value="Kids"
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>

          {/* Subcategory Filter */}
          <div className="border pl-5 py-3 my-5 text-white">
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-white">
              <p className="gap-2 flex sm:text-xl text-2xl text-white">
                <input
                  type="checkbox"
                  className="w-5 "
                  value="Topwear"
                  onChange={toggleSubCategory}
                />
                Top ware
              </p>
              <p className="gap-2 flex sm:text-xl text-2xl text-white">
                <input
                  type="checkbox"
                  className="w-5 "
                  value="Bottomwear"
                  onChange={toggleSubCategory}
                />
                Buttom Ware
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rightside */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            className="border-2 border-gray-300 text-sm text-white bg-black px-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Relavent</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        <div className="grid grid--+col md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
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
        {/* HHH */}
      </div>
    </div>
  );
};

export default Collection;
