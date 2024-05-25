import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Search from './components/Search';

const App = () => {
  const [loading,setLoading]=useState(true)
  const [Error,setError]=useState(false)

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
         await axios.get('https://dummyjson.com/products').then((response)=>{
          
        //  console.log(response.data.products)
         setProducts(response.data.products);
         setFilteredProducts(response.data.products);
         setLoading(false)
      });
        
      } catch (error) {
        console.error('Error fetching products', error);
        setError(true)
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {

    let updatedProducts = products;

    //Filtering out for searching based on query by changing the values to lowercases
    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtering based on selected Query 
    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    // sorting based on price 
    if (sortOption) {
      if (sortOption.includes('price')) {
        updatedProducts = updatedProducts.sort((a, b) =>
          sortOption === 'price-asc' ? a.price - b.price : b.price - a.price
        );
      } else if (sortOption.includes('name')) {
        updatedProducts = updatedProducts.sort((a, b) =>
          sortOption === 'name-asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
      }
    }

    setFilteredProducts(updatedProducts);
  }, [category,query,sortOption,products]);

  return (
    <div className="w-[95%] m-auto flex flex-col mt-5 p-5 bg-slate-400">
      <div className='w-3/4 m-auto flex justify-between items-center'>

      {/* Search Functionality */}
      <Search onSearch={setQuery} />

      {/* Filter Functionality */}
      <Filter onFilter={setCategory} vals={products}/>

      {/* Sorting Functionality */}
      <Sort onSort={setSortOption} />
      </div>

      {/* Mapping */}
      {loading?<h1 className='mt-5 text-3xl text-center font-bold text-blue-800 '>Loading.......</h1>:Error?<h1 className='mt-5 text-3xl text-center font-bold text-red-600'>Error.......</h1>:<ProductList products={filteredProducts} />}
    </div>
  );
};

export default App;
