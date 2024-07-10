import React, { useEffect, useState } from 'react'
import AllProducts from '../../components/Products/AllProducts'
import Categories from '../../components/categories/Categories'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
  return (
    <div>
        <Categories/>
        {
            products.length>0 ? <AllProducts products={products}/> : <h1>Loading...</h1>

        }
    </div>
  )
}

export default Products
