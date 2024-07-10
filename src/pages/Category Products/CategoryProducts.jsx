import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProductsCards from "../../components/Products/AllProductsCards";
import Categories from "../../components/categories/Categories";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchbyCategory = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchbyCategory();
  }, [name]);
  if (products.length === 0) {
    console.log("loading ", products.length);
    return <h1>loading...</h1>;
  }

  return (
    <div>
        <Categories/>
      <AllProductsCards products={products} />
    </div>
  );
};

export default CategoryProducts;
