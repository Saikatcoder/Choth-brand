import React from 'react';
import { FaBoxOpen, FaRupeeSign, FaTag } from 'react-icons/fa';

const products = [
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1399,
    image: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5270.jpg?v=1680164001",
    stock: "In Stock",
    description: 'High precision sensor, customizable buttons, RGB lighting.',
    discount: 20,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1399,
    image: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5270.jpg?v=1680164001",
    stock: "In Stock",
    description: 'High precision sensor, customizable buttons, RGB lighting.',
    discount: 20,
  },
];

const Product = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaBoxOpen className="text-purple-400" />
        Products Overview
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const discountedPrice = product.discount
            ? Math.round(product.price - (product.price * product.discount) / 100)
            : null;

          return (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-purple-600 hover:scale-[1.01] transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 w-auto rounded-md mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>

              {product.discount ? (
                <p className="text-purple-300 flex items-center gap-1 mb-1">
                  <FaRupeeSign />
                  <span className="line-through opacity-60">{product.price}</span>
                  <span className="ml-2 text-green-400">{discountedPrice}</span>
                </p>
              ) : (
                <p className="text-purple-300 flex items-center gap-1 mb-1">
                  <FaRupeeSign />
                  {product.price}
                </p>
              )}

              <p
                className={`text-sm mb-2 ${
                  product.stock === "In Stock" ? "text-green-400" : "text-red-400"
                }`}
              >
                {product.stock}
              </p>

              <p className="text-sm text-gray-300 mb-2">
                {product.description || "No description available."}
              </p>

              {product.discount && (
                <p className="flex items-center gap-1 text-sm text-yellow-400">
                  <FaTag />
                  {product.discount}% off
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
