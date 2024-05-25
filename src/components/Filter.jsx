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
    <select onChange={(e) => onFilter(e.target.value)}>
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
