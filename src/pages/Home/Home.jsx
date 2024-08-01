import React, { useEffect, useState } from "react";
import IntroductionContent from "../../components/Content/IntroductionContent";
import AllProducts from "../../components/Products/AllProductsCards";
import Rating from "../../components/Rating/Rating";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <IntroductionContent />
      {/* <Categories/> */}
      <>
        {products.length > 0 ? (
          <AllProducts products={products} />
        ) : (
          <div>loading..</div>
        )}
      </>
      <Rating />
    </div>
  );
};

export default Home;
