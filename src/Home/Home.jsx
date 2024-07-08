import React, { useEffect, useState } from "react";
import Header from "../components/headers/Header";
import IntroductionContent from "../components/Content/IntroductionContent";
import AllProducts from "../components/Products/AllProducts";
import Features from "../components/Features/Features";
import Rating from "../components/Rating/Rating";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts()
  }, []);
  return (
    <div>
      <Header />
      <IntroductionContent />
      <>
      {products.length > 0 ? (
        <AllProducts products={products} />
      ) : (
        <div>loading..</div>
      )}
      </>
      
      <Features />
      <Rating />
      <Footer />
    </div>
  );
};

export default Home;
