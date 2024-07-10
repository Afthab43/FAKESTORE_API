import React from "react";
import { Link } from "react-router-dom";

const AllProductsCards = ({ products=[]}) => {
  return (
    <div>
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-purple-800 tracking-widest font-medium title-font mb-1">
          ALL POPULAR VIEW
        </h2>
        <h1 className="sm:text-6xl text-2xl font-semibold title-font text-gray-900 hover:text-purple-800 cursor-default">
          EXCLUSIVE PRODUCTS
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((prod) => {
                console.log(prod);
                const{id,title,price,image,category}=prod;
              return (
                <>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg cursor-pointer">
                    <Link
                      to={`/products/${id}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt={title}
                        className="object-contain object-center w-full h-full block"
                        src={image}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                        {category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                      </h2>
                      <p className="mt-1 font-semibold">₹ {price}</p>
                    </div>
                  </div>
                </>
              );
            })}

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProductsCards;