import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

const CategoryPage = () => {
  const {products } = useContext(Shopcontext);
  const { category } = useParams();

  const [selectedSubs, setSelectedSubs] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

 const categoryProducts = products.filter(
  (item) => item.category.toLowerCase() === category.toLowerCase()
);


  const subcategories = [
    ...new Set(categoryProducts.map((item) => item.subCategory))
  ];

  useEffect(() => {
    if (selectedSubs.length === 0) {
      setFilteredProducts(categoryProducts);
    } else {
      setFilteredProducts(
        categoryProducts.filter((item) =>
          selectedSubs.includes(item.subCategory)
        )
      );
    }
  }, [selectedSubs, category]);
  

  const toggleFilter = (sub) => {
    setSelectedSubs((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t">
      {/* Filter Sidebar */}
      <div className="min-w-60 text-white">
        <p className="text-2xl mb-4 font-semibold capitalize">{category} Filters</p>
        <div className="border p-4 rounded-md">
          <p className="mb-2 font-medium text-sm text-white">Subcategories</p>
          <div className="flex flex-col gap-2 text-white text-sm">
            {subcategories.map((sub, idx) => (
              <label key={idx} className="flex items-center gap-2 text-2xl">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  value={sub}
                  checked={selectedSubs.includes(sub)}
                  onChange={() => toggleFilter(sub)}
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 sm:text-2xl">
        <Title  text1={category.toUpperCase()} text2={'PRODUCT'} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
