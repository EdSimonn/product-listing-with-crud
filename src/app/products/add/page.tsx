"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, getProducts, saveProducts } from "@/app/utils/localStorage";

const AddProduct = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    category: "",
    description: "",
    price: 0,
    image: "",
  });

  const categories = ['Bags', 'Shoes', 'Furniture', 'Decor']; 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = () => {
    const newProduct: Product = { id: Date.now().toString(), ...product };
    const updatedProducts = [...getProducts(), newProduct];
    saveProducts(updatedProducts);
    router.push("/");
  };

  return (
    <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-12 pt-24 lg:py-24 lg:px-8 ">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
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
        className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 mt-4"
      >
        Save Product
      </button>
    </div>
  );
};

export default AddProduct;


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Product, getProducts, saveProducts } from "@/app/utils/localStorage";

// const AddProduct = () => {
//   const router = useRouter();
//   const [product, setProduct] = useState<Omit<Product, "id">>({
//     name: "",
//     category: "",
//     description: "",
//     price: 0,
//     image: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//   };

//   const handleSubmit = () => {
//     const newProduct: Product = { id: Date.now().toString(), ...product };
//     const updatedProducts = [...getProducts(), newProduct];
//     saveProducts(updatedProducts);
//     router.push("/");
//   };

//   return (
//     <div className="container mx-auto w-full max-w-screen-xl ss:p-10 p-4 py-12 pt-24 lg:py-24 lg:px-8 ">
//     <h1 className="text-xl font-bold mb-4">Add New Product</h1>
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
//         className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 mt-4"      >
//         Save Product
//       </button>
//     </div>
//   );
// };

// export default AddProduct;
