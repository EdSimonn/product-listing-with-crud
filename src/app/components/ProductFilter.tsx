import React, { FC } from 'react';

interface ProductFilterProps {
  onChange: (category: string) => void;
}

const ProductFilter: FC<ProductFilterProps> = ({ onChange }) => {
  const categories = ['All', 'Bags', 'Shoes', 'Furniture', 'Decor'];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    console.log("Dropdown Selected Category:", selectedCategory);

    onChange(selectedCategory === 'All' ? '' : selectedCategory);
  };

  return (
    <div className="my-4">
      <select id="category" onChange={handleSelectChange} className="p-1 border">
        {categories.map((category) => (
          <option key={category} value={category} className="text-xs">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
