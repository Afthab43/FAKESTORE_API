import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../../components/Products/AllProducts";

const CategoryProducts = () => {
  const { name } = useParams;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  if (products.length === 0) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
};

export default CategoryProducts;
