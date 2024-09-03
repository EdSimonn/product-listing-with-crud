

"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Product, getProducts, saveProducts } from '../../utils/localStorage';

const EditProduct = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [id, setId] = useState<string | undefined>(undefined);

  const categories = ['Bags', 'Shoes', 'Furniture', 'Decor']; // Example categories

  useEffect(() => {
    // Fetch id from URL or other source
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    setId(idFromUrl || '');
  }, []);

  useEffect(() => {
    if (id) {
      const products = getProducts();
      const foundProduct = products.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error('Product not found');
      }
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (product) {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (product) {
      const updatedProducts = getProducts().map((p) =>
        p.id === id ? product : p
      );
      saveProducts(updatedProducts);
      router.push(`/products/${id}`);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-12 pt-24 lg:py-24 lg:px-8 ">

      <h1 className="text-xl font-bold mb-4">Edit Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <select
        name="category"
        value={product.category}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      >
        <option value="" disabled>Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={product.image}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 mt-4"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProduct;




// 'use client'

// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { Product, getProducts, saveProducts } from '../../utils/localStorage';

// const EditProduct = () => {
//   const router = useRouter();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [id, setId] = useState<string | undefined>(undefined);

//   useEffect(() => {
//     // Fetch id from URL or other source
//     const urlParams = new URLSearchParams(window.location.search);
//     const idFromUrl = urlParams.get('id');
//     setId(idFromUrl || '');
//   }, []);

//   useEffect(() => {
//     if (id) {
//       const products = getProducts();
//       console.log('Products:', products); // Debugging
//       const foundProduct = products.find((p) => p.id === id);
//       console.log('Found Product:', foundProduct); // Debugging
//       if (foundProduct) {
//         setProduct(foundProduct);
//       } else {
//         console.error('Product not found');
//       }
//     }
//   }, [id]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     if (product) {
//       setProduct({ ...product, [name]: value });
//     }
//   };

//   const handleSubmit = () => {
//     if (product) {
//       const updatedProducts = getProducts().map((p) =>
//         p.id === id ? product : p
//       );
//       saveProducts(updatedProducts);
//       router.push(`/products/${id}`);
//     }
//   };

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-6 lg:py-16 lg:px-8 ">
//       <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
//       <input
//         type="text"
//         name="name"
//         placeholder="Product Name"
//         value={product.name}
//         onChange={handleChange}
//         className="border p-2 mb-2 w-full"
//       />

//       <input
//         type="text"
//         name="category"
//         placeholder="Category"
//         value={product.category}
//         onChange={handleChange}
//         className="border p-2 mb-2 w-full"
//       />

//       <textarea
//         name="description"
//         placeholder="Description"
//         value={product.description}
//         onChange={handleChange}
//         className="border p-2 mb-2 w-full"
//       />

//       <input
//         type="number"
//         name="price"
//         placeholder="Price"
//         value={product.price}
//         onChange={handleChange}
//         className="border p-2 mb-2 w-full"
//       />

//       <input
//         type="text"
//         name="image"
//         placeholder="Image URL"
//         value={product.image}
//         onChange={handleChange}
//         className="border p-2 mb-2 w-full"
//       />

//       <button
//         onClick={handleSubmit}
//         className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 mt-4" >
//         Save Changes
//       </button>
//     </div>
//   );
// };

// export default EditProduct;
