import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className='w-3/4 m-auto mt-5 p-5 grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {products?.map((product) => (
        <div className='p-2 rounded shadow-custom bg-[#EFF5F7] hover:bg-blue-200'  key={product.id} >
          <h2 className='text-center text-xl font-bold'>{product.title}</h2>
          <p className='text-center text-md '>Category: {product.category}</p>
          <p className='text-center text-lg text-red'>Price: ${product.price}</p>
          <div><img src={product.thumbnail} alt="imgPro"/></div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
