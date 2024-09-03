"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { Product, getProducts } from "../utils/localStorage";
import ProductFilter from "@/app/components/ProductFilter";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts = getProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);

    console.log("All Products:", allProducts);
  }, []);

  const handleFilterChange = (category: string) => {
    console.log("Selected Category:", category);

    if (category) {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);

      console.log("Filtered Products:", filtered);
    } else {
      setFilteredProducts(products);
      console.log("Showing All Products");
    }
  };

  return (
    <div className="text-black bg-gray-50">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-20 lg:py-24 lg:px-8 ">
        <div className="flex justify-between items-center">
          <div className="text-md">Featured Products</div>
          <div>
            <ProductFilter onChange={handleFilterChange} />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div>
                  <ProductCard product={product} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link href="/products/add">
            <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
              Add Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
