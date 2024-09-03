"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product, getProducts, saveProducts } from "@/app/utils/localStorage";
import Breadcrumb from "@/app/components/Breadcrumb";

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const products = getProducts();
      const foundProduct = products.find((p) => p.id === productId);
      setProduct(foundProduct || null);
    }
  }, [productId]);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = getProducts().filter((p) => p.id !== productId);
      saveProducts(updatedProducts);
      router.push("/");
    }
  };

  if (!product) return <div>Loading...</div>;

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-20 lg:py-32 pt-36 lg:px-8 ">
        <div className='my-4'>
        <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-auto bg-white p-4 transition-transform duration-500 group-hover:scale-110"
              width={200}
              height={200}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                {product.name}{" "}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                ${product.price}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600 text-sm">
                  (1 Customer Review)
                </span>
              </div>
              <p className="text-gray-700 mt-4">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="text-sm text-gray-700">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-2 py-1 text-gray-700"
                  >
                    -
                  </button>
                  <input
                    id="quantity"
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-2 py-1 text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Add to Cart
              </button>
            </div>

            {/* Add to Wishlist */}
            <div>
              <button className="text-gray-600 flex items-center space-x-2 hover:text-gray-900">
                <span>♥</span>
                <span>Add to Wishlist</span>
              </button>
            </div>

            <div className="flex gap-4">
              <Link href={`/products/edit?id=${product.id}`}>
                <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                  Edit
                </button>
              </Link>

              <button
                onClick={handleDelete}
                className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
