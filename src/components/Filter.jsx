import React, { useEffect, useState } from 'react';


const Filter = ({ onFilter , vals}) => {
   
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
         // Getting Categories for Filter
        const arrCategories = Array.from(new Set(vals.map(product => product.category)))
        setCategories(arrCategories)
    
    // console.log(categories,arrCategories)
    },[vals])

  return (
    <select onChange={(e) => onFilter(e.target.value)} className='mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm'>
      <option value="">All Categories</option>
      {categories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
