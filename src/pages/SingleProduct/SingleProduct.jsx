import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const toNavigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id, product);

  const fetchsingleProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchsingleProduct();
  },[]);

  const handleCart = (product, guide) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const isProductInCart = cart.find((item) => item.id === product.id);
    if (!isProductInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart",JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }

    if (guide) {
      toNavigate("/cart");
    }
  };

  const addToCart = () => handleCart(product);

  const buyNow = () => handleCart(product, true);

  if (!Object.keys(product).length)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        product not found...
      </div>
    );

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product?.title}
              className="lg:w-1/2 w-full lg:h-96 h-64 max-h-[600px] object-contain object-center rounded"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="flex text-gray-600 ">
                    Ratings :{" "}
                    <div className="ml-2 text-purple-800">
                      {" "}
                      {product?.rating?.rate}
                    </div>{" "}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <Link className="text-purple-800">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link className="ml-1 text-purple-800">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                  <Link className="ml-1 text-purple-800">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </Link>
                </span>
              </div>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-purple-800 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹ {product?.price}
                </span>
                <div className=" flex gap-1">
                  <button
                    className=" ml-auto text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded "
                    onClick={buyNow}
                  >
                    Buy now
                  </button>
                  <button
                    className=" ml-auto mr-2  border-red-600 text-red-600 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white border rounded"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
