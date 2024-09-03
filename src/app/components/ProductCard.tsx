import React from "react";

import { Product } from "../utils/localStorage";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="group cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-auto bg-white p-4 transition-transform duration-500 group-hover:scale-110"
        width={400}
        height={400}
      />
      <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs uppercase px-2 py-1">
        New
      </span>

      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white text-xs uppercase transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        View Details
      </button>
    </div>

    <div className="p-4 text-center">
      <h2 className="text-sm font-medium group-hover:text-indigo-600 transition-colors duration-300">
        {product.name}
      </h2>
      <p className="text-gray-500 group-hover:text-black transition-colors duration-300">
        ${product.price}
      </p>
    </div>
  </div>
);

export default ProductCard;
