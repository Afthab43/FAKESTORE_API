import React from "react";
import { Link } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import AllProductsCards from './../../components/Products/AllProductsCards';

const CartPage = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex  my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">shopping cart</h1>
              <h2 className="font-semibold text-2xl">Items: 1</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            <div className="flex items-center hover:bg-gray-100  px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20 h-20">
                  <img className="h-24" src="../../assets/AllProductsCards" alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">Iphone 6s</span>
                  <span className=" text-xs">Apple</span>
                  <Link className="font-semibold hover:text-red-500 text-red-700 text-xs">
                    Remove
                  </Link>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <button className="fill-current border align-middle px-1">
                  +
                </button>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />
                <button className="fill-current border align-middle px-1">
                  -
                </button>
                {/* <svg  className='fill-current text-gray-600 w-3' viewBox='0 0 448 512'>
                    <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32C-17.67 0-32 14.33-32 32v144H32C-17.67 0-32 14.33-32 32V32C0 17.67 14.33 32 32 32H144V144C0 17.67 14.33 32 32 32h32C17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'/>
                    </svg> */}
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                $ 400.00
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                $ 400.00
              </span>
            </div>
            {/* <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                <div className='flex w-2/5'>
                    <div className='w-20'>
                        <img className='h-24' src="" alt="" />
                    </div>
                </div>
            </div> */}

            <Link to={'/products'} className="flex items-center justify-center gap-1 font-semibold text-purple-800  text-sm mt-10 max-w-fit hover:text-red-500">
            <IoArrowBack /> Continue Shopping
            </Link>
          </div>
          <div className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">item 2</span>
              <span className="font-semibold text-sm">$ 567.00</span>
            </div>
            <div>
              <label
                className="font-medium inline-block mb-3 text-sm uppercase"
                htmlFor=""
              >
                Shipping
              </label>
              <select
                className="block bg-slate-300 p-2 text-gray-600 w-full text-sm outline-none"
                name=""
                id=""
              >
                <option className="py-7" value="">Standard - $5.00</option>
              </select>
            </div>
            <div className="py-5 mt-2">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo code</label>
                <input id="promo" type="text" placeholder="Enter PROMO CODE" className="p-2 text-sm w-full border border-slate-800 outline-none" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-md">Apply</button>

            <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span> $ 600</span>
                </div>
                <button className="bg-purple-900 font-semibold hover:bg-purple-800 py-3 text-sm text-white uppercase w-full">
                    checkout
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
