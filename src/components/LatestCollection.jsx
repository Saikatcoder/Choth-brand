import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  const { category } = useParams(); // eg: /collection/Men

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = products.filter((item) => item.category === category);
    }

    setLatestProducts(filtered.slice(0, 10));
  }, [products, category]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={category || "Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-white">
          Explore our latest {category || ""} collection specially handpicked for you.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
